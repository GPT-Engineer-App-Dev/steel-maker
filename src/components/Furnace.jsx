import React, { useState } from "react";
import { Button, Progress, Stack, useToast } from "@chakra-ui/react";
import { FaMountain } from "react-icons/fa";

const Furnace = ({ iron, coal, setIron, setCoal, setSteel, steel }) => {
  const [isMakingSteel, setIsMakingSteel] = useState(false);
  const [steelProgress, setSteelProgress] = useState(0);
  const toast = useToast();

  const makeSteel = () => {
    if (isMakingSteel) return;
    if (iron >= 2 && coal >= 1) {
      setIsMakingSteel(true);
      setSteelProgress(0);
      const interval = setInterval(() => {
        setSteelProgress((oldProgress) => {
          const newProgress = oldProgress + 20;
          if (newProgress === 100) {
            clearInterval(interval);
            setIron(iron - 2);
            setCoal(coal - 1);
            setSteel(steel + 1);
            setIsMakingSteel(false);
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
    <Stack spacing={2} width="100%" align="center">
      <Button leftIcon={<FaMountain />} colorScheme="gray" onClick={makeSteel} isDisabled={isMakingSteel}>
        Smelt Steel in Furnace
      </Button>
      <Progress hasStripe isAnimated value={steelProgress} width="80%" />
    </Stack>
  );
};

export default Furnace;
