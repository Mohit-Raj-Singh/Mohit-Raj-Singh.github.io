import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
// import GitHubCalendar from "react-g"


const GitHub = () => {

    return (
        <Box as={Container} maxW="7xl" mt={14} p={4} id="skill">
            <Heading mb={20} color={"rgb(240, 158, 6)"}>
                GitHub Stats
            </Heading>
            <Flex 
            justify={"center"}
            >
                <GitHubCalendar 
                username="Mohit-Raj-Singh"
                // color="#f9f1ac"
                color="golden"
                />
            </Flex>
            <Text align={"center"}>
                <Flex w={{ base: "280px", sm: "320px", md: "440px", lg: "560px" }} margin={"auto"} gap={5} mt={50} direction={"column"} justifyContent={"center"} >
                    <Image
                        src={"https://github-readme-stats.vercel.app/api?username=Mohit-Raj-Singh&count_private=true&theme=gruvbox&border_radius=15&color=fb982f"}
                        alt={"Github Card"}

                    />
                    <Image
                        src={"https://github-readme-stats.vercel.app/api/top-langs/?username=Mohit-Raj-Singh&layout=compact&theme=gruvbox&border_radius=15&color=fb982f"}
                        alt={"Github Language"}
                    />
                    <Image
                        src={"https://streak-stats.demolab.com/?user=Mohit-Raj-Singh&theme=gruvbox&border_radius=15&date_format=M%20j%5B%2C%20Y%5D&color=4db5ff"}
                    />
                </Flex>
            </Text>
        </ Box>
    );
};

export default GitHub;