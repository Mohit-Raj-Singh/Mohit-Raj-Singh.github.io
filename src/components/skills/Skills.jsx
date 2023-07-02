import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <Box id="skills" color={"white"} my="10" py="10" w="100%">
      <Box w="100%">
        <Heading
          textAlign={"center"}
          my="10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Skills
        </Heading>
        <Box className="slider" data-aos="fade-up" data-aos-duration="1000">
          <Box className="slide-track">
            <Box className="slide">
              <Image
                className="slide-image"
                title="HTML5"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="CSS3"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="JAVASCRIPT"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="REACT"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="MONGODB"
                src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="CHAKRAUI"
                src="https://img.icons8.com/color/256/chakra-ui.png"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="NODEJS"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="EXPRESSJS"
                src="https://www.mementotech.in/assets/images/icons/express.png"
              />
            </Box>

            <Box className="slide">
              <Image
                className="slide-image"
                title="HTML5"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="CSS3"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="JAVASCRIPT"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="REACT"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="MONGODB"
                src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="REDUX"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="NODEJS"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              />
            </Box>
            <Box className="slide">
              <Image
                className="slide-image"
                title="TYPESCRIPT"
                src="https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo-1024x576.png"
              />
            </Box>
          </Box>
        </Box>
        <Heading
          textAlign={"center"}
          my="10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Tools
        </Heading>
        <Flex className="tools-container">
          <Box className="tools">
            <Image
              title="GITHUB"
              src="https://img.icons8.com/ios-glyphs/512/github.png"
            />
          </Box>
          <Box className="tools">
            <Image
              title="VS CODE"
              src="https://i.ibb.co/61nck0S/download-removebg-preview.png"
            />
          </Box>
          <Box className="tools">
            <Image
              title="GIT"
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            />
          </Box>
          <Box className="tools">
            <Image
              title="NETLIFY"
              src="https://cdn.iconscout.com/icon/free/png-256/netlify-3521601-2945045.png?f=avif&w=128"
            />
          </Box>
          <Box className="tools">
            <Image
              title="VERCEL"
              src="https://www.svgrepo.com/show/327408/logo-vercel.svg"
            />
          </Box>
          <Box className="tools">
            <Image
              title="CODEPEN"
              src="https://img.icons8.com/ios-filled/512/codepen.png"
            />
          </Box>
          <Box className="lastTool">
            <Image
              title="CODE SANDBOX"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-codesandbox-an-online-code-editor-and-sharing-web-application-projects-logo-color-tal-revivo.png"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Skills;
