import "./Categories.css";

function Categories() {
  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Home & Living",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Phones & Accessories",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section className="categories-section">
      <div className="section-heading">
        <div>
          <p>SHOP BY CATEGORY</p>
          <h2>Explore Our Categories</h2>
        </div>

        <a href="/categories">View All</a>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <a
            href={`/categories/${category.name.toLowerCase()}`}
            className="category-card"
            key={category.name}
          >
            <img src={category.image} alt={category.name} />

            <div className="category-overlay">
              <h3>{category.name}</h3>
              <span>Shop Now →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categories;