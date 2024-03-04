import React, { useState } from "react";
import { Box, Button, Container, Heading, Stack, Text, Progress, useToast } from "@chakra-ui/react";
import { FaHammer, FaFire, FaMountain, FaCoins } from "react-icons/fa";

const Index = () => {
  const [iron, setIron] = useState(0);
  const [coal, setCoal] = useState(0);
  const [steel, setSteel] = useState(0);
  const [money, setMoney] = useState(0);
  const toast = useToast();

  const mineIron = () => {
    setIron(iron + 1);
  };

  const mineCoal = () => {
    setCoal(coal + 1);
  };

  const makeSteel = () => {
    if (iron >= 1 && coal >= 2) {
      setIron(iron - 1);
      setCoal(coal - 2);
      setSteel(steel + 1);
    } else {
      toast({
        title: "Not enough resources",
        description: "You need at least 1 Iron and 2 Coal to make Steel.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const sellSteel = () => {
    if (steel > 0) {
      setSteel(steel - 1);
      setMoney(money + 50); // Let's assume each steel sells for $50
    } else {
      toast({
        title: "No steel to sell",
        description: "You have no steel to sell.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.md" py={5}>
      <Heading mb={6} textAlign="center">
        Steel Production Game
      </Heading>
      <Stack spacing={4} align="center">
        <Box>
          <Text fontSize="lg">Iron: {iron}</Text>
          <Button leftIcon={<FaMountain />} colorScheme="orange" onClick={mineIron}>
            Mine Iron
          </Button>
        </Box>
        <Box>
          <Text fontSize="lg">Coal: {coal}</Text>
          <Button leftIcon={<FaFire />} colorScheme="gray" onClick={mineCoal}>
            Mine Coal
          </Button>
        </Box>
        <Box>
          <Text fontSize="lg">Steel: {steel}</Text>
          <Button leftIcon={<FaHammer />} colorScheme="blue" onClick={makeSteel}>
            Make Steel
          </Button>
        </Box>
        <Box>
          <Text fontSize="lg">Money: ${money}</Text>
          <Button leftIcon={<FaCoins />} colorScheme="green" onClick={sellSteel}>
            Sell Steel
          </Button>
        </Box>
        <Progress colorScheme="pink" size="sm" value={(steel / (iron + coal + steel)) * 100} width="100%" />
      </Stack>
    </Container>
  );
};

export default Index;
