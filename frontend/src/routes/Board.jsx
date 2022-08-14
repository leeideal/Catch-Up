import styled from 'styled-components';
import BoardSearch from '../components/board/BoardSearch';
import BoardList from '../components/board/BoardList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const ToCenter = styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
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

const Title = styled.h1`
    margin-top:40px;
    margin-bottom: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 30px;
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
    text-align: left;
`

const SubTitle = styled.h4`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
    text-align: left;
    color : rgba(0,0,0,0.5);
    margin-bottom: 55px;
`

const BoardDivider = styled.div`
    max-width: 700px;
    width : 100%; 
    height: 3px;
    border-radius: 4px;
    background-color: black;
`

const Write = styled(FontAwesomeIcon)`
    position: fixed;
    font-size: 50px;
    bottom : 30px;
    right: 30px;
    cursor: pointer;
`

function Board() {
    return (
        <ToCenter>
            <Background>
                <Title>멘토 이야기 모아보기</Title>
                <SubTitle>당신이 원하는 멘토들의 글을 찾아보세요!</SubTitle>
                <BoardSearch />
                <BoardDivider />
                <BoardList />
                <Link to="/posting" ><Write icon={faSquarePen} /></Link>
            </Background>
        </ToCenter>
    )
}

export default Board;