import React from "react";
import { Stat, StatLabel, StatNumber, StatGroup } from "@chakra-ui/react";

const SteelDisplay = ({ steel }) => (
  <StatGroup>
    <Stat>
      <StatLabel>Steel</StatLabel>
      <StatNumber>{steel}</StatNumber>
    </Stat>
  </StatGroup>
);

export default SteelDisplay;
