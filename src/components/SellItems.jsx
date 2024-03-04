import React from "react";
import { Button, Stack, useToast } from "@chakra-ui/react";
import { FaCoins } from "react-icons/fa";

const SellItems = ({ iron, coal, steel, copper, money, setIron, setCoal, setSteel, setCopper, setMoney }) => {
  const toast = useToast();

  const sellIron = () => {
    if (iron > 0) {
      setIron(iron - 1);
      setMoney(money + 5);
    } else {
      toast({
        title: "No iron to sell",
        description: "You have no iron to sell.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const sellCoal = () => {
    if (coal > 0) {
      setCoal(coal - 1);
      setMoney(money + 5);
    } else {
      toast({
        title: "No coal to sell",
        description: "You have no coal to sell.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const sellItem = (item, price) => {
    if (item === "iron" && iron > 0) {
      setIron(iron - 1);
      setMoney(money + price);
    } else if (item === "coal" && coal > 0) {
      setCoal(coal - 1);
      setMoney(money + price);
    } else if (item === "steel" && steel > 0) {
      setSteel(steel - 1);
      setMoney(money + price);
    } else if (item === "copper" && copper > 0) {
      setCopper(copper - 1);
      setMoney(money + price);
    } else {
      toast({
        title: `No ${item} to sell`,
        description: `You have no ${item} to sell.`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack spacing={4} direction="row" align="center">
      <Button leftIcon={<FaCoins />} colorScheme="yellow" onClick={sellIron}>
        Sell Iron
      </Button>
      <Button leftIcon={<FaCoins />} colorScheme="yellow" onClick={sellCoal}>
        Sell Coal
      </Button>
      <Button leftIcon={<FaCoins />} colorScheme="yellow" onClick={() => sellItem("steel", 30)}>
        Sell Steel
      </Button>
      <Button leftIcon={<FaCoins />} colorScheme="yellow" onClick={() => sellItem("copper", 3)}>
        Sell Copper
      </Button>
    </Stack>
  );
};

export default SellItems;
