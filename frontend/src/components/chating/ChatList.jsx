import styled from "styled-components";
import { useState } from 'react';
import { useQuery } from "react-query";
import API from '../../axios';

const Wapper = styled.section`
    background-color: white;
    width: ${props => props.theme.mainWidth};
    max-width:580px;
    min-height: 80vh;
    margin-top: 50px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-top: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Warnning = styled.h1`
    font-size: 30px;
    font-family: 800;

`
const List = styled.section`
    
`


function ChatList () {
    // const cathAixos = async () => {
    //     try{
    //         const {list} = await API.get("");
    //         return list;
    //     } catch(error){
    //         console.log(error)
    //     }
    // }

    // const {isLoading , data} = useQuery("chatList", cathAixos )
    
    return(
        <Wapper>
            <List>
                
            </List>
        </Wapper>
    )
}

export default ChatList;


// {isLoading ? <Warnning>로딩중입니다</Warnning> : data === [] ? <Warnning>채팅을 시작하세요!</Warnning> :
//             <List>
                
//             </List>}