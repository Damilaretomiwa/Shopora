import "./Products.css";

function Products() {
  const products = [
    {
      name: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      price: "₦45,000",
      oldPrice: "₦60,000",
      discount: "25% OFF",
      rating: "4.8",
    },
    {
      name: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
      price: "₦55,000",
      oldPrice: "₦75,000",
      discount: "27% OFF",
      rating: "4.7",
    },
    {
      name: "Classic Sneakers",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      price: "₦38,000",
      oldPrice: "₦50,000",
      discount: "24% OFF",
      rating: "4.6",
    },
    {
      name: "Leather Backpack",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
      price: "₦32,000",
      oldPrice: "₦42,000",
      discount: "24% OFF",
      rating: "4.5",
    },
  ];

  return (
    <section className="products-section">
      <div className="section-heading">
        <div>
          <p>LIMITED-TIME OFFERS</p>
          <h2>Flash Deals</h2>
        </div>

        <a href="/deals">View All</a>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <div className="product-image-container">
              <span className="discount-badge">{product.discount}</span>

              <button className="wishlist-button">♡</button>

              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>

              <div className="rating">
                <span>★</span> {product.rating}
              </div>

              <div className="price-row">
                <strong>{product.price}</strong>
                <del>{product.oldPrice}</del>
              </div>

              <button className="add-cart-button">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;