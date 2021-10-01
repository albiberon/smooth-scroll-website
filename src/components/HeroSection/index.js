import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import Video from '../../videos/bitcoin_video.mp4'
import { Button} from '../ButtonElements'


const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Decentralized Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and receive €250 in BitCoin towards your next payment</HeroP>
                <HeroBtnWrapper>
                    <Button 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary= 'true'
                    dark= 'true'
                    to="signup">Get started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
