import React from "react";
import { Button, Stack, Text } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const Upgrades = ({ money, onPurchaseUpgrade }) => {
  const upgrades = [
    { id: "ironUpgrade", name: "Iron Drill", cost: 100, description: "Doubles iron output." },
    { id: "coalUpgrade", name: "Coal Turbo", cost: 150, description: "Doubles coal output." },
    { id: "moneyUpgrade", name: "Steel Marketing", cost: 200, description: "Doubles steel selling price." },
    { id: "autoSmelter", name: "Auto Smelter", cost: 300, description: "Automatically smelts steel over time." },
    { id: "efficiencyUpgrade", name: "Efficiency Upgrade", cost: 250, description: "Reduces the cost of mining." },
    { id: "advancedTools", name: "Advanced Tools", cost: 400, description: "Increases the speed of making steel." },
    { id: "extraFurnace", name: "Extra Furnace", cost: 500, description: "Allows you to smelt steel in an additional furnace simultaneously." },
  ];

  return (
    <Stack spacing={4} align="center">
      <Text fontSize="xl" fontWeight="bold">
        Upgrades
      </Text>
      {upgrades.map((upgrade) => (
        <Button key={upgrade.id} leftIcon={<FaArrowUp />} colorScheme="purple" isDisabled={money < upgrade.cost} onClick={() => onPurchaseUpgrade(upgrade.id, upgrade.cost)}>
          {upgrade.name} - ${upgrade.cost}
        </Button>
      ))}
    </Stack>
  );
};

export default Upgrades;
