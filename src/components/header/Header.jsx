import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Link,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
import me from "../../Assets/me.png";

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
          <Text fontSize={{ base: '30%', lg: '25' }} color={'white'}>
            Full Stack MERN Developer
          </Text>
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
          borderRadius={"50px"}
          alt={'Login Image'}
          // objectFit={'cover'}
          w={'70%'}
          height="500px"
          src={me}
        />
      </Flex>
    </Stack>
  );
}