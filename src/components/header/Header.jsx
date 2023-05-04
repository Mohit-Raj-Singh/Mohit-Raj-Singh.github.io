import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Link,
  Icon,
  Text,
  useBreakpointValue,
  useColorModeValue,
  StackDivider,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
} from "react-icons/io5";
// import { Link } from 'react-router-dom';
import me from "../../Assets/me.png";


const Feature = ({ text, icon, iconBg }) => {
  return (
      <Stack direction={"row"} align={"center"}>
          <Flex
              w={8}
              h={8}
              align={"center"}
              justify={"center"}
              rounded={"full"}
              bg={iconBg}
          >
              {icon}
          </Flex>
          <Text fontWeight={600} color="white">{text}</Text>
      </Stack>
  );
};

export default function Header() {
  return (
    <Stack
      // minH={'100vh'}
      mt={"50px"}
      direction={{ base: 'column', md: 'row' }} >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              // position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                // bg: '#f9f1ac',
                zIndex: -1,
                color: 'black',
              }}>
              I am
            </Text>
            <br />{' '}
            <Text color={'#f9f1ac'} as={'span'}>
              Mohit Raj Singh
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: '21', lg: '25' }} color={'#d0b448'}>
            Full Stack MERN Developer
          </Text>
          <Text color={"white"} fontSize={"lg"}>
            Enthusiastic Aspiring self-motivated Full Stack Web Developer specialized MERN- stack from Masai School. Worked through 1000+ hours of learning HTML, CSS, JavaScript, React, React-Redux, and Chakra-UI. Looking to start a career as a web developer with a reputed firm driven by technology.
          </Text>
          <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue("gray.100", "gray.700")}
                            />
                        }
                    >
                        <Feature
                            icon={
                                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
                            }
                            iconBg={useColorModeValue("yellow.100", "yellow.900")}
                            text={"Coding Practice of 1000+ Hours"}
                        />
                        <Feature
                            icon={
                                <Icon as={IoAnalyticsSharp} color={"green.500"} w={5} h={5} />
                            }
                            iconBg={useColorModeValue("green.100", "green.900")}
                            text={"5+  Projects Completed"}
                        />
                        <Feature
                            icon={
                                <Icon as={IoAnalyticsSharp} color={"purple.500"} w={5} h={5} />
                            }
                            iconBg={useColorModeValue("purple.100", "purple.900")}
                            text={"DSA Practice of 700+ Hours"}
                        />
                    </Stack>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
            <Link
              boxShadow={
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              }
              href={"https://drive.google.com/file/d/1pU66hMY_E8PabIlRXU-TdMBk_0yRGUEA/view?usp=sharing"}
              isExternal
              w={"auto"}
              border="1px"

              padding={"8px 15px"}
              borderRadius="10px"
              borderColor="#f9f1ac"
              bg={"#f9f1ac"}
              fontWeight={"bold"}
              _hover={{ color: "#f09e06", bg: "white" }}
            >
              Resume
            </Link>
            <Link boxShadow={
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            }
              href={"#contact"}
              // isExternal
              w={"auto"}
              border="1px"

              padding={"8px 15px"}
              borderRadius="10px"
              borderColor="gray.500"
              bg={"gray.500"}
              fontWeight={"bold"}
              _hover={{ color: "gray.500", bg: "#f9f1ac" }}>Contact</Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          borderRadius={"50% 20%/ 10% 40%"}
          alt={'Login Image'}
          // objectFit={'cover'}
          w={'70%'}
          // height="500px"
          // alignItems={"center"}
          // justifyContent={"center"}
          margin={"auto"}
          src={me}
        />
      </Flex>
    </Stack>
  );
}