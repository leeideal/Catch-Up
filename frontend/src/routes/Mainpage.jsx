import styled from 'styled-components';
import MainSlider from '../components/mainpage/MainSlider';
import MainInsight from '../components/mainpage/MainInsight';
import MainReview from '../components/mainpage/MainReview';

const ToCenter = styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
`

const Background = styled.section`
    background-color: ${props => props.theme.mainBackColor};
    max-width: 700px;
    width : 100%; 
    margin-top: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-family: 'Cinzel', serif;
    font-weight: 400;
    font-size: 1.8rem;
    margin-top: 5%;
    margin-bottom: 8%;
`

function Mainpage() {
return (
    <ToCenter>
        <Background>
            <Title>CATCHUP</Title>
            <MainSlider />
            <MainInsight />
            <MainReview />
        </Background>
    </ToCenter>

);
}

export default Mainpage;