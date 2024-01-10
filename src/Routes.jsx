import React from "react";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const Payoutsdukaanpay = React.lazy(() => import("pages/Payoutsdukaanpay"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Payoutsdukaanpay />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/payoutsdukaanpay" element={<Payoutsdukaanpay />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;