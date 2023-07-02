import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import logo from "../../Assets/logo.png";
import Resume from "../../Assets/fw19_1105-Mohit-Raj-Singh-Resume.pdf";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("#101327")}
        px={4}
        transition="box-shadow 0.2s"
        w="full"
        overflowY="hidden"
        position="fixed"
        zIndex={1}
        top={0}
        borderColor="white"
        color={"white"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            color="#59b0bb"
            bg="#101327"
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box></Box>
            <HStack
              as={"nav"}
              spacing={6}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                href={"#"}
                fontWeight="semibold"
                _hover={{
                  fontSize: "20",
                  fontWeight: "bold",
                  color: "#59b0bb",
                }}
              >
                Home
              </Link>

              <Link
                href={"#skills"}
                fontWeight="semibold"
                _hover={{
                  fontSize: "20",
                  fontWeight: "bold",
                  color: "#59b0bb",
                }}
              >
                Skills
              </Link>
              <Link
                href={"#project"}
                fontWeight="semibold"
                _hover={{
                  fontSize: "20",
                  fontWeight: "bold",
                  color: "#59b0bb",
                }}
              >
                Project
              </Link>
              <Link
                href={"#github"}
                fontWeight="semibold"
                _hover={{
                  fontSize: "20",
                  fontWeight: "bold",
                  color: "#59b0bb",
                }}
              >
                Github
              </Link>
              <Link
                href={"#contact"}
                fontWeight="semibold"
                _hover={{
                  fontSize: "20",
                  fontWeight: "bold",
                  color: "#59b0bb",
                }}
              >
                Contact
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              bg={"#59b0bb"}
              size={"sm"}
              mr={4}
              color={"white"}
              leftIcon={<DownloadIcon />}
              _hover={{ color: "#59b0bb", bg: "white" }}
            >
              <a
                href={Resume}
                download
                smooth="true"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1pU66hMY_E8PabIlRXU-TdMBk_0yRGUEA/view?usp=sharing"
                  )
                }
                target="_blank"
              >
                Resume
              </a>
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={logo} />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
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
                Projects
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
          </Box>
        ) : null}
      </Box>

      <Box p={4}></Box>
    </>
  );
}
export default Navbar;
