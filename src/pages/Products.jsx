import "./Products.css";

export default function Products() {
  return (
    <section className="products-section">
      <h2 className="products-title">Our Fleet</h2>
      <div className="products-grid">
        <div className="product-card">
          <h3 className="product-title">Pickup Truck</h3>
          <p className="product-text">Perfect for small moves.</p>
        </div>
        <div className="product-card">
          <h3 className="product-title">Box Truck</h3>
          <p className="product-text">Ideal for medium-sized loads.</p>
        </div>
        <div className="product-card">
          <h3 className="product-title">Semi-Truck</h3>
          <p className="product-text">Best for heavy transport.</p>
        </div>
      </div>
    </section>
  );
}
