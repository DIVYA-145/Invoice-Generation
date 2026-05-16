import { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import "../styles/orders.css";

import InvoiceModal from "../components/InvoiceModal";

function OrdersPage() {

  const [orders, setOrders] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

    try {

      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = res.data.map((item, index) => ({

        id: `ORD-${index + 1}`,

        customer: item.name,

        total: Math.floor(Math.random() * 5000),

        paymentStatus:
          index % 2 === 0
            ? "Paid"
            : "Pending",

      }));

      setOrders(data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="orders-container">

      <h1 className="title">
        Orders List
      </h1>

      {/* Desktop Table */}

      <div className="table-wrapper">

        <table className="orders-table">

          <thead>

            <tr>

              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.customer}</td>

                <td>
                  ₹{order.total}
                </td>

                <td>
                  {order.paymentStatus}
                </td>

                <td>

                  {/* Generate Button */}

                  <button
                    className="generate-btn"
                    onClick={() => {

                      setOpenModal(true);

                      setSelectedOrder(order);

                    }}
                  >
                    Generate Invoice
                  </button>

                  {/* Preview Button */}

                  <button
                    className="preview-btn"
                    onClick={() =>
                      navigate(
                        `/invoice/${order.id}`
                      )
                    }
                  >
                    Preview
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}

      <div className="mobile-cards">

        {orders.map((order) => (

          <div
            className="order-card"
            key={order.id}
          >

            <h3>{order.id}</h3>

            <p>

              <strong>Customer:</strong>

              {" "}

              {order.customer}

            </p>

            <p>

              <strong>Total:</strong>

              {" "}

              ₹{order.total}

            </p>

            <p>

              <strong>Status:</strong>

              {" "}

              {order.paymentStatus}

            </p>

            <div className="card-buttons">

              {/* Generate Button */}

              <button
                className="generate-btn"
                onClick={() => {

                  setOpenModal(true);

                  setSelectedOrder(order);

                }}
              >
                Generate Invoice
              </button>

              {/* Preview Button */}

              <button
                className="preview-btn"
                onClick={() =>
                  navigate(
                    `/invoice/${order.id}`
                  )
                }
              >
                Preview
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Invoice Modal */}

      {openModal && (

        <InvoiceModal
          closeModal={() =>
            setOpenModal(false)
          }
          selectedOrder={selectedOrder}
        />

      )}

    </div>

  );
}

export default OrdersPage;