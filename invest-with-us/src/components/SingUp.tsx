import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,Text, Center } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

function SingUp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Button colorScheme='teal' bg={"green.400"} color={'#fff'}onClick={onOpen}
      _hover={{ bg: 'green.500' }}
      
      >Sign Up</Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent w={'full'} h={'lg'}  >
          <ModalHeader mx={'auto'} my={'25'}>Do you want to Sign Up as ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
          <img
        src='https://a.top4top.io/p_26012ivly1.png'
        className='img-fluid rounded'
        alt='example'
      />
      
          </ModalBody>

          <ModalFooter mx={'auto'} >
          <Link to='/SingUp'>  <Button bg={"green.400"} color='#fff' mr={"4rem"}
          _hover={{ bg: 'green.500' }}
          
          >
          Company
            </Button>
            
            </Link>
           



            <Link to='/InvestorSingUp'>  <Button textColor={"white"} bg={"blue.700"} 
            _hover={{ bg: "blue.900"}}
            >Investor</Button>
            </Link>
            
          </ModalFooter>
        </ModalContent>
      </Modal>

        
    </div>
  )
}

export default SingUp;