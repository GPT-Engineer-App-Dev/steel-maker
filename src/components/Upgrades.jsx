import React from "react";
import { Button, Stack, Text } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const Upgrades = ({ money, onPurchaseUpgrade }) => {
  const upgrades = [
    { id: "ironUpgrade", name: "Iron Drill", cost: 100, description: "Doubles iron output." },
    { id: "coalUpgrade", name: "Coal Turbo", cost: 150, description: "Doubles coal output." },
    { id: "moneyUpgrade", name: "Steel Marketing", cost: 200, description: "Doubles steel selling price." },
    // This upgrade has been removed as it impacted the price of mining
    { id: "autoSmelter", name: "Auto Smelter", cost: 300, description: "Automatically smelts steel over time." },
    { id: "autoCoalMaker", name: "Auto Coal Maker", cost: 300, description: "Automatically mines coal over time." },
    { id: "advancedTools", name: "Advanced Tools", cost: 400, description: "Increases the speed of making steel." },
    { id: "extraFurnace", name: "Extra Furnace", cost: 500, description: "Allows you to smelt steel in an additional furnace simultaneously." },
    { id: "autoMiner", name: "Auto Miner", cost: 600, description: "Automatically mines iron over time." },
    { id: "superHeatFurnace", name: "Super Heat Furnace", cost: 700, description: "Increases steel smelting speed by 50%." },
    { id: "megaDrill", name: "Mega Drill", cost: 800, description: "Triples iron mining output." },
    { id: "carbonRecycler", name: "Carbon Recycler", cost: 900, description: "Triples coal mining output." },
    { id: "steelRefinery", name: "Steel Refinery", cost: 1000, description: "Improves steel quality, increasing its selling price." },
    { id: "hyperFurnace", name: "Hyper Furnace", cost: 1200, description: "Dramatically increases steel smelting speed." },
    { id: "quantumDrill", name: "Quantum Drill", cost: 1400, description: "Exponentially increases iron mining output." },
    { id: "diamondInfusedCoal", name: "Diamond-Infused Coal", cost: 1600, description: "Significantly boosts coal output and steel quality." },
    { id: "orbitalMiningStation", name: "Orbital Mining Station", cost: 1800, description: "Unlocks space mining, yielding massive amounts of iron and coal." },
    { id: "nanoTechSmelters", name: "Nano-Tech Smelters", cost: 2000, description: "Utilizes nanotechnology to smelt steel instantly." },
  ].sort((a, b) => a.cost - b.cost);

  return (
    <Stack spacing={4} align="center">
      <Text fontSize="xl" fontWeight="bold">
        Upgrades
      </Text>
      {upgrades.map((upgrade) => (
        <Stack key={upgrade.id} spacing={1}>
          <Button leftIcon={<FaArrowUp />} colorScheme="purple" isDisabled={money < upgrade.cost} onClick={() => onPurchaseUpgrade(upgrade.id, upgrade.cost)}>
            {upgrade.name} - ${upgrade.cost}
          </Button>
          <Text fontSize="sm">{upgrade.description}</Text>
        </Stack>
      ))}
    </Stack>
  );
};

export default Upgrades;
