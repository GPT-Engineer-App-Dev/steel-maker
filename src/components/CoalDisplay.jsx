import React from 'react';
import { Stat, StatLabel, StatNumber, StatGroup } from '@chakra-ui/react';

const CoalDisplay = ({ coal }) => (
  <StatGroup>
    <Stat>
      <StatLabel>Coal</StatLabel>
      <StatNumber>{coal}</StatNumber>
    </Stat>
  </StatGroup>
);

export default CoalDisplay;