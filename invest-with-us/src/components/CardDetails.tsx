import { Box } from '@chakra-ui/react'
import React from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";

import {
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { MDBIcon } from 'mdb-react-ui-kit';

function CardDetails(props:any) {
   const [data , setData] =React.useState<any[]>([]);
  const {id}=useParams()
  React.useEffect(() => {
    axios.get(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${id}`)
       .then((res) => {
         setData(res.data); 
      
         console.log(res)
      });
  }, []);

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 5 }}>
        <Flex>
          <Image
            rounded={'lg'}
            alt={' image'}
            src={data.photo}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
             {data.companyName}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              ${data.annualIncome} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              {/* <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text> */}
              <Text fontSize={'lg'}>
              {data.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Location
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2} fontSize={'lg'}>
                  <ListItem>  <MDBIcon fas icon="globe-americas"  size='lg'/> {data.location}</ListItem>
                  
                </List>
                
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
               Business Field
              </Text>

              <List spacing={2} fontSize={'lg'}>
                <ListItem >
                  <Text as={'span'}  fontWeight={'bold'} >
                  <MDBIcon fas icon="building" size='lg' />   Main Field: 
                  
                  </Text>{'  '}
                   {data.business}
                </ListItem>
              
              </List>
            </Box>
          </Stack>

          <Button onClick={(e) => window.location = `mailto:${data.email}`}
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.500', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
              
            }}>
              <div className="me-4"><MDBIcon fas icon="envelope" me-5 size="xl"/> </div>
            Contact  { data.companyName} For more information 
          </Button>

        
        </Stack>
      </SimpleGrid>
    </Container>
  )
}







    

export default CardDetails;