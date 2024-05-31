import Mytable from "../components/Mytable";
import { useState } from "react";
import axios from "axios";
import { Box,Button } from "@mui/material";
function Api(){
    const [userList, setUserList] = useState<any>([]);
    const getData = () => {
      axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data[0], "data received");
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
    };
    
    
    return(
      <Box >
          <h1 className="text-warning">Assigment of </h1>
        <h1 className="text-info">API Calling </h1>
        <Button
          onClick={getData}
          sx={{ margin: 1, textTransform: "capitalize", }}
          variant="contained"
          
          color="success"
          size="large"
        >
          Get Table (Api)
        </Button>
         <Mytable 
                  gridCols={[
                      {
                          key: 'name',
                          label: 'User Name'
                      },
                      {
                          key: 'email',
                          label: 'User Email'
                      },
                      {
                          key: 'phone',
                          label: 'Phone'
                      },
                      {
                          key: 'website',
                          label: 'Web URL'
                      },
                      {
                          key: '',
                          label: 'Delete',
                          displayField: (row: any) => <Button onClick={() => {
                              console.log(row)
                          }} variant="contained"
                          color="info">Delete</Button>
                      },
                  ]} datasource={userList} />
      </Box>
    )
}

export default Api
