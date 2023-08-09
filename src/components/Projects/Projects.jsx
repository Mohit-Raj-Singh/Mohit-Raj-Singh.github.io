import { Box, Text, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProjectCards from "./ProjectCard";
import { projectsData } from "./ProjectData";
import "./Project.css";
import axios from "axios";

const Project = () => {

  const[mproject,setMproject]=useState([]);

  const getData=async()=>{
    try{
      const response= await axios.get("https://puce-friendly-clownfish.cyclic.app/get");
      setMproject(response.data);
    }
    catch(err){
      console.log(err);
    }
  }


  useEffect(()=>{
    getData();
    console.log(mproject);
  },[]);

  return (
    <Box id="project" color={"white"} pt="40">
      <Box w="100%">
        <Box
          display={"flex"}
          w="100%"
          flexDir={{ base: "column", sm: "column", md: "row" }}
          justifyContent="center"
          alignItems={"center"}
          gap="20"
          data-aos="fade-up"
        >
          <Box
            w="50%"
            className="flex"
            flexDirection={"column"}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <Heading
              fontWeight={"semibold"}
              mb="5"
              letterSpacing="2px"
              textAlign={"center"}
              fontSize="2.5rem"
            >
              Projects
            </Heading>
            <Text
              fontSize={{ base: "1rem", sm: "1.3rem" }}
              color="whiteAlpha.700"
              textAlign={"center"}
            >
              My projects make use of a vast variety of latest technology tools.
              My best experience is to create React Project and NodeJS Backend
              Projects. Below are some of my projects.
            </Text>
          </Box>
        </Box>
        <Box
          my="10"
          mt="20"
          px="2"
          data-aos="fade-down"
          data-aos-duration="1000"
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          justifyContent={"space-between"}
          gap="10px"
        >
          {projectsData.map((project) => {
            return <ProjectCards {...project} key={project.id} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
