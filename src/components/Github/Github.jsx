import { Box, Flex, Image, Heading, VStack } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

function GitHub() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 5;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear ||
        monthOfDay > currentMonth - shownMonths ||
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <Flex
      id="github"
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <Heading mb={10} color={"white"}>
          Github
        </Heading>
      </Box>
      <VStack gap={{ base: "8", sm: "12", md: "16" }}>
        <Box
          border="2px solid white"
          borderRadius="10px"
          fontWeight="bold"
          padding="20px 20px"
          bg="#101327"
          color="white"
        >
          <GitHubCalendar
            justify={"center"}
            aline={"center"}
            username="Mohit-Raj-Singh"
            transformData={selectLastHalfYear}
            color="#59b0bb"
            width="100vw"
          />
        </Box>
        <Image
          justify={"center"}
          aline={"center"}
          src="https://github-readme-streak-stats.herokuapp.com/?user=Mohit-Raj-Singh&show_icons=true&locale=en&theme=prussian&count_private=true"
          alt="starts"
        />
        <Image
          justify={"center"}
          padding={"10px"}
          aline={"center"}
          src="https://github-readme-stats.vercel.app/api?username=Mohit-Raj-Singh&theme=github_dark&hide_border=false&include_all_commits=true&count_private=true"
          alt="stats"
        />
      </VStack>
    </Flex>
  );
}
export default GitHub;
