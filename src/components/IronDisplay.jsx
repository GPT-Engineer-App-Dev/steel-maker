import React from 'react';
import { Stat, StatLabel, StatNumber, StatGroup } from '@chakra-ui/react';

const IronDisplay = ({ iron }) => (
  <StatGroup>
    <Stat>
      <StatLabel>Iron</StatLabel>
      <StatNumber>{iron}</StatNumber>
    </Stat>
  </StatGroup>
);

export default IronDisplay;