import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function home(){
return(
    <div>
        <h1 className="text-center">HOME</h1>
    <Link to={'/API'}>API HANDLING</Link> <br />
    <Link to={'/ECOM'}>PRODUCTS</Link><br />
    <Link to={'/ECOM/1'}>Single PRODUCTS</Link>
    </div>
)
}
export default home;