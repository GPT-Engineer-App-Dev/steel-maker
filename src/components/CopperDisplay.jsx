import React from "react";
import { Stat, StatLabel, StatNumber, StatGroup } from "@chakra-ui/react";

const CopperDisplay = ({ copper }) => (
  <StatGroup>
    <Stat>
      <StatLabel>Copper</StatLabel>
      <StatNumber>{copper}</StatNumber>
    </Stat>
  </StatGroup>
);

export default CopperDisplay;
