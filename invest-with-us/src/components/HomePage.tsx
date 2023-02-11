import { Box, Button, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import React from 'react'
import NavHome from './NavHome'
import ClientsHome from './ClientsHome'

function HomePage() {
  return (
    <div>
<NavHome/>



        <Box
         m='170px'
textAlign={'left'}
w='65%'
    >
    
    <Text
     fontSize='5xl'
    color={'black'}
    
    >Here we made it easy for you to access the most important investments of the companies participating in the most important conferences</Text>
 
 <Box mt={5}

 >
 <Button 
 rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
Join now  </Button>
</Box>


    </Box>

    <Box>
    <ClientsHome/>



    </Box>

    </div>
  )
}

export default HomePage