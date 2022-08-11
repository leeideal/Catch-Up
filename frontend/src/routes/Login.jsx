import styled from 'styled-components';
import { useState } from 'react';
import Log from '../components/login/Log';
import SignUp from '../components/login/SignUp';
import { motion } from 'framer-motion';

const ToCenter = styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
    margin-top: 7px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Background = styled.section`
    max-width: 700px;
    width : 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    margin-top: 60px;
    font-size: 32px;
    font-weight: 800;
    color: rgb(24,62,78);
`

const Container = styled.div`
    position: relative;
    margin-top: 50px;
    background-color: #F5F5F5;
    width: 100%;
    max-width: 400px;
    height: 360px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 8fr;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const IsLog = styled.div`
    cursor: pointer;
    grid-column: 1 / span 1;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    p{
        color: rgb(24,62,78);
        opacity: 0.4;
    }
`

const IsSignIn = styled.div`
    cursor: pointer;
    grid-column: 2 / span 1;
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    p{
        color: rgb(24,62,78);
        opacity: 0.4;
    }
`

const RealContainer = styled.div`
    position: absolute;
    width: 100%;
    max-width: 400px;
    height: 320px;
    background-color: white;
    border-radius : 0px 0px 10px 10px;
    top:40px;
`

const TrueLog = styled(motion.div)`
    position: absolute;
    max-width:200px;
    height: 40px;
    width:50%;
    font-size: 18px;
    top:0;
    left:0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    color: rgb(24,62,78);
`
const TrueSignIn = styled(motion.div)`
    position: absolute;
    max-width:200px;
    font-size: 18px;
    height: 40px;
    width:50%;
    top:0;
    right:0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 10px;
    color: rgb(24,62,78);
`

function Login() {
    const [isLog, setIsLog] = useState(true);

    const lClick = () => setIsLog(true);

    const siClick = () => setIsLog(false);

    return(
        <ToCenter>
            <Background>
                <Title>
                    CATCHUP
                </Title>
                <Container>
                    <IsLog onClick={lClick}>
                        <p>로그인</p>
                    </IsLog>
                    <IsSignIn onClick={siClick}>
                        <p>회원가입</p>
                    </IsSignIn>
                    {isLog ? 
                    <TrueLog layoutId='here'>
                        <p>로그인</p>
                    </TrueLog> : 
                    <TrueSignIn layoutId='here'>
                        <p>회원가입</p>
                    </TrueSignIn>
                    }
                    <RealContainer>
                        {isLog ? <Log /> : <SignUp />}
                    </RealContainer>
                </Container>
            </Background>
        </ToCenter>
    )
}

export default Login;