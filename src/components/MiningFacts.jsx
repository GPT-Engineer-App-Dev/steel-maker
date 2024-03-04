import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const MiningFacts = () => {
  const facts = ["Mining is one of the oldest industries on Earth, with origins dating back to prehistoric times.", "The word 'mining' comes from the Latin word 'minera', which means mineral.", "China is the world's leading producer of coal, gold, and most rare earth minerals.", "The deepest mine in the world is the Mponeng gold mine in South Africa, which extends over 4 kilometers below the Earth's surface.", "Mining is crucial for the production of goods and services, but it can also have significant environmental impacts."];

  return (
    <VStack spacing={2} p={4} border="1px" borderColor="gray.200" borderRadius="md">
      <Text fontSize="lg" fontWeight="bold">
        Did You Know?
      </Text>
      {facts.map((fact, index) => (
        <Text key={index}>{fact}</Text>
      ))}
    </VStack>
  );
};

export default MiningFacts;
