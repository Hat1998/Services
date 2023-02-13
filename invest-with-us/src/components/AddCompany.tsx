import { Alert,Box, FormControl, FormLabel, Input, Textarea , Grid, GridItem, chakra, Image, Flex, Icon, Button} from "@chakra-ui/react";
import {StarIcon} from '@chakra-ui/icons'
import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
              return show.id!=id
      })
        )  })
          
      }
      
    function post(){
// localStorage.setItem('')
// localStorage.setItem('')
// localStorage.setItem('')
        axios.post('https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB',{
            firstName,
            lasttName,
            email,
            companyName,
            photo,
            annualIncome,
            location,
            business,
             sharePrice,
            description,
            investmentPrice,
            conference  
         }) 
localStorage.setItem('companyName',companyName)

         
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

    
 
    <Box w='full' h='full' my={'auto'}>
     
  
      <Grid  w={'35rem'} p={50}  border= '1px'  borderColor={"blackAlpha.200"} borderRadius={'xl'} m={'auto'} shadow={'lg'} rounded={'lg'}  h='full' templateColumns='repeat(1, 2fr)' >
      <FormControl isRequired display={'grid'}   gridTemplateColumns='45% 45% '  justifyContent={'space-around'} >
              
{/** start company info */}
<Box >
        
        <GridItem >
        <FormLabel>Company Name</FormLabel>
        <Input placeholder="Tuwaiq Academy" onChange={e =>{setCompanyName(e.target.value)}}/>
        </GridItem>

        

         <GridItem >
        <FormLabel>Photo URL</FormLabel>
        <Input placeholder="www.Photo.png" onChange={e =>{setPhoto(e.target.value)}}/>
        </GridItem> 
        <GridItem >
        <FormLabel>Annual Income</FormLabel>
        <Input placeholder="1B SAR " onChange={e =>{setAnnualIncome(e.target.value)}}/>
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
        <GridItem >
        <FormLabel>Conference</FormLabel>
        <Input placeholder="LAEP or Apple" onChange={e =>{setConference(e.target.value)}}/>
        </GridItem>
        
        </Box>

        {/** End company info */}
        {/** start Hr info */}

        <Box>


        <GridItem >
        <FormLabel>First name</FormLabel>
        <Input placeholder="Mohammad" onChange={e =>{setFirstName(e.target.value)}}/>
        </GridItem>

        <GridItem >
        <FormLabel>Last name</FormLabel>
        <Input placeholder="Ali" onChange={e =>{ setlasttName(e.target.value)}} />
        </GridItem>

        <GridItem >
        <FormLabel>Email</FormLabel>
        <Input placeholder="email@email.com " onChange={e =>{setEmail(e.target.value)}} />
        </GridItem>
        <Box   >
        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Description About Your Work" onChange={e =>{setDescription(e.target.value)}} />
        </Box>
        </Box>
        {/** End info */}

  

        {/* <input type="file"onChange={e => setFile(URL.createObjectURL(e.target.files[0]))} />
            <img src={file} /> */}
      </FormControl>
      <Box   >
        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Description About Your Work" onChange={e =>{setDescription(e.target.value)}} />
        </Box>
     
      <Button mt={5} w={100} mx='auto'bg={"lightgreen"} color={"white"} fontSize={25} onClick={post} >Create</Button>
     {/* <Button bg={"lightgreen"} onClick={()=>{DeleteItems}}>delete</Button> */}

    </Grid>
  
    </Box>
  );
}

export default AddCompany;
function useState(): [any, any] {
  throw new Error("Function not implemented.");
}

