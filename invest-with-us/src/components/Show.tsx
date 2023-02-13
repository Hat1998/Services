import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Alert,Box, FormControl, FormLabel, Input, Textarea , Grid, GridItem, chakra, Image, Flex, Icon, Button, SimpleGrid, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
function Show() {
    const [data , setData] =React.useState<any[]>([])
    const navigate = useNavigate()
    // -----------
    const [isOpen, setIsOpen] = React.useState(false)
    const open = () => setIsOpen(!isOpen)
    const close = () => setIsOpen(false)
    React.useEffect(() => {
   axios.get(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${localStorage.getItem('id')}`).then(res=> {
    
   console.log(res.data)
   setData(res.data)
   })
    },[]) 

const UpdateItam=(id:any) => {
  console.log(id);
  axios.put(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${'id'}`)
}
    const DeleteItems= (id:any)=>{
        console.log(id);
        axios.delete(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${'id'}`).then(res=>{
            setData(data.filter((del)=>{
            console.log(res);
            return del.id!=id
    })
    
      )  })
      axios.get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
    }
    // --------------------------------------------
    
// const Dlelete=()=> {

//  <>

//       <Button mr={5} onClick={open}>
//        Delete
//       </Button>
//       <Popover
//         returnFocusOnClose={false}
//         isOpen={isOpen}
//         onClose={close}
//         placement='right'
//         closeOnBlur={false}
//       >
       
//         <PopoverContent>
//           <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
//           <PopoverArrow />
//           <PopoverCloseButton />
//           <PopoverBody>
//             Are you sure you want to Delete Your Company?
//           </PopoverBody>
//           <PopoverFooter  justifyContent='flex-end'>
//             <ButtonGroup size='sm'>
//               <Button variant='outline'>Cancel</Button>
//               <Button colorScheme='red'>Apply</Button>
//               <Button bg={"red"} color='#fff' m={2} onClick={()=>DeleteItems}>Delete</Button>
//             </ButtonGroup>
//           </PopoverFooter>
//         </PopoverContent>
//       </Popover>
//       </>
  
// }
    // --------------------------------------------
    
    return (
        <>
          <SimpleGrid  borderColor={"blackAlpha.200"} borderRadius={'2xl'} mx='auto' gap={15} columns={{ base: 1, md: 2, lg: 3 }}> 
           
    <GridItem key={localStorage.getItem('id')}> 
    <Flex
      rounded="lg"
      display= 'Flex'
      _dark={{ bg: "#3e3e3e" }}
      p={5}
      w="md"
      h={"lx"}
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
        h={"lx"}
      
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src={localStorage.getItem('photo')}
          alt="avatar"
          rounded="lg"
         />

         <Flex alignItems="center" px={6} py={3} bg="gray.300" >

          <chakra.h1 mx={'auto'} color="white" fontWeight="bold" fontSize="xl" >
        {  localStorage.getItem('companyName')}
         
           </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
           <chakra.h1
            display="block"
            fontSize="2xl"
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
   
          </chakra.h1>
    
          <chakra.span
            fontSize="sm"
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
              <chakra.h1 fontSize={'18px'} fontWeight='bold'>Conference:</chakra.h1>
              <chakra.h1 fontSize={'16px'}  mt={1} >{localStorage.getItem('conference')}</chakra.h1>
         <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={1} >Annual Income:</chakra.h1>
              <chakra.h1 fontSize={'18px'}  mt={1} >{localStorage.getItem('annualIncome')} <MDBIcon fas icon="dollar-sign" size='lg' /></chakra.h1>
         <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={1} >investment Price:</chakra.h1>
              <chakra.h1 fontSize={'18px'}  mt={1} ><MDBIcon fas icon="hand-holding-usd" size='lg' /> {localStorage.getItem('investmentPrice')}</chakra.h1>
              <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={1} >Location:</chakra.h1>
              <chakra.h1 fontSize={'18px'} mt={1}  ><MDBIcon far icon="compass" /> {localStorage.getItem('location')}</chakra.h1>
              <chakra.h1 fontSize={'18px'} fontWeight='bold'mt={2} > Business Field: </chakra.h1>
              <chakra.h1 fontSize={'18px'} mt={1}><MDBIcon fas icon="briefcase" size='lg' mt={5} />  {localStorage.getItem('business')}</chakra.h1>
             
             
          </chakra.span>
          {/* <Button onClick={()=>{navigate('/details')}}>Details</Button> */}
           
    {/* <Button bg={"red"} color='#fff' m={2} onClick={()=>Dlelete}>Deleteaa</Button> */}
    <Button mr={5} onClick={open}>
       Delete
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={close}
        placement='right'
        closeOnBlur={false}
      >
       
        <PopoverContent fontSize={'xl'}>
          <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to Delete Your Company?
          </PopoverBody>
          <PopoverFooter justifyContent='flex-end'>
            <ButtonGroup size='sm'>
              <Button variant='outline'>Cancel</Button>
              {/* <Button colorScheme='red'>Dlelete</Button> */}
              <Button bg={"red"} color='#fff' m={2} onClick={DeleteItems}>Delete</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    <Link to="/update"><Button bg={'green.100'}>Update</Button></Link>
        </Box>
      </Box>
    </Flex>

    
    </GridItem>
   
    </SimpleGrid>
 



    
   
  
      </>
    )
  }
  
  export default Show;