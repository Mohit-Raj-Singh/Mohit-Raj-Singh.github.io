import React from 'react'
import { Box, Flex, Grid, Image, Heading } from "@chakra-ui/react";
import "./github.css"

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
        <section id='github'>
            <h2>GitHub</h2>
            <div className='container container_github'>
                <div className='calendar'>
                    <GitHubCalendar
                        username="Mohit-Raj-Singh"
                        transformData={selectLastHalfYear}
                        color="1f1f38"
                        width="100vw"
                    />
                </div>
                <div className='contribution'>
                    <img src="https://streak-stats.demolab.com/?user=Mohit-Raj-Singh&theme=gruvbox&border_radius=15&date_format=M%20j%5B%2C%20Y%5D&color=4db5ff" alt="contribution" />
                </div>
                <div className='language'>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mohit-Raj-Singh&layout=compact&theme=gruvbox&border_radius=15&color=fb982f" alt="language" />
                </div>
                <div className='stats'>
                    <img src="https://github-readme-stats.vercel.app/api?username=Mohit-Raj-Singh&count_private=true&theme=gruvbox&border_radius=15&color=fb982f" alt="stats" />
                </div>
            </div>




        </section>

    )
}

export default Github