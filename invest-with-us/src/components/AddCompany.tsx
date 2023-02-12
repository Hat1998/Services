import { Box, FormControl, FormLabel, Input, Textarea , Grid, GridItem, chakra, Image, Flex, Icon, Button} from "@chakra-ui/react";
import {StarIcon} from '@chakra-ui/icons'
import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import React from "react";
import axios from "axios";

function AddCompany() {
    
    const[data, setData]= React.useState<any>([])
  


    const [id, setId] = React.useState<any>("");


    const[firstName, setFirstName]= React.useState('')
    const[lasttName, setlasttName]= React.useState('')
    const[email, setEmail]= React.useState('')
    const[companyName, setCompanyName]= React.useState("")
    const[photo, setPhoto]= React.useState('')
    const[annualIncome, setAnnualIncome]= React.useState('')
    const[description, setDescription]= React.useState('')

      

    React.useEffect(() => {
        axios
              .get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
           .then((res) => {
             setData(res.data);
             console.log(data)
          });
      }, []);
        console.log(data)
    function post(){
        axios.post('https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB',{
            firstName,
            lasttName,
            email,
            companyName,
            photo,
            annualIncome,
            description

        }) 
        axios
        .get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")



    }

    

 

    /*const DeleteItems = (id: string) => {
        axios
          .delete(`https://62d3e34acd960e45d44f7ccf.mockapi.io/Test/${id}`)
          .then((res) => {
            setData(
              data.filter((dele) => {
                return dele.id != id;
              })
            );
          });
      };*/

  return (
    <Box w='1300px' m='auto'>
    <Grid  w={'700px'}  border= '1px' borderColor={"blackAlpha.200"} borderRadius={'2xl'} m={'auto'}   h='400px' templateColumns='repeat(1, 1fr)' >
      <FormControl isRequired display={'grid'}   gridTemplateColumns='40% 40% '  justifyContent={'space-around'} gap='10px'>
        <GridItem >
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" onChange={e =>{setFirstName(e.target.value)}}/>
        </GridItem>
        
        <GridItem >
        <FormLabel>Company name</FormLabel>
        <Input placeholder="Company name" onChange={e =>{setCompanyName(e.target.value)}}/>
        </GridItem>

        <GridItem >
        <FormLabel>Last name</FormLabel>
        <Input placeholder="Last name" onChange={e =>{ setlasttName(e.target.value)}} />
        </GridItem>

        <GridItem >
        <FormLabel>Photo</FormLabel>
        <Input placeholder="Photo " onChange={e =>{setPhoto(e.target.value)}}/>
        </GridItem>

        <GridItem >
        <FormLabel>Email</FormLabel>
        <Input placeholder="Email " onChange={e =>{setEmail(e.target.value)}} />
        </GridItem>

        <GridItem >
        <FormLabel>Annual Income</FormLabel>
        <Input placeholder="Annual Income " onChange={e =>{setAnnualIncome(e.target.value)}}/>
        </GridItem>

        
        
      </FormControl>
      <Box  margin={'30px'}>
        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Description..." onChange={e =>{setDescription(e.target.value)}} />
        </Box>
      <Button bg={"lightgreen"} onClick={post}>Create</Button>
     {/*<Button bg={"lightgreen"} onClick={()=>{DeleteItems}}>delete</Button>*/}

    </Grid>
    {/*companies cards */}
 {/*Grid  cards  Container --------------------------------------------------*/}
 <Box>
     {/*Start of Grid body */}
    <Grid   templateColumns='repeat(3, 1fr)' border= '1px' borderColor={"blackAlpha.200"} borderRadius={'2xl'} mt='60px'  gap={15}> 
    
    {/*Mapping ----------  */}

    {data.map((item:any) =>{

      return(

      
    <GridItem key={item.id}> 
    <Flex
      
      _dark={{ bg: "#3e3e3e" }}
       alignItems="center"
      justifyContent="center"
    >
      <Box
        w="sm"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src= {photo}
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">
          <Icon as={MdHeadset} h={6} w={6} color="white" />

          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg" >
            {item.companyName}
           </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: "white" }}
          >
            Patterson johnson
          </chakra.h1>

          <chakra.p py={2} color="gray.700" _dark={{ color: "gray.400" }}>
            {data.description}
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              Choc UI
            </chakra.h1>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              California
            </chakra.h1>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
              patterson@example.com
            </chakra.h1>
          </Flex>
        </Box>
      </Box>
    </Flex>
    </GridItem>
      )
    })}



 
    </Grid>

    
    

    {/*End of Grid body */}

    </Box>
    </Box>
  );
}

export default AddCompany;
