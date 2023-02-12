import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import {useNavigate, Link} from "react-router-dom"
import axios from "axios"

 

function CompanyHome( ) {
    const[data, setData]= React.useState<any>([])
     
    
    const navigate = useNavigate();

    function getAndNavigate(){
        navigate("/add")
        React.useEffect(() => {
            axios
                  .get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
               .then((res) => {
                 setData(res.data);
                 console.log(data)
              });
          }, []);

         
    }


  return (

    <Box m={'auto'} width='400px'  display='flex' justifyContent={'center'}>
      <Button flex={1} onClick={()=>getAndNavigate()}>
        Add new</Button>
    </Box>
  )
 
}

export default CompanyHome
