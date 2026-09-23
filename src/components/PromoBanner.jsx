import "./PromoBanner.css";

function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-content">
        <p className="promo-label">SHOPORA SPECIAL OFFER</p>

        <h2>Upgrade Your Everyday.</h2>

        <p className="promo-description">
          Discover amazing products and enjoy special prices on selected
          items for a limited time.
        </p>

        <a href="/deals" className="promo-button">
          Shop Today's Deals
        </a>
      </div>

      <div className="promo-highlight">
        <span>UP TO</span>
        <strong>50%</strong>
        <span>OFF</span>
      </div>
    </section>
  );
}

export default PromoBanner;