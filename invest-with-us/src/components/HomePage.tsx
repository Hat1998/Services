import { Box, Button, Text,Image, Grid, SimpleGrid } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import React from 'react'
import NavHome from './NavHome'
import ClientsHome from './ClientsHome'
import FooterHome from './FooterHome'

function HomePage() {
  return (
    <div>
<NavHome/>



    
    <SimpleGrid columns={2} spacing={'25rem'} m='170px'mt={20}
    mb={0}
textAlign={'left'}>
  <Box boxSize='5xl' mt={140}>
    <Text
     fontSize='4xl'
    color={'black'}
    
    >Here we made it easy for you to access the most important investments of the companies participating in the most important conferences.</Text>
    
    <Button 
    mt={45}
 rightIcon={<ArrowForwardIcon />} colorScheme='teal' bg={'green.400'} color={'white'} >
Join now  </Button>
    </Box>
<Box boxSize='xl'>
  <Image 
  w={'full'}
    src={'https://i.top4top.io/p_2599av3jr1.png'} alt='ImageHome' />
</Box>  
</SimpleGrid>
   
 

    <Box>
    <ClientsHome/>
    <section style={{color: "#000"}}>
  <div className="container py-5">
    <div className="row d-flex justify-content-center">
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
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-info"></i>
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
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
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
            <ul className="list-unstyled d-flex justify-content-center">
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-info"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm text-info"></i>
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


    </Box>
    <FooterHome/>
    </div>
  )
}

export default HomePage