import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
import { FaCoins } from "react-icons/fa";

const MoneyDisplay = ({ money }) => {
  return (
    <Box p={4} bg="yellow.200" borderRadius="md" display="flex" alignItems="center">
      <Icon as={FaCoins} mr={2} color="black" />
      <Text fontWeight="bold" color="black">
        ${money}
      </Text>
    </Box>
  );
};

export default MoneyDisplay;
