import { Box, Button, Container, Image, Input, Spacer, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import  QRCode  from "qrcode";
function App() {

  const [query, setQuery] = useState('')
  const [src, setSrc] = useState('')

  const generate = () => {
    QRCode.toDataURL(`${query}`).then((val) => setSrc(val))
  }

  return (
    <Box display="flex" justifyContent="center" maxH="100vh">
      <VStack>
        <Container
          maxW="max-content"
          bgColor="yellow.200"
          border="2px"
          borderRadius="2xl"
          boxShadow={4}
          p={2}
          m={2}
          borderColor="cyan.400"
        >
          <Box
            display="flex"
            justifyContent="center"
            p={4}
            color="white"
            bg="blue.600"
            margin={2}
            border="2px"
            borderRadius="2xl"
          >
            <Text textAlign="center" fontSize="2xl">
              QA Code Generator App
            </Text>
          </Box>
          <Box display="flex"
            justifyContent="space-between"
            padding={2}
            margin={2}>
            <Input value={query} 
            onChange={(e) => setQuery(e.target.value)}
            variant='filled' size='sm' placeholder="Add URL here" />
            <Spacer />
            <Button onClick={generate} size='sm' colorScheme='green'>Generate</Button>
          </Box>
          <Box display="flex"
            justifyContent="center" padding={2}
            margin={2}>
               
              <Image boxSize='200px' src={src} alt={src} />  
             
          
          </Box>
        </Container>
      </VStack>
    </Box>
  );
}

export default App;
