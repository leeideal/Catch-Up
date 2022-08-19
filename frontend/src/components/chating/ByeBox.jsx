import styled from 'styled-components';

const Wapper = styled.div`
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    
`

const Title = styled.h1`
    font-size: 28px;
    font-weight: 700;
`

function ByeBox() {
    return(
        <Wapper>
            <Title>
                후기쓰기
            </Title>
        </Wapper>
    );
}

export default ByeBox;