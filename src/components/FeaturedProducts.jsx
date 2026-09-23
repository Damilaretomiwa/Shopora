import "./FeaturedProducts.css";

function FeaturedProducts() {
  const products = [
    {
      name: "Premium Laptop",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
      price: "₦850,000",
      rating: "4.9",
    },
    {
      name: "Minimalist Wristwatch",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
      price: "₦65,000",
      rating: "4.8",
    },
    {
      name: "Modern Sneakers",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      price: "₦42,000",
      rating: "4.7",
    },
    {
      name: "Smartphone",
      category: "Phones & Accessories",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
      price: "₦520,000",
      rating: "4.8",
    },
  ];

  return (
    <section className="featured-section">
      <div className="section-heading">
        <div>
          <p>SHOPORA PICKS</p>
          <h2>Featured Products</h2>
        </div>

        <a href="/shop">View All</a>
      </div>

      <div className="featured-grid">
        {products.map((product) => (
          <div className="featured-card" key={product.name}>
            <div className="featured-image">
              <button className="featured-wishlist">♡</button>

              <img src={product.image} alt={product.name} />
            </div>

            <div className="featured-info">
              <span className="product-category">
                {product.category}
              </span>

              <h3>{product.name}</h3>

              <div className="featured-rating">
                <span>★</span> {product.rating}
              </div>

              <div className="featured-bottom">
                <strong>{product.price}</strong>

                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;