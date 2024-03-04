import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
import { FaCoins } from "react-icons/fa";

const MoneyDisplay = ({ money }) => {
  return (
    <Box p={4} bg="yellow.200" borderRadius="md" display="flex" alignItems="center">
      <Icon as={FaCoins} mr={2} />
      <Text fontWeight="bold">${money}</Text>
    </Box>
  );
};

export default MoneyDisplay;
