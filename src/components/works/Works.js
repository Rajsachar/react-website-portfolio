/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/Portfolio.png';
import Sliding from '../../assets/recentprojects/sliding.png' ;
import Tic from '../../assets/recentprojects/tictactoe.png';
import Planets from '../../assets/recentprojects/planets.png';
import Doggo from '../../assets/recentprojects/Doggo.png';



const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      class:"android",
      title: 'Game of 15 Slider Puzzle – Android App', 
      description: `A game of 15 puzzzle, created using C# that tracks the moves taken.`,
      alter: 'Game of 15',
      image: `${Sliding}`,
    },
    { 
      id: 2,
      class:"android",
      title: 'TicTacToe', 
      description: `A simple game of tictactoe that alternates between two players created using C#`,
      alter: 'TicTacToe',
      image: `${Tic}`,
    },
    { 
      id: 3,
      title: 'Portfolio Website', 
      description: `The page you're on right now!`,
      alter: 'Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 4,
      title: 'Solar System Educating Tool', 
      description: `A website using React and Wikipedia's api to auto generate react cards with the information of the planets in the solar system`,
      alter: 'Solar Project',
      image: `${Planets}`,
    },
    { 
      id: 5,
      title: 'Dog-A-Day – Full Stack Development ', 
      description: `Constructed a site using HTML5 and JavaScript to generate 
      random, new, images of a dog and using JavaScript to sort the Api by over 20 breeds of dog`,
      alter: 'School Project',
      image: `${Doggo}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
