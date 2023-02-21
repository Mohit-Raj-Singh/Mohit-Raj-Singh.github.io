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
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import logo from "../../Assets/logo.png";
import Resume from "../../Assets/Mohit-Raj-Singh-Resume.pdf";
const Links = ["About Me", "Skills", "Project", "Contact Me"];


const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",


            bg: useColorModeValue("#f9f1ac"),
        }}
        href={"#"}
    // href={"#about"}
    >
        {children}
    </Link>
);


function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <>
            <Box
                bg={useColorModeValue("#f9f1ac")}
                px={4}
                transition="box-shadow 0.2s"
                w="full"
                overflowY="hidden"
                borderBottomWidth={2}
                position="fixed"
                zIndex={1}
                top={0}
                borderColor="black"
            >

                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box></Box>
                        <HStack
                            as={"nav"}
                            spacing={6}
                            display={{ base: "none", md: "flex" }}
                        >
                            {/* {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))} */}
                            <Link href={"#"} fontWeight='semibold' _hover={{ fontSize: "20", fontWeight: 'bold' }}>Home</Link>
                            <Link href={"#about"} fontWeight='semibold' _hover={{ fontSize: "20", fontWeight: 'bold' }}>About</Link>
                            <Link href={"#skill"} fontWeight='semibold' _hover={{ fontSize: "20", fontWeight: 'bold' }}>Skills</Link>
                            <Link href={"#project"} fontWeight='semibold' _hover={{ fontSize: "20", fontWeight: 'bold' }}>Project</Link>
                            <Link href={"#"} fontWeight='semibold' _hover={{ fontSize: "20", fontWeight: 'bold' }}>Contact</Link>
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Button
                            variant={"solid"}
                            bg={"#f0f7a9"}
                            size={"sm"}
                            mr={4}
                            color={"black"}
                            leftIcon={<DownloadIcon />}
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
                            {/* <MenuList>
                  <MenuItem></MenuItem>
                  <MenuItem ></MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList> */}
                        </Menu>
                    </Flex>
                </Flex>


                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            <Link href={"#"} fontWeight='semibold' _hover={{ fontSize: "20", fontWeight: 'bold' }}>Home</Link>
                            <Link href={"#about"} fontWeight='semibold' _hover={{ fontSize: "20", fontWeight: 'bold' }}>About</Link>
                            <Link href={"#skill"} fontWeight='semibold' _hover={{ fontSize: "20", fontWeight: 'bold' }}>Blog</Link>
                            <Link href={"#"} fontWeight='semibold' _hover={{ fontSize: "20", fontWeight: 'bold' }}>Contact</Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>


            <Box p={4}></Box>
        </>
    );
}
export default Navbar;



