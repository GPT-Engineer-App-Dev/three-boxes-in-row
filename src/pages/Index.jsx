import { Container, Text, Box, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} width="full">
        <Box bg="brand.700" height="200px" borderRadius="md" p={4} display="flex" alignItems="center" justifyContent="center">
          <Text fontSize="xl" color="white">Box 1</Text>
        </Box>
        <Box bg="brand.800" height="200px" borderRadius="md" p={4} display="flex" alignItems="center" justifyContent="center">
          <Text fontSize="xl" color="white">Box 2</Text>
        </Box>
        <Box bg="brand.700" height="200px" borderRadius="md" p={4} display="flex" alignItems="center" justifyContent="center">
          <Text fontSize="xl" color="white">Box 3</Text>
        </Box>
        <Box bg="brand.900" height="300px" borderRadius="md" p={4} display="flex" alignItems="center" justifyContent="center" width="50%" margin="auto">
          <Text fontSize="xl" color="white">Bigger Box</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Index;