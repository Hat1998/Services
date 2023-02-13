import React from "react";

import { Box, Button, chakra, Flex, SimpleGrid,Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home3(){
  return (
    <Flex
      bg="#fff"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="full"
      justifyContent="center"
      alignItems="center"
      
    >
        
      <Box
        shadow="xl"
        bg="white"
        _dark={{ bg: "gray.800" }}
        px={8}
        py={20}
        mx="auto"
        
      >
        
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
              
            >
                 Open your mind!
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
        From celebrating art at the Louvre to exploring presidential palaces, your cultural journey in Sudai will leave you amazed.
<hr></hr>
<br></br>
<br></br>
     
            </chakra.p>
            
          </Box>
        
          <Image
        src='https://b.top4top.io/p_2600m3m8x1.png'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
            >
Chase thrills
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
              
              Experience the thrills of Yas Island and find serenity on the shores of Saadiyat Island, all in the same 24 hours. Whatever your mood,  has it all whenever you're ready.
              <br></br>

              <hr></hr>
<br></br>
<br></br>
            </chakra.p>
           
          </Box>
         <Image
        src='https://l.top4top.io/p_2600qj8g51.png'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};