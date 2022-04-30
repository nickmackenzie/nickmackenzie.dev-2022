import {
  Box,
  chakra,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaReact, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"8xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={6}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Flex
          justify={"center"}
          align={"center"}
          direction={"column"}
          alignItems={"center"}
        >
          <Text fontSize={"18px"}>Made With</Text>
          <Flex>
            <Text
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              textAlign={"center"}
              fontSize="18px"
              p={"5px"}
            >
              React
              <FaReact size={"32px"} />
            </Text>

            <Text
              p={"5px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              textAlign={"center"}
              fontSize="18px"
            >
              Chakra UI <SiChakraui size={"32px"} />
            </Text>

            <Text
              p={"5px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              textAlign={"center"}
              fontSize="18px"
            >
              Vite <SiVite size={"32px"} />
            </Text>
          </Flex>
        </Flex>

        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
