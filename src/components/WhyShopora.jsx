import "./WhyShopora.css";

function WhyShopora() {
  const benefits = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Get your orders delivered quickly and conveniently.",
    },
    {
      icon: "🔒",
      title: "Secure Shopping",
      description: "Your account and personal information are protected.",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      description: "Shop with confidence using secure payment methods.",
    },
    {
      icon: "🎧",
      title: "Customer Support",
      description: "We're here to help whenever you need assistance.",
    },
  ];

  return (
    <section className="why-shopora">
      <div className="why-heading">
        <p>THE SHOPORA EXPERIENCE</p>

        <h2>Why Shopora?</h2>

        <span>
          We make online shopping simple, convenient, and enjoyable.
        </span>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div className="benefit-card" key={benefit.title}>
            <div className="benefit-icon">{benefit.icon}</div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyShopora;