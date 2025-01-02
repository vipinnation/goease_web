import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.page";
import PolicyPage from "./pages/policy.page";
import RequestDeleteData from "./pages/request-delete.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PolicyPage />} />
        <Route path="/delete" element={<RequestDeleteData />} />
      </Routes>
    </>
  );
}

export default App;
