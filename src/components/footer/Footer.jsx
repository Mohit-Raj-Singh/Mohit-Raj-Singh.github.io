import {
  Avatar,
  Box,
  chakra,
  Container,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import logo from "../../Assets/logo.png";
import { SiHackerrank } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

const SocialButton = ({ children, label, href }) => {
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

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#101327")}
      color={useColorModeValue("white", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Link href={"#"}>
          <Avatar size={"md"} src={logo} />
        </Link>

        <Stack direction={"row"} spacing={6}>
          <Link
            href={"#"}
            fontWeight="semibold"
            _hover={{ fontSize: "20", fontWeight: "bold" }}
          >
            Home
          </Link>

          <Link
            href={"#skills"}
            fontWeight="semibold"
            _hover={{ fontSize: "20", fontWeight: "bold" }}
          >
            Skills
          </Link>
          <Link
            href={"#project"}
            fontWeight="semibold"
            _hover={{ fontSize: "20", fontWeight: "bold" }}
          >
            Project
          </Link>
          <Link
            href={"#github"}
            fontWeight="semibold"
            _hover={{ fontSize: "20", fontWeight: "bold" }}
          >
            Github
          </Link>
          <Link
            href={"#contact"}
            fontWeight="semibold"
            _hover={{ fontSize: "20", fontWeight: "bold" }}
          >
            Contact
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("#59b0bb")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <HStack>
            <Text fontWeight="bold" fontSize={"18"}>
              Designed by Mohit Raj Singh
            </Text>
            <Link href="https://github.com/Mohit-Raj-Singh/" isExternal>
              <FaGithub mx="2px" size={"21"} />
            </Link>
          </HStack>
          <Stack direction={"row"} spacing={6}>
            <Link
              label={"Linkdin"}
              href={"https://www.linkedin.com/in/mohit-raj-singh-m6164/"}
              target="_blank"
            >
              <BsLinkedin />
            </Link>
            <Link
              label={"GitHub"}
              href={"https://github.com/Mohit-Raj-Singh"}
              isExternal
            >
              <FaGithub />
            </Link>
            <Link
              label={"HackerRank"}
              href={"https://www.hackerrank.com/mohit94e"}
              isExternal
            >
              <SiHackerrank />
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
