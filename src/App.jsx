import { BrowserRouter, Routes, Route } from "react-router-dom";

import OrdersPage from "./pages/OrdersPage";
import InvoicePreview from "./pages/InvoicePreview";

function App() {
  return (
    <BrowserRouter basename="/Invoice-Generation">

      <Routes>

        <Route
          path="/"
          element={<OrdersPage />}
        />

        <Route
          path="/invoice/:id"
          element={<InvoicePreview />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;