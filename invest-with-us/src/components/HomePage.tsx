import { Box, Button, Text,Image, Grid, SimpleGrid } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import React from 'react'
import NavHome from './NavHome'
import ClientsHome from './ClientsHome'
import FooterHome from './FooterHome'
import OurServices from './OurServices'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
<NavHome/>


<Box shadow={'lg'} h={'600'} w={'100%'} >
<Box bgImage={'https://c.top4top.io/p_260026l1s1.png'}  boxSize='500' >
    <SimpleGrid columns={2} spacingX={'1000px'} w={'auto'} 
  
textAlign={'left'}>
  <Box boxSize='3xl' mx={"180"} my={"15rem"} >
    <Text
     fontSize='3xl'
    color={'black'}
    
    >Here we made it easy for you to access the most important investments of the companies participating in the most important conferences.</Text>
   
<Button 
    mt={35}
   
    rightIcon={<ArrowForwardIcon />}
    rounded={'full'}
    size={'lg'}
    fontWeight={'normal'}
    px={6}
    colorScheme={'red'}
    bg={'#48BB78'}
    _hover={{ bg: 'green.500' }}>
      <Text  as='b'>Get Started</Text>
    
    </Button>
    </Box>
<Box boxSize='md' my={"7rem"}>
  <Image 
  w={'auto'}
    src={'https://i.top4top.io/p_2599av3jr1.png'} alt='ImageHome' />
</Box>  
</SimpleGrid>
</Box>
 </Box>
  



 <Box
textAlign={'center'} pt={50} ><Text
      
      fontSize='3xl'
      as='b'
      >Our Services & Solutions

      </Text>
  <OurServices/></Box>

    <Box>
    <ClientsHome/>
    </Box>
    <section style={{color: "#000"}}>
  <div className="container mb-5 pb-5">
    <div className="row d-flex justify-content-center ">
      <div className="col-md-10 col-xl-8 text-center">
        <h1 className="fw-bold mb-4 fs-2">User reviews</h1>
        <p className="mb-4 pb-2 mb-md-5 pb-md-0 fs-4">
        We always strive to provide the best user experience
        </p>
      </div>
    </div>

    <div className="row text-center">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="card border border-success-subtle">
          <div className="card-body py-4 mt-2 ">
            <div className="d-flex justify-content-center mb-4">
              <img src="https://img.swapcard.com/?u=https%3A%2F%2Fcdn-api.swapcard.com%2Fpublic%2Fimages%2F825c16152a4842f980ac387196098a63.png&q=0.8&m=crop&w=240&h=240"
                className="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 className="font-weight-bold">Teres May</h5>
            <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-success"></i>
              </li>
            </ul>
            <p className="mb-2">
              <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
              ad velit ab hic tenetur.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="card border border-success-subtle">
          <div className="card-body py-4 mt-2">
            <div className="d-flex justify-content-center mb-4">
              <img src="https://img.swapcard.com/?u=https%3A%2F%2Fcdn-api.swapcard.com%2Fpublic%2Fimages%2F24ee4582fcfa4123b5cb55d16536709b.png&q=0.8&m=crop&w=240&h=240"
                className="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 className="font-weight-bold">Fahad Ali</h5>
            <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
            </ul>
            <p className="mb-2">
              <i className="fas fa-quote-left pe-2"></i>Autem, totam debitis suscipit saepe
              sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis
              labore laboriosam.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-0">
        <div className="card border border-success-subtle">
          <div className="card-body py-4 mt-2">
            <div className="d-flex justify-content-center mb-4">
              <img src="https://img.swapcard.com/?u=https%3A%2F%2Fcdn-api.swapcard.com%2Fpublic%2Fimages%2F08fa8baec1b64046a08eaf91eff1e5dd.png&q=0.8&m=crop&w=240&h=240"
                className="rounded-circle shadow-1-strong" width="100" height="100" />
            </div>
            <h5 className="font-weight-bold">Hani Mahmoud</h5>
            <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
            <ul className="list-unstyled d-flex justify-content-center" >
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-success"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm text-success"></i>
              </li>
            </ul>
            <p className="mb-2">
              <i className="fas fa-quote-left pe-2"></i>Cras sit amet nibh libero, in gravida
              nulla metus scelerisque ante sollicitudin commodo cras purus odio,
              vestibulum in tempus viverra turpis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


   
    <FooterHome/>
    </div>
  )
}

export default HomePage