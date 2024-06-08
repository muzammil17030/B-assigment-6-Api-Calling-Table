import { BrowserRouter,Routes, Route } from "react-router-dom";
import HOME from "../pages/Home";

import Api from "../pages/Api";
import ECOM from "../pages/ECOM";
function ROUTES(){

return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HOME/>} />
        <Route path="HOME" element={<HOME />} />
        <Route path="API" element={<Api />} />
        <Route path="ECOM" element={<ECOM />} />
    </Routes>
    </BrowserRouter>
)
}
export default ROUTES;