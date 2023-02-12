import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import {useNavigate, Link} from "react-router-dom"

 

function CompanyHome() {
    const navigate = useNavigate();


  return (
    <Box m={'auto'} width='400px'  display='flex' justifyContent={'center'}>
      <Button flex={1} onClick={()=>navigate("/AddCompany")}>
        Add new</Button>
    </Box>
  )
}

export default CompanyHome
