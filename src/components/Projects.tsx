import React, { useRef, useEffect } from "react";

import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
//import DevIcon from "devicon-react-svg";
import AlternativeProject from "./AlternativeProject";
import AlternativeReverse from "../components/AlternativeReverse";

let iconSize = "6rem";
const devIconStyle = {
  react: { fill: "gray" },
  html: { fill: "gray" },
  js: { fill: "gray" },
  vscode: { fill: "gray" },
  sass: { fill: "gray" },
  css: { fill: "gray" },
};
// const useScroll = () => {
//   const myRef = useRef(null);
//   const executeScroll = () =>
//     myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

//   return [executeScroll, myRef];
// };

export default function App() {
  //   const [executeScroll, myRef] = useScroll();

  return (
    <>
      <AlternativeReverse
        image="/images/namematch.webp"
        description="A Full Stack App using MongoDB for the database and ReactJS with
            ChakaraUI as a front-end. This app allows users to 'like' or 'dislike' name suggestions and match with your partner."
        liveURL="http://name-match.herokuapp.com/"
        sourceCodeURL="https://github.com/nickmackenzie/namematch"
        //techIcons=""
        stack="ReactJS | NodeJS | Mongo-DB"
        name="NameMatch"
        // altText=""
      ></AlternativeReverse>
      <AlternativeProject
        image="/images/souschef.png"
        description="A Full Stack React app and MongoDB. It utilizes the PrimeReact library for the UI. It Helps organize working cooks with a global prep lists that sets the right amount of 'par-lev' according to the day. "
        liveURL="https://souschef3.herokuapp.com/"
        sourceCodeURL="https://github.com/nickmackenzie/souschef"
        // techIcons=""
        stack="ReactJS | Mongo-DB | NodeJs | JWT-Authentication"
        name="SousChef"
      ></AlternativeProject>
      <AlternativeReverse
        image="images/hangman.webp"
        description="A hangman game made with pure JavaScript, HTML and CSS."
        liveURL="https://nickmackenzie.github.io/hangman/"
        sourceCodeURL="https://github.com/nickmackenzie/hangman"
        //techIcons=""
        stack="HTML | CSS | JavaScript"
        name="Don't Fall Off The Water Fall!"
      ></AlternativeReverse>
      <AlternativeProject
        image="/images/trivia.webp"
        description="A 'live' multiplayer trivia game with live leader boards. Utilizes Django, OpenTDB API and a MySQL database."
        liveURL="http://trivia-night-django-app.herokuapp.com/"
        sourceCodeURL="https://github.com/nickmackenzie/Trivia-Night"
        //techIcons=""
        stack="Django | Python | MySQL | JavaScript"
        name="Trivia Night"
      ></AlternativeProject>
      <AlternativeReverse
        image="images/codesave.png"
        description="A NodeJs App using Google Authentication. It allows users to save their code 'snippets' to a cloud database. Supports over 15+ languages with automatic syntax highlighting."
        liveURL="https://code-save.herokuapp.com/"
        sourceCodeURL="https://github.com/nickmackenzie/code-save/"
        //techIcons=""
        stack="NodeJS | ExpressJS | MongoDB | Google Authentication API | EJS Templates"
        name="CodeSave"
      ></AlternativeReverse>
    </>
  );
}
