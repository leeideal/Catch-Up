import styled from 'styled-components';
import MainSlider from '../components/mainpage/MainSlider';

const ToCenter = styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
`

const Background = styled.section`
    background-color: ${props => props.theme.mainBackColor};
    max-width: 500px;
    width : 100%; 
    margin-top: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-family: 'Cinzel', serif;
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 5%;
    margin-bottom: 8%;
`

function Mainpage() {
return (
    <ToCenter>
        <Background>
            <Title>CATCHUP</Title>
            <MainSlider />
        </Background>
    </ToCenter>

);
}

export default Mainpage;