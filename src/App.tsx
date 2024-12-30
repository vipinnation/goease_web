import { Route, Routes } from "react-router";
import Home from "./pages/home.page";
import PolicyPage from "./pages/policy.page";
import RequestDeleteData from "./pages/request-delete.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/reqeust-delete" element={<RequestDeleteData />} />
      </Routes>
    </>
  );
}

export default App;
