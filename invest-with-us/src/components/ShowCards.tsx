import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Box,Spinner, FormControl, FormLabel, Input, Textarea , Grid, GridItem, chakra, Image, Flex, Icon, Button} from "@chakra-ui/react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";


function ShowCards() {
     
  const [data , setData] =React.useState<any[]>([])
  
   

// to show and hide spinner for 3 sec
  const [showElement,setShowElement] = React.useState(true)

  React.useEffect(() => {
    axios
          .get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
       .then((res) => {
         setData(res.data);
         console.log(data)
      });
  }, []);
// Spinner time
  React.useEffect(()=>{
    setTimeout(function() {
      setShowElement(false)
         }, 2000);
       },
   [])
   //
   
// const UpdateItam=(id:any) => {
// console.log(id);
// axios.put(`https://63e223f43e12b1937638a4ed.mockapi.io/todo/${id}`)
// localStorage.getItem('id')
// }
//   const DeleteItam= (id:any)=>{
//       console.log(id);
//       axios.delete(`https://63e223f43e12b1937638a4ed.mockapi.io/todo/${id}`).then(res=>{
//           setData(data.filter((del)=>{
//           console.log(res);
//           return del.id!=id
//   })
//     )  })
      
//   }
  return (
        <div className="Show_cards">
{showElement?<div className="spinner"> 
<Spinner
   boxSize='12rem'
  thickness='15px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  ml={'auto'}
  
 
/></div>:<></>}

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
          src= {item.photo}
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">

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
             {item.companyName}
          </chakra.h1>

          <chakra.p py={2} color="gray.700" _dark={{ color: "gray.400" }}>
            {item.description}
          </chakra.p>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

            <chakra.h1 px={2} fontSize="sm">
            {item.business}
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
            {item.email}
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
            {item.email}
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


        </div>
      )}
      
  

  export default ShowCards;



 



