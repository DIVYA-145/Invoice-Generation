import { useParams } from "react-router-dom";
import "../styles/preview.css";

function InvoicePreview() {

  const { id } = useParams();

  const items = [
    {
      name: "Laptop",
      qty: 1,
      price: 50000,
    },
    {
      name: "Mouse",
      qty: 2,
      price: 1000,
    },
  ];

  // Calculations

  const subtotal = items.reduce(
    (acc, item) =>
      acc + item.qty * item.price,
    0
  );

  const tax = subtotal * 0.18;

  const total = subtotal + tax;

  return (

    <div className="preview-container">

      <div className="invoice-paper">

        {/* TOP SECTION */}

        <div className="invoice-top">

          <div>

            <h2>My Store</h2>

            <p>Hyderabad</p>

            <p>support@mystore.com</p>

          </div>

          <div>

            <h3>Invoice #{id}</h3>

            <p>Date: {new Date().toLocaleDateString()}</p>

          </div>

        </div>

        <hr />

        {/* CUSTOMER SECTION */}

        <div className="customer-section">

          <h3>Customer Info</h3>

          <p>Name: Divya</p>

          <p>Email: divya@gmail.com</p>

          <p>Phone: 9876543210</p>

        </div>

        {/* TABLE */}

        <table className="invoice-table">

          <thead>

            <tr>

              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>

            </tr>

          </thead>

          <tbody>

            {items.map((item, index) => (

              <tr key={index}>

                <td>{item.name}</td>

                <td>{item.qty}</td>

                <td>₹{item.price}</td>

                <td>
                  ₹{item.qty * item.price}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* TOTALS */}

        <div className="totals">

          <p>
            <strong>Subtotal:</strong>
            {" "}
            ₹{subtotal}
          </p>

          <p>
            <strong>Tax (18%):</strong>
            {" "}
            ₹{tax.toFixed(2)}
          </p>

          <h3>
            Grand Total:
            {" "}
            ₹{total.toFixed(2)}
          </h3>

        </div>

        {/* NOTES */}

        <div className="invoice-notes">

          <h4>Notes</h4>

          <p>
            Thank you for shopping with us.
          </p>

        </div>

        {/* BUTTONS */}

        <div className="preview-buttons">

          {/* Download PDF */}

          <button
            className="download-btn"
            onClick={() =>
              alert("PDF Download Started")
            }
          >
            Download PDF
          </button>

          {/* Print */}

          <button
            className="print-btn"
            onClick={() => window.print()}
          >
            Print
          </button>

        </div>

      </div>

    </div>

  );
}

export default InvoicePreview;