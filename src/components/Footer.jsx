import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>Shopora</h2>

          <p>
            Discover great products, exciting deals, and everyday essentials
            all in one place.
          </p>

          <div className="footer-contact">
            <span>📧 support@shopora.com</span>
            <span>📞 +234 800 000 0000</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>

          <a href="/shop">All Products</a>
          <a href="/categories">Categories</a>
          <a href="/deals">Deals</a>
          <a href="/new-arrivals">New Arrivals</a>
        </div>

        <div className="footer-column">
          <h3>Account</h3>

          <a href="/login">Sign In</a>
          <a href="/signup">Create Account</a>
          <a href="/cart">My Cart</a>
          <a href="/orders">My Orders</a>
        </div>

        <div className="footer-column">
          <h3>Help</h3>

          <a href="/contact">Contact Us</a>
          <a href="/shipping">Shipping Information</a>
          <a href="/returns">Returns & Refunds</a>
          <a href="/faq">FAQs</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Shopora. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;