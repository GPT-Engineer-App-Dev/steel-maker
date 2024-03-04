import React from "react";
import { Button, Stack, useToast } from "@chakra-ui/react";
import { FaCoins } from "react-icons/fa";

const SellItems = ({ iron, coal, steel, money, setIron, setCoal, setSteel, setMoney }) => {
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

  const sellSteel = () => {
    if (steel > 0) {
      setSteel(steel - 1);
      setMoney(money + 30);
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

  return (
    <Stack spacing={4} direction="row" align="center">
      <Button leftIcon={<FaCoins />} colorScheme="yellow" onClick={sellIron}>
        Sell Iron
      </Button>
      <Button leftIcon={<FaCoins />} colorScheme="yellow" onClick={sellCoal}>
        Sell Coal
      </Button>
      <Button leftIcon={<FaCoins />} colorScheme="yellow" onClick={sellSteel}>
        Sell Steel
      </Button>
    </Stack>
  );
};

export default SellItems;
