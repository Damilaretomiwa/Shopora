import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small-text">SHOP SMART. SHOP SIMPLE.</p>

        <h1>
          Everything You Need,
          <span> All in One Place.</span>
        </h1>

        <p className="hero-description">
          Discover great products, exciting deals, and everyday essentials
          at prices you'll love.
        </p>

        <div className="hero-buttons">
          <a href="/shop" className="hero-primary-btn">
            Shop Now
          </a>

          <a href="/deals" className="hero-secondary-btn">
            Explore Deals
          </a>
        </div>
      </div>

      <div className="hero-offer">
        <p>LIMITED-TIME DEALS</p>
        <h2>Up to 50% OFF</h2>
        <span>On selected products</span>
      </div>
    </section>
  );
}

export default Hero;