import React from "react";
import { Routes as AppRoutes, Route} from "react-router-dom";
import { NotFound, Landing } from "./pages";

function Routes() {
  return (
    <>
      <AppRoutes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </AppRoutes>
    </>
  );
}

export default Routes;
