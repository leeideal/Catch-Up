import styled  from 'styled-components';
import HowImg from './how.png'
import AboutImg from './p.png'
import { Link } from 'react-router-dom';

const Wapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
`

const Title = styled.h2`
    margin-top: 30px;
    color : ${props => props.theme.mainColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 24px;
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
    text-align: left;
    margin-bottom: 50px;
`

const Intro = styled.section`
    width: 80%;
    max-width: 440px;
    display: grid;
    grid-template-columns: 8fr 1fr 8fr;
    margin-bottom: 100px;
`

const AboutUs = styled.div`
    grid-column: 1/ span 1;
    height: 200px;
    background-image: url(${AboutImg});
    background-size: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    position: relative;
    cursor: pointer;
    span{
        color : ${props => props.theme.mainColor};
        position: absolute;
        bottom : 15px;
        right: 15px;
        color:black;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
        font-weight: 600;
    }
    transition: all 0.4s;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
        transition: all 0.4s;
    }
    &:active{
        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    }
`

const How = styled(Link)`
    grid-column: 3 / span 1;
    height: 200px;
    background-image: url(${HowImg});
    background-size: 130%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    position: relative;
    cursor: pointer;
    span{
        color : ${props => props.theme.mainColor};
        position: absolute;
        bottom : 15px;
        right: 15px;
        color:black;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
        font-weight: 600;
    }
    transition: all 0.4s;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
        transition: all 0.4s;
    }
    &:active{
        box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    }
`


function MainIntro() {
    return(
        <Wapper>
            <Title>
                CATCHUP 소개
            </Title>
            <Intro>
                <Link to="/about">
                    <AboutUs>
                        <span>About Service</span>
                    </AboutUs>
                </Link>
                    <How to="/how">
                        <span>How To Use</span>
                    </How>
            </Intro>
        </Wapper>
    )
}
export default MainIntro;