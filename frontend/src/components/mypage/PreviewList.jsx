import styled from 'styled-components';

const ToCenter = styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
    color: rgb(24,62,78);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Background = styled.section`
    background-color: ${props => props.theme.mainBackColor};
    max-width: 700px;
    width : 100%; 
    margin-top: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BigTitle = styled.h1`
    margin-top:40px;
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 30px;
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
    text-align: left;
`
const List = styled.section`
    max-width: 700px;
    width : 100%; 
    margin-top: 50px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-top: 60px;
    height: 80vh;
    background-color: rgba(104,220,196);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    font-weight: 800;
`

function PreviewList () {
    return(
        <ToCenter>
            <Background>
                <BigTitle>나에게 도착한 후기들</BigTitle>
                <List>
                    아직 도착한 후기가 없어요!
                </List>
            </Background>
        </ToCenter>
    );
}
export default PreviewList;