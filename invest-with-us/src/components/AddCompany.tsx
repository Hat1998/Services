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
    // const[photo, setPhoto]= React.useState('')
    const[annualIncome, setAnnualIncome]= React.useState('')
    const[description, setDescription]= React.useState('')
    const[location, setLocation]= React.useState('')
    const[business, setBusiness]= React.useState('')
    // const[description, setDescription]= React.useState('')
    // const [photo, setPhoto] = React.useState<any>();
    // const [file, setFile] = useState();
   

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
            description,
            location,
            business,

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
    <Box w='full' m='auto'mt={'50'}   >
     
  
    <Grid  w={'40rem'} pt={5}  border= '1px' borderColor={"blackAlpha.200"} borderRadius={'2xl'} m={'auto'} shadow={'lg'} rounded={'lg'}  h='full' templateColumns='repeat(1, 1fr)' >
      <FormControl isRequired display={'grid'}   gridTemplateColumns='40% 40% '  justifyContent={'space-evenly'} gap='10px'>
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
        <GridItem >
        <FormLabel>Location</FormLabel>
        <Input placeholder="location " onChange={e =>{setLocation(e.target.value)}}/>
        </GridItem>
        <GridItem >
        <FormLabel>Business Area</FormLabel>
        <Input placeholder="Business Area" onChange={e =>{setBusiness(e.target.value)}}/>
        </GridItem>
        {/* <input type="file"onChange={e => setFile(URL.createObjectURL(e.target.files[0]))} />
            <img src={file} /> */}
      </FormControl>
      <Box  margin={'30px'}>
        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Description..." onChange={e =>{setDescription(e.target.value)}} />
        </Box>
      <Button bg={"lightgreen"} color={"white"} fontSize={30} onClick={post}>Create</Button>
     {/* <Button bg={"lightgreen"} onClick={()=>{DeleteItems}}>delete</Button> */}

    </Grid>
  
    </Box>
  );
}

export default AddCompany;
function useState(): [any, any] {
  throw new Error("Function not implemented.");
}

