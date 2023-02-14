import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

function SingUp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Button colorScheme='teal' bg={"green.400"} color={'#fff'}onClick={onOpen}>Sing Up</Button>

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
          <Link to='/SingUp'>  <Button bg={"green.400"} color='#fff' mr={"4rem"}>
          Company
            </Button>
            
            </Link>
            <Link to='/InvestorSingUp'>  <Button bg={"gray.300"}>Investor</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>

        
    </div>
  )
}

export default SingUp;