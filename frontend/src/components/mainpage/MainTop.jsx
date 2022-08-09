import styled from 'styled-components';

const Wapper = styled.section`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const Title = styled.h2`
    margin-top: 50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 24px;
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
    text-align: left;
`

function MainTop(){
return (
    <Wapper>
        <Title>
            CATCHUP 인기 TOP 멘토
        </Title>
        
    </Wapper>
)
}

export default MainTop;