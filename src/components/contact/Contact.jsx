import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Link
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { SiHackerrank } from "react-icons/si";
import { BsGithub,  BsLinkedin , BsPerson } from 'react-icons/bs';


export default function Contact() {
    return (
        <Container bg="#3C3C3D" maxW="full" mt={0} centerContent overflow="hidden" id='contact'>
            <Flex>
                <Box
                    bg="#f9f1ac"
                    color="black"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Contact</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="black">
                                        Fill up the form below to contact
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="160px"
                                                variant="ghost"
                                                color="black"
                                                _hover={{ border: '2px solid black' }}
                                                leftIcon={<MdPhone color="black" size="20px" />}>
                                                +91-9458526164
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="black"
                                                _hover={{ border: '2px solid black' }}
                                                leftIcon={<MdEmail color="black" size="20px" />}>
                                                mohit94e@gmail.com
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="185px"
                                                variant="ghost"
                                                color="black"
                                                _hover={{ border: '2px solid black' }}
                                                leftIcon={<MdLocationOn color="black" size="20px" />}>
                                                Moradabad,UP, India
                                            </Button>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">



                                        <Link
                                            label={"Github"}
                                            href="https://github.com/Mohit-Raj-Singh"
                                            isExternal
                                        >
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                // _hover={{ bg: '#0D74FF' }}
                                                icon={<BsGithub size="28px" />}
                                            />
                                        </Link>
                                        <Link
                                            label={"linkedin"}
                                            href="https://www.linkedin.com/in/mohit-raj-singh-m6164/"
                                            isExternal
                                        >
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                // _hover={{ bg: '#0D74FF' }}
                                                icon={<BsLinkedin  size="28px" />}
                                            />
                                        </Link>
                                        <Link
                                            label={"HackerRank"}
                                            href="https://www.hackerrank.com/mohit94e"
                                            isExternal
                                        >
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                // _hover={{ bg: '#0D74FF' }}
                                                icon={<SiHackerrank size="28px" />}
                                            />
                                        </Link>

                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="#3C3C3D" borderRadius="lg">
                                    <Box m={8} color="white">
                                        <VStack spacing={5}>
                                            <FormControl id="name">
                                                <FormLabel>Your Name</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<BsPerson color="gray.800" />}
                                                    />
                                                    <Input type="text" size="md" />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Mail</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<MdOutlineEmail color="gray.800" />}
                                                    />
                                                    <Input type="text" size="md" />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Message</FormLabel>
                                                <Textarea
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}
                                                    placeholder="message"
                                                />
                                            </FormControl>
                                            <FormControl id="name" float="right">
                                                <Button
                                                    variant="solid"
                                                    bg="black"
                                                    color="white"
                                                    _hover={{}}>
                                                    Send Message
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}
