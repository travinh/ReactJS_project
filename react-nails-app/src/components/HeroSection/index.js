import React, {useState} from 'react';
import Video from '../../videos/nails.mp4';
import {Button} from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'


const HeroSection = () => {

    const [hover,setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>What makes you beautiful!</HeroH1>
                <HeroP>
                    Sign Up Now To Get Rewards!
                </HeroP>
            </HeroContent>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get started { hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContainer>
    )
}

export default HeroSection
