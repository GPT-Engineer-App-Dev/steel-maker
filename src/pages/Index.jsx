import React, { useState, useEffect } from "react";
import { Button, Container, Heading, Stack, useToast, Progress } from "@chakra-ui/react";
import MoneyDisplay from "../components/MoneyDisplay";
import IronDisplay from "../components/IronDisplay";
import CoalDisplay from "../components/CoalDisplay";
import { FaHammer, FaFire, FaMountain, FaCoins } from "react-icons/fa";
import Upgrades from "../components/Upgrades";

import Furnace from "../components/Furnace";
import SteelDisplay from "../components/SteelDisplay";
import SellItems from "../components/SellItems";

const Index = () => {
  const [iron, setIron] = useState(0);
  const [coal, setCoal] = useState(0);
  const [ironProgress, setIronProgress] = useState(0);
  const [coalProgress, setCoalProgress] = useState(0);
  const [steel, setSteel] = useState(0);
  const [money, setMoney] = useState(600);
  const [upgrades, setUpgrades] = useState({
    ironUpgrade: false,
    coalUpgrade: false,
    moneyUpgrade: false,
    extraFurnace: 0,
    autoMiner: false,
    autoCoalMaker: false,
  });
  const toast = useToast();

  const [isMiningIron, setIsMiningIron] = useState(false);
  const [isMiningCoal, setIsMiningCoal] = useState(false);

  const mineIron = () => {
    if (!isMiningIron && money >= 5) {
      setIronProgress(0);
      setIsMiningIron(true);
      const ironInterval = setInterval(() => {
        setIronProgress((oldProgress) => {
          const newProgress = oldProgress + 33.33;
          if (newProgress >= 100) {
            clearInterval(ironInterval);
            const ironOutput = upgrades.ironUpgrade ? 2 : 1;
            setMoney(money - 5);
            setIron(iron + ironOutput);
            setIsMiningIron(false);
            setIronProgress(0);
          }
          return newProgress;
        });
      }, 1000);
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
    if (!isMiningCoal && money >= 5) {
      setCoalProgress(0);
      setIsMiningCoal(true);
      const coalInterval = setInterval(() => {
        setCoalProgress((oldProgress) => {
          const newProgress = oldProgress + 33.33;
          if (newProgress >= 100) {
            clearInterval(coalInterval);
            const coalOutput = upgrades.coalUpgrade ? 2 : 1;
            setMoney(money - 5);
            setCoal(coal + coalOutput);
            setIsMiningCoal(false);
            setCoalProgress(0);
          }
          return newProgress;
        });
      }, 1000);
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
    const steelPrice = 30;
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

  // Add useEffect for autoCoalMaker
  useEffect(() => {
    if (upgrades.autoCoalMaker) {
      const autoCoalMakerInterval = setInterval(() => {
        setCoal((prevCoal) => prevCoal + 1);
      }, 5000);
      return () => clearInterval(autoCoalMakerInterval);
    }
  }, [upgrades.autoCoalMaker]);

  useEffect(() => {
    if (upgrades.autoMiner) {
      const autoMinerInterval = setInterval(() => {
        setIron((prevIron) => prevIron + 1);
      }, 5000);
      return () => clearInterval(autoMinerInterval);
    }
  }, [upgrades.autoMiner]);

  const purchaseUpgrade = (upgradeId, cost) => {
    if (money >= cost) {
      setMoney((prevMoney) => prevMoney - cost);
      setUpgrades((prevUpgrades) => ({ ...prevUpgrades, [upgradeId]: true }));
      // Handle purchase of autoCoalMaker
      if (upgradeId === "autoCoalMaker") {
        toast({
          title: "Auto Coal Maker activated",
          description: "Coal will now be mined automatically over time.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else if (upgradeId === "autoMiner") {
        toast({
          title: "Auto Miner activated",
          description: "Iron will now be mined automatically over time.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
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

  // Initialize an array to track the steel-making status of each furnace
  const [isMakingSteel, setIsMakingSteel] = useState([false]);
  const [steelProgress, setSteelProgress] = useState(0);

  const makeSteel = (furnaceIndex) => {
    if (isMakingSteel[furnaceIndex]) return;
    if (isMakingSteel) return;
    if (iron >= 2 && coal >= 1) {
      // Update the state to reflect that the specific furnace is now making steel
      setIsMakingSteel(isMakingSteel.map((status, index) => (index === furnaceIndex ? true : status)));
      setSteelProgress(0);
      const interval = setInterval(() => {
        setSteelProgress((oldProgress) => {
          const newProgress = oldProgress + 20;
          if (newProgress === 100) {
            clearInterval(interval);
            setIron(iron - 2);
            setCoal(coal - 1);
            setSteel(steel + 1);
            // Update the state to reflect that the specific furnace has finished making steel
            setIsMakingSteel(isMakingSteel.map((status, index) => (index === furnaceIndex ? false : status)));
            setSteelProgress(0);
          }
          return newProgress;
        });
      }, 1000);
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
          <Stack spacing={2} width="100%" align="center">
            <Button leftIcon={<FaHammer />} colorScheme="orange" onClick={mineIron} isDisabled={isMiningIron}>
              Mine Iron
            </Button>
            <Progress hasStripe isAnimated value={ironProgress} width="80%" />
          </Stack>
          <Stack spacing={2} width="100%" align="center">
            <Button leftIcon={<FaFire />} colorScheme="teal" onClick={mineCoal} isDisabled={isMiningCoal}>
              Mine Coal
            </Button>
            <Progress hasStripe isAnimated value={coalProgress} width="80%" />
          </Stack>
          <Furnace iron={iron} coal={coal} setIron={setIron} setCoal={setCoal} setSteel={setSteel} steel={steel} />
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
