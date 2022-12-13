import React from 'react'
import { Box, Flex, Grid, Image, Heading } from "@chakra-ui/react";

import GitHubCalendar from "react-github-calendar";

const Github = () => {

    const selectLastHalfYear = (contributions) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 7;

        return contributions.filter((day) => {
            const date = new Date(day.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };

    return (
        <Box id='github' paddingTop={{ base: "70px", sm: "70px", md: "100px", lg: "100px" }}>
            {/* heading section */}
            <Box className='section-title' >
                <Heading as="h2" opacity="0.5" size="2xl" >Github</Heading>
            </Box>
            {/* main section */}

            <Box pt={{ sm: '30px' }} w='full' mt='50px' mb='25' id='Github' >






                <Flex flexDir='column' align='center' >
                    <Box border="2px solid #fb982f" p="20px" borderRadius="10px" >
                        <GitHubCalendar
                            username="Mohit-Raj-Singh"
                            transformData={selectLastHalfYear}
                            color="#4db5ff"
                            width="90vw"
                        />


                    </Box>


                    <Grid
                        p='5'
                        m="16"
                        gap={{ base: "3", md: "10" }}
                        gridTemplateColumns={{ base: "1fr", lg: "repeat(3,1fr)" }}
                        width={{ base: "100%", md: "auto" }}
                    >


                        <Box>
                            <Image src="https://streak-stats.demolab.com/?user=Mohit-Raj-Singh&theme=gruvbox&border_radius=15&date_format=M%20j%5B%2C%20Y%5D&color=fb982f" />
                        </Box>

                        <Box>
                            <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mohit-Raj-Singh&layout=compact&theme=gruvbox&border_radius=15&color=fb982f" />
                        </Box>

                        <Box>
                            <Image src="https://github-readme-stats.vercel.app/api?username=Mohit-Raj-Singh&count_private=true&theme=gruvbox&border_radius=15&color=fb982f" />
                        </Box>
                    </Grid>
                </Flex>
            </Box>

        </Box>
    )
}

export default Github