import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { productsData } from '../data/products';

function Products() {
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const [selectedImage, setSelectedImage] = useState(null); // State for modal image
  const categories = ['All', ...new Set(productsData.map((p) => p.category))];

  const filteredProducts = category === 'All' ? productsData : productsData.filter((p) => p.category === category);
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'low-to-high') return a.price - b.price;
    if (sortOrder === 'high-to-low') return b.price - a.price;
    return 0;
  });

  // Open modal with selected image
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Harriet's Artistry - Crochet Products</title>
        <meta name="description" content="Browse our collection of handmade crochet beanies, sweaters, dresses, and more." />
      </Helmet>
      <section id="products" className="section section-products">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="filter-container">
            <div className="filter-group">
              <label>Filter by Category:</label>
              <select
                className="product-filter"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label>Sort by Price:</label>
              <select
                className="product-filter"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>
          <div className="product-grid">
            {sortedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} loading="lazy" />
                <h3 className="product-card-title">{product.name}</h3>
                <p className="product-card-category">{product.category}</p>
                <p className="product-card-price">Ksh.{product.price}</p>
                <p className="product-card-description">{product.description}</p>
                <div className="product-buttons">
                  <button
                    className="button button-view"
                    onClick={() => openModal(product.image)}
                  >
                    View Product
                  </button>
                  <a
                    href={`https://wa.me/+254745697327?text=I'm%20interested%20in%20ordering%20the%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-order"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="modal-close" onClick={closeModal}>×</span>
              <img src={selectedImage} alt="Product" className="modal-image" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Products;