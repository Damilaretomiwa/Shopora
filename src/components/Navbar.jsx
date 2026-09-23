import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo">
          Shopora
        </a>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products, brands and categories"
          />

          <button>Search</button>
        </div>

        <div className="nav-actions">
          <a href="/login" className="account-link">
            Sign In
          </a>

          <a href="/signup" className="signup-btn">
            Sign Up
          </a>

          <a href="/cart" className="cart-link">
            Cart
          </a>
        </div>
      </nav>

      <div className="secondary-nav">
        <a href="/categories">Categories</a>
        <a href="/deals">Deals</a>
        <a href="/shop">All Products</a>
      </div>
    </>
  );
}

export default Navbar;