import React from 'react'
import  { Button } from 'react-scroll' 
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, TopLine,  Subtitle, BtnWrap } from './InfoSectionElements'

const InfoSection = () => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    TopLine
                                </TopLine>
                                <Heading>
                                    Heading
                                </Heading>
                                <Subtitle>
                                    Subtitle
                                </Subtitle>
                                <BtnWrap>
                                    <Button to="home">
                                        Button
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection