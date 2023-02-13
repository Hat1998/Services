import { Box } from '@chakra-ui/react'
import React from 'react'

function CardDetails(props:any) {
    
  return (
    <Box>
         <Box>
            {props.data}
        </Box>
 
    </Box>
  )
}

export default CardDetails
