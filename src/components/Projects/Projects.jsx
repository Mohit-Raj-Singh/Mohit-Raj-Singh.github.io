import { Box, Heading, Grid, Flex } from "@chakra-ui/react";
import React from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const Projects = () => {
  return (
    <Box
      id="projects"
      paddingTop={{ base: "70px", sm: "70px", md: "100px", lg: "100px" }}
    >
      {/* heading*/}
      <Box className="section-title">
        <Heading opacity="0.5" as="h2" size="2xl">
          Projects
        </Heading>
      </Box>
      {/* below content */}
      <Box
        m="auto"
        w="auto"
        justifyContent="center"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
      >
        <Grid
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          flex-wrap="wrap"
          justifyContent="space-evenly"
          rowGap={10}
        >
          {/* 1 */}
          <Box className="card">
            <h2 className="card-title">K F C ( Clone )</h2>
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1488265976/k2htrr9z4vsxkjbthskk.png"
              alt="kfc"
            />
            <Box className="card-desc" p="10px">
              <p style={{ height: "80px" }} marginBottom="10px">
                KFC is a fast food brand specializing in chicken.deliver more
                than 700 food Item{" "}
              </p>
              <Heading size="md" margin="10px auto" opacity=".5">
                Tech Stack
              </Heading>
              <b margin="10px auto">
                React | Vercel | currency bundler Package |
              </b>
              {/* <b><li>Fully Responsive</li></b> */}

              <Flex justifyContent="space-around" m="20px auto">
                <a
                  href="https://github.com/iesparag/iesparag-joyful-horses-61/tree/main/kfc-clone-by-iesparag"
                  target="_blank"
                >
                  <button className="btn_pill">Github</button>
                </a>
                <a
                  href="https://kfc-clone-by-iesparag.vercel.app/"
                  target="_blank"
                >
                  <button className="btn_pill">Website</button>
                </a>
              </Flex>
            </Box>
          </Box>

          {/* 2 */}
          <Box className="card">
            <h2 className="card-title">K E T T O ( Clone )</h2>
            <img
              src="https://i0.wp.com/ketto.blog/wp-content/uploads/2022/12/Is-crowdfunding-still-popular_-Which-crowdfunding-site-is-the-best.png?fit=1024%2C576&ssl=1"
              alt="ketto"
            />
            <Box className="card-desc" p="10px">
              <p style={{ height: "80px" }} marginBottom="10px">
                Ketto is an Online Crowdfunding Platform and Website in India.
              </p>
              <Heading size="md" margin="10px auto" opacity=".5">
                Tech Stack
              </Heading>
              <b margin="10px auto">
                HTML 5 | Css | Java Script | Json-Server |{" "}
              </b>

              <Flex justifyContent="space-around" m="20px auto">
                <a
                  href="https://github.com/rakesh7063/versed-substance-8213"
                  target="_blank"
                >
                  <button className="btn_pill">Github</button>
                </a>
                <a
                  href="https://ketto-official-clone.netlify.app/"
                  target="_blank"
                >
                  <button className="btn_pill">Website</button>
                </a>
              </Flex>
            </Box>
          </Box>
          {/* 3 */}
          <Box className="card">
            <h2 className="card-title">R E N T O M O Z O</h2>
            <img
              src="https://rukminim1.flixcart.com/image/416/416/l44hyfk0/sofa-sectional/y/b/z/symmetrical-80-lilac-lavendor-purple-203-polyester-40-original-imagf38spwtctyf3.jpeg?q=70"
              alt="rentomozo"
            />
            <Box className="card-desc" p="10px">
              <p style={{ height: "80px" }} marginBottom="10px">
                Rentomojo is an online rental solution for all the furnishing
                needs.
              </p>
              <Heading size="md" margin="10px auto" opacity=".5">
                Tech Stack
              </Heading>
              <b margin="10px auto">HTML 5 | Css | Java Script | Bootstrap</b>

              <Flex justifyContent="space-around" m="20px auto">
                <a
                  href="https://github.com/pratiksontakke/prompt-advertisement-8166"
                  target="_blank"
                >
                  <button className="btn_pill">Github</button>
                </a>
                <a
                  href="https://jovial-dusk-c6ab4b.netlify.app/"
                  target="_blank"
                >
                  <button className="btn_pill">Website</button>
                </a>
              </Flex>
            </Box>
          </Box>

          {/* 4 */}
          <Box className="card">
            <h2 className="card-title">T E C h W O R L D</h2>
            <img
              src="https://www.apple.com/v/iphone-14-pro/c/images/meta/iphone-14-pro_overview__e414c54gtu6a_og.png?202301190427"
              alt="techworld"
            />
            <Box className="card-desc" p="10px">
              <p style={{ height: "80px" }} marginBottom="10px">
                Tech World is a E-commerce website that is used to sell all type
                of Electronic Products.
              </p>
              <Heading size="md" margin="10px auto" opacity=".5">
                Tech Stack
              </Heading>
              <b margin="10px auto">React | Node | mongoDB | Express</b>
              {/* <b><li>Fully Responsive</li></b> */}

              <Flex justifyContent="space-around" m="20px auto">
                <a
                  href="https://github.com/Raj-1313/holy-week-7770"
                  target="_blank"
                >
                  <button className="btn_pill">Github</button>
                </a>
                <a href="https://techworld-tau.vercel.app/" target="_blank">
                  <button className="btn_pill">Website</button>
                </a>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;