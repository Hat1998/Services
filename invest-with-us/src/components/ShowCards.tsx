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
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />

        <Box py={5}  px={5} >
          <chakra.h1
            display="block"
            fontSize="2xl"
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
             {item.companyName}
          </chakra.h1>
          <br />
          <chakra.span
            fontSize="sm"
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
              <chakra.h1 fontSize={'20px'} fontWeight='bold' >conference:</chakra.h1>
              <chakra.h1 fontSize={'18px'}   >{item.conference}</chakra.h1>
             
          </chakra.span>
          <br />

          <chakra.span
            fontSize="sm"
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
         <chakra.h1 fontSize={'20px'} fontWeight='bold' >investment Price:</chakra.h1>
              <chakra.h1 fontSize={'18px'}   >{item.investmentPrice}</chakra.h1>
             
          </chakra.span>
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



 



