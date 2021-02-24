import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg} from './HeroElements'

const HeroSection = () => {
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
                <Button to="signup">Get started { hover ? <ArrowForward/> : <ArrowRight/>}</Button>
            </HeroBtnWrapper>
        </HeroContainer>
    )
}

export default HeroSection
