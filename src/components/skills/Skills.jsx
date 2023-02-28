import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import { } from "@chakra-ui/react";


function Skills() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4} id="skills">
      <Heading color={"#f9f1ac"}>
        My Skills
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      ></Grid>
      <Divider mt={12} mb={12} />
      <Text
        fontSize="4xl"
        color={"#f9f1ac"}
        mt={10}
        mb={20}
      >
        Technical Skills
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(5, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://img.icons8.com/color/256/html-5.png"
            w={20}
          />
          <Text color={"white"}>HTML</Text>
        </VStack>
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://img.icons8.com/fluency/256/css3.png"
            w={20}
          />
          <Text color={"white"}>CSS</Text>
        </VStack>
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://img.icons8.com/color/256/javascript.png"
            w={20}
          />
          <Text color={"white"}>JavaScript</Text>
        </VStack>
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            w={20}
          />
          <Text color={"white"}>React</Text>
        </VStack>
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png"
            w={20}
          />
          <Text color={"white"}>Redux</Text>
        </VStack>
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://img.icons8.com/color/256/chakra-ui.png"
            w={20}
          />
          <Text color={"white"}>Chakra-UI</Text>
        </VStack>
        <VStack aline={"center"} justify={"center"}>
          <Image
          src='https://img.icons8.com/fluency/1x/node-js.png'
            w={20}
          />
          <Text color={"white"}>Nodejs</Text>
        </VStack>
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://www.mementotech.in/assets/images/icons/express.png"
            w={20}
          />
          <Text color={"white"}>Expressjs</Text>
        </VStack>
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png"
            w={20}
          />
          <Text color={"white"}>Mongodb</Text>
        </VStack>
      </Grid>


      {/* tools */}
      <Text fontSize="4xl" color={"#f9f1ac"} mt={20}>
        Tools
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(5, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
        mt={20}
      >
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://www.svgrepo.com/show/327408/logo-vercel.svg"
            w={20}
          />
          <Text color={"white"}>Vercel</Text>
        </VStack>
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/netlify-3521601-2945045.png?f=avif&w=128"
            w={20}
          />
          <Text color={"white"}>Netlify</Text>
        </VStack>
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            w={20}
          />
          <Text color={"white"}>Github</Text>
        </VStack>
        <VStack aline={"center"} justify={"center"}>
          <Image
            src="https://img.icons8.com/color/256/visual-studio-code-2019.png"
            w={20}
          />
          <Text color={"white"}>Vs code</Text>
        </VStack>
      </Grid>
    </Box>
  );
}


export default Skills;