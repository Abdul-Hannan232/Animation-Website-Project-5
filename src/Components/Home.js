import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import useWebAnimations from '@wellyshen/use-web-animations';
import Navbar from './Navbar';


export default function Home() {
    const [react, setReact] = useState(true);
    const [front, setFront] = useState(false);
    const [web, setWeb] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            if (react) {
                setReact(false);
                setWeb(false);
                setFront(true);
            } else if (front) {
                setReact(false);
                setFront(false);
                setWeb(true);
            } else {
                setReact(true);
                setFront(false);
                setWeb(false);
            }
        }, 3000);
    }, [react, front]);


    const { ref } = useWebAnimations({
        keyframes: [
            { transform: "translateY(0)", position: "absolute" },
            { transform: "translateY(-30px)", position: "absolute" },
            { transform: "translateY(0)", position: "absolute" },
        ],
        animationOptions: {
            duration: 3000,
            iterations: Infinity,
        }
    });

    return (
        <div className="home">
            <Navbar />
            <Box sx={{ flexGrow: 1 }} style={{ margin: "5%" }}  >
                <Grid container spacing={2}>
                    <Grid container item xs={12} md={7} justifyContent="center"  >
                        <div className="linear" >
                            <h4 className="congrats" >Congrats, you have find the right developer</h4>
                            <h1 className="welcome" >Welcome to Abdul Hannan's Portfolio</h1>

                            {react && (<h2 className="role" >I am a ReactJS Developer </h2>)}
                            {front && (<h2 className="role" >I am a Front-End Developer </h2>)}
                            {web && (<h2 className="role" >I am a Web Developer </h2>)}

                            <Button variant="none" endIcon={<GitHubIcon />}>
                                Github
                            </Button>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={5} >
                        <div className="linear" style={{ position: "relative" }} elevation={0} >
                            <img ref={ref} className="brain" src="https://www.cortexcopywriter.com/img/intro/Intro_Brain.svg" alt="Brain Technology" />

                            <img className="light" src="https://www.cortexcopywriter.com/img/intro/Intro_Front_Layer.svg" alt="Light Technology" />

                            <img src="https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg" alt="Animated Technology" />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
