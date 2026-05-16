import { useState } from "react";
import "../styles/modal.css";
import { toast } from "react-toastify";

function InvoiceModal({ closeModal, selectedOrder }) {

  const [selectedTemplate, setSelectedTemplate] = useState("");

  const templates = [
    "Classic",
    "Modern",
    "Minimal",
  ];

  // =========================
  // GENERATE INVOICE FUNCTION
  // =========================

  const handleGenerateInvoice = () => {

    // Validation

    if (!selectedTemplate) {

      toast.error("Please select a template");

      return;
    }

    // Success Toast

    toast.success("Invoice Generated Successfully");

    // Close Modal

    closeModal();
  };

  return (

    <div className="modal-overlay">

      <div className="invoice-modal">

        {/* Header */}

        <div className="modal-header">

          <h2>Generate Invoice</h2>

          <button
            className="close-btn"
            onClick={closeModal}
          >
            X
          </button>

        </div>

        {/* Content */}

        <div className="modal-content">

          {/* LEFT SECTION */}

          <div className="form-section">

            <label>Invoice Date</label>

            <input
              type="date"
              defaultValue={
                new Date().toISOString().split("T")[0]
              }
            />

            <label>Payment Method</label>

            <select>

              <option>UPI</option>
              <option>Card</option>
              <option>Cash</option>

            </select>

            <label>Notes</label>

            <textarea
              rows="4"
              placeholder="Enter notes"
            />

            {/* BUTTON */}

            <button
              className="submit-btn"
              onClick={handleGenerateInvoice}
            >
              Generate Invoice
            </button>

          </div>

          {/* RIGHT SECTION */}

          <div className="template-section">

            <h3>Select Template</h3>

            <div className="template-grid">

              {templates.map((template, index) => (

                <div
                  key={index}
                  className={`template-card ${
                    selectedTemplate === template
                      ? "selected-template"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedTemplate(template)
                  }
                >

                  <h4>{template}</h4>

                  <div className="template-preview">

                    <p>Invoice</p>

                    <p>
                      Customer:
                      {" "}
                      {selectedOrder?.customer}
                    </p>

                    <p>
                      Total:
                      {" "}
                      ₹{selectedOrder?.total}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default InvoiceModal;