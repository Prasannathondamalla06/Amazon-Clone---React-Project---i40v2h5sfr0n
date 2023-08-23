// import React, { useState } from "react";
// import Slider from "react-slick";
import  bannerImgOne  from "../../styles/banner/bannerImgOne.jpg";
import  bannerImgTwo  from "../../styles/banner/bannerImgTwo.jpg";
import  bannerImgThree  from "../../styles/banner/bannerImgThree.jpg";
import  bannerImgFour  from "../../styles/banner/bannerImgFour.jpg";
import  bannerImgFive  from "../../styles/banner/bannerImgFive.jpg";

import "./Banner.css";
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {MobileStepper,Button} from '@material-ui/core';
import {KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

 const Banner=() =>{

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const tutorialSteps = [
      {
        imgPath: bannerImgOne
      },
      {
        imgPath: bannerImgTwo
      },
      {
        imgPath: bannerImgThree
      },
      {
        imgPath:bannerImgFour
      },
      {
        imgPath: bannerImgFive
      },
    ];
    
    const useStyles = makeStyles((theme) => ({
      root: {
        width:"100%",
        flexGrow: 1,
        marginTop:20,
        [theme.breakpoints.down('sm')]: {
          marginTop: 100, // Adjust the margin for smaller screens
        },
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
      },
      img: {
        height: 400,
        display: 'block',
       width:"100%",
        overflow: 'hidden',
        width: '100%',
      },
      
    }));
    
    
      const classes = useStyles();
      const theme = useTheme();
      const [activeStep, setActiveStep] = React.useState(0);
      const maxSteps = tutorialSteps.length;
    
      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleStepChange = (step) => {
        setActiveStep(step);
      };
    
    
    return (
        <div className={classes.root}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath}  />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
        
      );
    };

export default Banner;