import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Skyline.jpg";
//import chatify from "../../Assets/Projects/balances.png";
import bitsOfCode from "../../Assets/Projects/screen.png";
import raydium from "../../Assets/Projects/tradingbot.png";
import sniper from "../../Assets/Projects/sniper.png";
import villa from "../../Assets/Projects/villa.png";
import mytoken from "../../Assets/Projects/mytoken.png";
import bus from "../../Assets/Projects/bus.png";
import veggie from "../../Assets/Projects/veggie.png";
import doctor from "../../Assets/Projects/doctor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mytoken}
              isBlog={false}
              title="My own Solana Token"
              description="A simple Solana Smart Contract for minting NFTs
              ArtToken (ART) - ERC 20 Token ERC20 Token - With sell, buy, mint and transfer functions.This repository has the tokens as single files. This makes it easier for contributors to add new tokens, for reviewers to get a good view on the change and also makes it easier to merge in tokens from other sources. "
              ghLink="https://github.com/TopRated-A/My-token"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veggie}
              isBlog={false}
              title="VeggieVille(Vegetable Shopping)"
              description="This Project is Online shopping for grocery (Vegetables and fruits ) fresh from farmers which is build using Reactjs and backend as Firebase Cloud, featuring a user-friendly interface, essential functionalities like user registration, login, shopping cart. The platform is built on the React.js framework and employs technologies such as CORS, Axios, and Mongoose."
              ghLink="https://github.com/TopRated-A/VegetableShop-VeggieVille"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctor}
              isBlog={false}
              title="Dentist Website"
              description="This is a demo website. It was created for a medical team, which is dedicated to the care of patients. Patients can easily book an appointment and the doctors in charge can see the booked appointment. The sign-in login system has been simplified here and the setting option is checked where the user can update the profile."
              ghLink="https://github.com/TopRated-A/Dentist-Website"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raydium}
              isBlog={false}
              title="Solana Raydium Bot"
              description="This is a Raydium bot based on the solana. This bot fetches the real-time trading data from raydium pool using WebSocket RPC."
              ghLink="https://github.com/TopRated-A/Solana-Raydium-bot"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Token Swap Program"
              description="This project demonstrates how to perform a token swap on the Solana blockchain using Raydium and Chainstack. The example specifically illustrates swapping SOL (native Solana token) for USDC (a stablecoin)."
              ghLink="https://github.com/TopRated-A/Token-swap-program"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sniper}
              isBlog={false}
              title="AI PNL Bot"
              description="Developed a solana PNL bot using Solana and Web3.js.
              This bot analyze the specific token and obeserve the PNL price of token using  CoinMarket API and Web3 API."
              ghLink="https://github.com/TopRated-A/AI-PNL-Bot"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bus}
              isBlog={false}
              title="Bus-Ticket Booking"
              description="A centralised bus ticket booking system that will allow the students to book tickets in advance through an online website, saving time and effort. Students will no longer need to physically stand in long queues to purchase tickets. The ticket booking system will provide a user-friendly interface where passengers can search for available routes, select their desired travel date and time and make secure online payments."
              ghLink="https://github.com/TopRated-A/Bus-Ticket-System"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={villa}
              isBlog={false}
              title="Villa Luxe Hotel"
              description="Villa Luxe is a hotel website that can be used for online reservations. Built using the TALL Stack: Tailwind CSS3, AlpineJS, Livewire2, Laravel. I actually made the UI here myself using Tailwind CSS and AplineJS without using any templates at all."
              ghLink="https://github.com/TopRated-A/Villa-Luxe"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Big Sky Lodge Hotel"
              description="This project is a landing page (website) and management system for small-scale hotel operations with ability to manage/track revenue in short-term and long-term stays, email reservation confirmations, generate financial reports, as well as track housekeeping operations and maintenance logs for multiple motels with more features to come in the future!"
              ghLink="https://github.com/TopRated-A/HotelManagement"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
