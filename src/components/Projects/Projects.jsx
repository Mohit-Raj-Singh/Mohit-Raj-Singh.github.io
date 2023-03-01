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
import rentomojo from "../../Assets/portfolio2.png";
import kick from "../../Assets/portfolio3.png";
import gearbest from "../../Assets/portfolio4.png";



const Allproject = [
  {
    img: uboric,
    title: "Uboric-Clone",
    description:
      "Uboric is an India-based E-commerce that delivers throughout India. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep.",
    git: "https://github.com/Mohit-Raj-Singh/-daily-purpose-3625",
    link: "https://u-shopic.vercel.app/",
    tech: "React.js | React-Redux"
  },
  {
    img: rentomojo,
    title: "Rentomojo - Clone",
    description: "India's leading rental platform brings to you a wide range of products on rent. Experience the freedom to live the life you want, now.",
    git: "https://github.com/pratiksontakke/prompt-advertisement-8166",
    link: "https://jovial-dusk-c6ab4b.netlify.app/",
    tech: "HTML | CSS | Javascript ",
  },
  {
    img: kick,
    title: "Kickstarter - Clone",
    description: "Kickstarter is one of those platforms that gives you space to work with people who know you and support you",
    git: "https://github.com/RajatMujawar123/large-house-6330",
    link: "https://legendary-pony-75d1d1.netlify.app/",
    tech: "HTML | CSS | Javascript ",
    },
  {
    img: gearbest,
    title: "Gearbest - Clone",
    description: "Gearbest provides the most cost-efficient delivery service covering 200+ countries and regions, most of which enjoy free door-to-door delivery.",
    git: "https://github.com/Mohit-Raj-Singh/Team-Gearbest",
    link: "https://celadon-cendol-c3a752.netlify.app/",
    tech: "HTML | CSS | Javascript ",
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
          lg: "repeat(3, 1fr)"
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
              padding={7}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
              }
              src={img}
              alt={title}
              w={{ base: "200px", sm: "250px", md: "280px" }}
            />
            <Text color={"#f9f1ac "} fontSize="3xl" mt="100px">
              {title}
            </Text>
            <Text
              w={{ base: "230px", sm: "300px", md: "280px" }}
              h={{ base: "280px", sm: "300px", md: "240px" }}
              color={"white"}
              fontSize={"lg"}
            >
              {description}
            </Text>
            <Text frontWidth={"lg"} color={"white"}>
              Tech stack: {tech}
            </Text>


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
















