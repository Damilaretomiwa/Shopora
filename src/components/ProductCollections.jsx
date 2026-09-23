import "./ProductCollections.css";

function ProductCollections() {
  const collections = [
    {
      category: "Electronics",
      description: "Smart devices and everyday technology",
      products: [
        {
          name: "Wireless Headphones",
          price: "₦45,000",
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
        },
        {
          name: "Smart Watch",
          price: "₦55,000",
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
        },
        {
          name: "Laptop",
          price: "₦850,000",
          image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
        },
      ],
    },

    {
      category: "Fashion",
      description: "Refresh your wardrobe with modern styles",
      products: [
        {
          name: "Classic Sneakers",
          price: "₦38,000",
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
        },
        {
          name: "Leather Backpack",
          price: "₦32,000",
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
        },
        {
          name: "Wristwatch",
          price: "₦65,000",
          image:
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80",
        },
      ],
    },

    {
      category: "Home & Living",
      description: "Make your space comfortable and beautiful",
      products: [
        {
          name: "Modern Chair",
          price: "₦120,000",
          image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
        },
        {
          name: "Home Decoration",
          price: "₦35,000",
          image:
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
        },
        {
          name: "Table Lamp",
          price: "₦28,000",
          image:
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80",
        },
      ],
    },
  ];

  return (
    <section className="collections-section">
      <div className="collections-heading">
        <p>DISCOVER MORE</p>
        <h2>Shop by Category</h2>
        <span>
          Find products selected from some of our most popular categories.
        </span>
      </div>

      <div className="collections-container">
        {collections.map((collection) => (
          <div className="collection" key={collection.category}>
            <div className="collection-header">
              <div>
                <h3>{collection.category}</h3>
                <p>{collection.description}</p>
              </div>

              <a href="/shop">View All →</a>
            </div>

            <div className="collection-products">
              {collection.products.map((product) => (
                <div className="collection-product" key={product.name}>
                  <div className="collection-image">
                    <img src={product.image} alt={product.name} />
                  </div>

                  <div className="collection-info">
                    <h4>{product.name}</h4>
                    <strong>{product.price}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCollections;