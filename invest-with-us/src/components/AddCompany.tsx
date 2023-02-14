import { Alert,Box, FormControl, FormLabel, Input, Textarea , Grid, GridItem, chakra, Image, Flex, Icon, Button, Heading, Divider} from "@chakra-ui/react";
import {StarIcon} from '@chakra-ui/icons'
import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavCompany from "./NavCompany";
import FooterHome from "./FooterHome";

function AddCompany() {
    const[data, setData]= React.useState<any>([])
    const [id, setId] = React.useState<any>("");
    const[firstName, setFirstName]= React.useState('')
    const[jog, setjob]= React.useState('')
    const[email, setEmail]= React.useState('')
    const[companyName, setCompanyName]= React.useState("")
    const[photo, setPhoto]= React.useState('')
    // const[photo, setPhoto]= React.useState('')
    const[annualIncome, setAnnualIncome]= React.useState('')
    const[description, setDescription]= React.useState('')
    const[location, setLocation]= React.useState('')
    const[business, setBusiness]= React.useState('')
    const[sharePrice, setSharePrice]= React.useState('')
    const[investmentPrice, setInvestmentPrice]= React.useState('')
    const[conference, setConference]= React.useState('')


    // const[description, setDescription]= React.useState('')
    // const [photo, setPhoto] = React.useState<any>();
    // const [file, setFile] = useState();
   
    const navigate = useNavigate()

    React.useEffect(() => {
        axios
              .get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
           .then((res) => {
             setData(res.data);
             console.log(data)
          });
      }, []);
        console.log(data)

        const show= (id:any)=>{
          console.log(id);
          axios.get(`https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB/${id}`).then(res=>{
              setData(data.filter((show: { id: any; })=>{
              console.log(res);
              return show.id==id
      })
        )  })
          
      }
      
    function post(){
// localStorage.setItem('')
// localStorage.setItem('')
// localStorage.setItem('')
        axios.post('https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB',{
            firstName,
            jog,
            email,
            companyName,
            photo,
            annualIncome,
            location,
            business,
             sharePrice,
            description,
            investmentPrice,
            conference  ,
         }) 
localStorage.setItem('id',id)
localStorage.setItem('companyName',companyName)
localStorage.setItem('photo',photo)
localStorage.setItem('conference',conference)
localStorage.setItem('annualIncome',annualIncome)
localStorage.setItem('investmentPrice',investmentPrice)
localStorage.setItem('companyName',business)

         
         axios.get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
        
        navigate('/companies', {})



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

    
 <Box>
<NavCompany/>

    <Box w='full' h='full' my={'auto'} p={5} >
     
  
      <Grid  w={'full'} p={10}  border= '1px'  borderColor={"blackAlpha.200"} borderRadius={'2xl'} mx={'auto'} shadow={'xl'} rounded={'xl'}  h='auto' templateColumns='repeat(1, 2fr)' >
      <FormControl isRequired display={'grid'}  gap={"50"}  gridTemplateColumns='45% 45% '  justifyContent={'space-around'}  >
              
{/** start company info */}
<Box >
<Heading as='h2' size='md' mb={3} color={'gray.400'}>
Company Information:
  </Heading>
  
        <GridItem >
        <FormLabel>Company Name</FormLabel>
        <Input placeholder="Tuwaiq Academy" onChange={e =>{setCompanyName(e.target.value)}}/>
        </GridItem>
        <GridItem >
        <FormLabel>Conference</FormLabel>
        <Input placeholder="LAEP or Apple" onChange={e =>{setConference(e.target.value)}}/>
        </GridItem>
         <GridItem >
        <FormLabel>Photo URL Of The Company</FormLabel>
        <Input placeholder="www.Photo.png" onChange={e =>{setPhoto(e.target.value)}}/>
        </GridItem> 
        <GridItem >
        <FormLabel>Annual Income</FormLabel>
        <Input placeholder="1 B SAR " onChange={e =>{setAnnualIncome(e.target.value)}}/>
        </GridItem>
        <GridItem >
        <FormLabel>Share Price</FormLabel>
        <Input placeholder="Share Price" onChange={e =>{setSharePrice(e.target.value)}}/>
        </GridItem>
        <GridItem >
        <FormLabel>Location</FormLabel>
        <Input placeholder=" Riyadh" onChange={e =>{setLocation(e.target.value)}}/>
        </GridItem>
        <GridItem >
        <FormLabel>Business Field </FormLabel>
        <Input placeholder="Oil and Gas or IT " onChange={e =>{setBusiness(e.target.value)}}/>
        </GridItem>
        <GridItem >
        <FormLabel>Investment Price</FormLabel>
        <Input placeholder="Investment Price" onChange={e =>{setInvestmentPrice(e.target.value)}}/>
        </GridItem>
        <Box >
        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Description About Your Work" onChange={e =>{setDescription(e.target.value)}} />
        </Box>
        </Box>

        {/** End company info */}
       
        {/** start Hr info */}
     

        <Box>
          
        <Heading as='h2' size='md' mb={3} color={'gray.400'}>
        Employee Information:
  </Heading>

        <GridItem >
        <FormLabel>Full name</FormLabel>
        <Input placeholder="Mohammad" onChange={e =>{setFirstName(e.target.value)}}/>
        </GridItem>

        <GridItem >
        <FormLabel>Job Title</FormLabel>
        <Input placeholder="HR or it member" onChange={e =>{ setjob(e.target.value)}} />
        </GridItem>

        <GridItem >
        <FormLabel>Email</FormLabel>
        <Input placeholder="email@email.com " onChange={e =>{setEmail(e.target.value)}} />
        </GridItem>
       
        </Box>
        {/** End info */}

  

        {/* <input type="file"onChange={e => setFile(URL.createObjectURL(e.target.files[0]))} />
            <img src={file} /> */}
      </FormControl>
      {/* <Box   >
        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Description About Your Work" onChange={e =>{setDescription(e.target.value)}} />
        </Box>
      */}
      <Button mt={5} colorScheme='teal'  w={'50%'} mx='auto'bg={'green.500'} color={"white"} fontSize={25} onClick={post} >Create</Button>
     {/* <Button bg={"lightgreen"} onClick={()=>{DeleteItems}}>delete</Button> */}

    </Grid>
  
    </Box>
    <FooterHome/>
     </Box>
  );
}

export default AddCompany;
function useState(): [any, any] {
  throw new Error("Function not implemented.");
}

