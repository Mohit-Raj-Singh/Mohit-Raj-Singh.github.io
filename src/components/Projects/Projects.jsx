import {
  Box,
  VStack,
  Divider,
  Grid,
  Container,
  Image,
  HStack,
  Text,
  Link,
  Heading,
} from "@chakra-ui/react";
import uboric from "../../Assets/portfolio1.png";
import rentomojo from "../../Assets/portfolio4.png";
import booking from "../../Assets/portfolio2.png";
import koovs from "../../Assets/portfolio3.png";
import { SiRedux, SiChakraui } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
// import { MdMilitaryTech } from "react-icons/md";
import { DiMongodb } from "react-icons/di";

const Allproject = [
  {
    img: uboric,
    title: "Uboric-Clone",
    description:
      "Uboric is an Ecommerce that delivers throughout India. You can shop for the desired product for your home and get them delivered to your doorstep.",
    git: "https://github.com/Mohit-Raj-Singh/-daily-purpose-3625",
    link: "https://u-shopic.vercel.app/",
    // tech: "React.js | React-Redux , JavaScript | Chakra-UI",
    tech: [
      <FaCss3Alt size={"44px"} />,
      <FaReact size={"44px"} />,
      <SiRedux size={"44px"} />,
      <SiChakraui size={"44px"} />,
    ],
  },
  {
    img: booking,
    title: "Booking.com - Clone",
    description:
      "Booking.com is an online travel agency for lodging reservations.",
    git: "https://github.com/Mohit-Raj-Singh/Booking.com-Clone",
    link: "https://booking-come-1562.netlify.app/",
    // tech: "React.js | React-Redux , JavaScript | Chakra-UI",
    tech: [
      <FaCss3Alt size={"44px"} />,
      <FaReact size={"44px"} />,
      <SiRedux size={"44px"} />,
      <SiChakraui size={"44px"} />,
    ],
  },
  {
    img: koovs,
    title: "Koovs.com - Clone",
    description:
      "Clone of Koovs.com, koovs is a Ecomerse related website which helps you to find the different kinds of the products.",
    git: "https://github.com/Mohit-Raj-Singh/Koovs-Clone",
    link: "https://frontend-mohit-6164.vercel.app/",
    // tech: "React.js | React-Redux , JavaScript | Chakra-UI | Node.js | Express.js | MongoDB",
    tech: [
      <FaCss3Alt size={"44px"} />,
      <FaReact size={"44px"} />,
      <DiMongodb size={"44px"} />,
      <SiChakraui size={"44px"} />,
    ],
  },
  {
    img: rentomojo,
    title: "Rentomojo - Clone",
    description:
      "India's leading rental platform brings to you a wide range of products on rent. Experience the freedom to live the life you want, now.",
    git: "https://github.com/pratiksontakke/prompt-advertisement-8166",
    link: "https://jovial-dusk-c6ab4b.netlify.app/",
    // tech: "HTML | CSS | Javascript ",
    tech: [
      <FaHtml5 size={"44px"} />,
      <FaCss3Alt size={"44px"} />,
      <FaReact size={"44px"} />,
      // <SiChakraui size={"44px"} />,
    ],
  },
];

function Project() {
  return (
    <Box as={Container} maxW="8xl" mt={14} p={4} id="project">
      <Heading mb={20} color={"#f9f1ac"}>
        Projects
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      ></Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: "8", sm: "9", md: "12" }}
      >
        {Allproject.map(({ img, title, tech, description, git, link }) => (
          <VStack
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            key={title}
            // w={"500px"}
            m={"50px"}
            w={{ base: "250px", sm: "300px", md: "300px", lg: "400px" }}
            aline={"center"}
            justify={"center"}
            margin={"auto"}
          >
            <Image
              padding="15px"
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
              }
              src={img}
              alt={title}
              w={{ base: "250px", sm: "300px", md: "300px", lg: "400px" }}
              // h={{ base: "180px", sm: "180px", md: "220px", lg:"280px" }}
            />
            <Text color={"#f9f1ac "} fontSize="3xl" mt="100px">
              {title}
            </Text>
            <Text
              w={{ base: "230px", sm: "300px", md: "280px" }}
              h={{ base: "280px", sm: "300px", md: "175px" }}
              color={"white"}
              fontSize={"lg"}
            >
              {description}
            </Text>
            {/* <Text frontWidth={"lg"} color={"white"}>
              Tech stack: {tech}
            </Text> */}

            <HStack color={"#f9f1ac"}>
              <Box>{tech[0]}</Box>
              <Box>{tech[1]}</Box>
              <Box>{tech[2]}</Box>
              <Box>{tech[3]}</Box>
            </HStack>

            <HStack padding={7}>
              <Link
                boxShadow={
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                }
                href={git}
                isExternal
                w={"auto"}
                border="1px"
                padding={"8px 15px"}
                borderRadius="10px"
                borderColor="#f09e06"
                bg={"#f9f1ac"}
                fontWeight={"bold"}
                fontSize={{ base: "12px", sm: "12px", md: "15px" }}
                _hover={{ color: "#f09e06", bg: "white" }}
              >
                Github
              </Link>

              <Link
                boxShadow={
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                }
                href={link}
                isExternal
                w={"auto"}
                border="1px"
                padding={"8px 15px"}
                borderRadius="10px"
                borderColor="#f09e06"
                bg={"#f9f1ac"}
                fontWeight={"bold"}
                fontSize={{ base: "12px", sm: "12px", md: "15px" }}
                _hover={{ color: "#f09e06", bg: "white" }}
              >
                Deploy link
              </Link>
            </HStack>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
}
export default Project;
