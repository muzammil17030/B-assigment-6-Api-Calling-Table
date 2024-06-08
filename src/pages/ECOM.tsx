import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import { Box, Button} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicIcon from "@mui/icons-material/Public";
import axios from "axios";

function ECOM(){
    const navigate=useNavigate()
    const [products, setProducts] = useState<any>([]);
    const getData=()=>{
        axios.get("https://fakestoreapi.com/products")
       .then((res)=>{console.log(res.data)
        setProducts(res.data)
       })
       .catch((err)=>{console.log(err)})
    }
return(
    <Box>
        <h1 className="text-center">Products From API</h1>
        <Button className="mt-5 me-5"
                sx={{ margin: 1, textTransform: "capitalize" }}
                endIcon={<PublicIcon />}
                variant="contained" onClick={getData}
            > 
                Get Products
            </Button>
            <Button className="mt-5 me-5"
                sx={{ margin: 1, textTransform: "capitalize" }}
                endIcon={<PublicIcon />}
                variant="contained" onClick={()=>navigate('/HOME')}
            > 
                HOME
            </Button>
            <Button className="mt-5 me-5"
                sx={{ margin: 1, textTransform: "capitalize" }}
                endIcon={<PublicIcon />}
                variant="contained" onClick={()=>navigate('/API')}
            > 
                API
            </Button>
            {products.map((items:any,i:any)=>{
                return(
                        <div className="card" key={i}>
                            <img src={items.image} alt="" />
                            <h4>title: {items.title}</h4>
                            <p>Description: {items.description}</p>
                            <p>category: {items.category}</p>
                            <p>Price: {items.price}</p>
                            <p>Rating:{items.rating.rate}</p>
                            <p>Sold:{items.rating.count}</p>
                        </div>
                )
            })}
    </Box>
    
)
}
export default ECOM;