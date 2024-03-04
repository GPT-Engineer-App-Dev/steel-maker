import React, { useState } from "react";
import { Button, Container, Heading, Stack, useToast } from "@chakra-ui/react";
import MoneyDisplay from "../components/MoneyDisplay";
import IronDisplay from "../components/IronDisplay";
import CoalDisplay from "../components/CoalDisplay";
import { FaHammer, FaFire, FaMountain, FaCoins } from "react-icons/fa";
import Upgrades from "../components/Upgrades";

import SteelDisplay from "../components/SteelDisplay";
import SellItems from "../components/SellItems";

const Index = () => {
  const [iron, setIron] = useState(0);
  const [coal, setCoal] = useState(0);
  const [steel, setSteel] = useState(0);
  const [money, setMoney] = useState(0);
  const [upgrades, setUpgrades] = useState({
    ironUpgrade: false,
    coalUpgrade: false,
    moneyUpgrade: false,
  });
  const toast = useToast();

  const mineIron = () => {
    if (money >= 5) {
      const ironOutput = upgrades.ironUpgrade ? 2 : 1;
      setMoney(money - 5);
      setIron(iron + ironOutput);
    } else {
      toast({
        title: "Not enough money",
        description: "You need at least $5 to mine iron.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const mineCoal = () => {
    if (money >= 5) {
      const coalOutput = upgrades.coalUpgrade ? 2 : 1;
      setMoney(money - 5);
      setCoal(coal + coalOutput);
    } else {
      toast({
        title: "Not enough money",
        description: "You need at least $5 to mine coal.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const sellSteel = () => {
    const steelPrice = upgrades.moneyUpgrade ? 40 : 20;
    if (steel > 0) {
      setSteel(steel - 1);
      setMoney(money + steelPrice);
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

  const purchaseUpgrade = (upgradeId, cost) => {
    if (money >= cost) {
      setMoney(money - cost);
      setUpgrades({ ...upgrades, [upgradeId]: true });
    } else {
      toast({
        title: "Not enough money",
        description: "You do not have enough money to purchase this upgrade.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const makeSteel = () => {
    if (iron >= 2 && coal >= 1) {
      setIron(iron - 2);
      setCoal(coal - 1);
      setSteel(steel + 1);
    } else {
      toast({
        title: "Not enough resources",
        description: "You need at least 2 iron and 1 coal to make steel.",
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
      <Stack spacing={4} direction="column" align="center">
        <Stack spacing={4} direction="row" align="center">
          <Button leftIcon={<FaHammer />} colorScheme="orange" onClick={mineIron}>
            Mine Iron
          </Button>
          <Button leftIcon={<FaFire />} colorScheme="teal" onClick={mineCoal}>
            Mine Coal
          </Button>
          <Button leftIcon={<FaMountain />} colorScheme="gray" onClick={makeSteel}>
            Make Steel
          </Button>
        </Stack>
        <IronDisplay iron={iron} />
        <CoalDisplay coal={coal} />
        <SteelDisplay steel={steel} />
        <MoneyDisplay money={money} />
        <SellItems iron={iron} coal={coal} steel={steel} money={money} setIron={setIron} setCoal={setCoal} setSteel={setSteel} setMoney={setMoney} />
        <Upgrades money={money} onPurchaseUpgrade={purchaseUpgrade} />
      </Stack>
    </Container>
  );
};

export default Index;

// Remove the duplicated Index component and export default statement
