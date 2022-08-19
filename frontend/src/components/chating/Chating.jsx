import styled from "styled-components";
import {useForm} from "react-hook-form"
import { useRecoilValue } from 'recoil';
import { isChatId } from '../../atoms';
import { LogAPI } from "../../axios";
import { useEffect, useState } from 'react';

const Container = styled.section`
    color: rgb(24, 62, 78);
    display: flex;
    flex-direction: column;
    width: 90%;
    padding-top: 100px;
`

const ChatForm = styled.form`
    position: relative;
    margin-bottom: 10px;
`
const Chatinput = styled.textarea`
    width: 100%;
    border-radius: 10px;
    border: none;
    height: 100px;
    background-color: #F5F5F5;
    resize: none;
    padding: 8px 80px 8px 7px;
    font-size: 16px;
`
const ChatBtn = styled.button`
    position: absolute;
    top:20px;
    right:10px;
    border: none;
    background-color: #68DCC4;
    height: 60px;
    width: 60px;
    cursor: pointer;
    border-radius: 13px;
    border-bottom-right-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition: all 0.1s;
    &:active{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        transition: all 0.1s;
    }

`

const ChatList = styled.section`
    overflow: scroll;
    height: 60vh;
    width: 100%;
`

function Chating() {
    const isAtom = useRecoilValue(isChatId)
    const {register, handleSubmit, setValue} = useForm();
    const [info, setInfo] = useState([])
    

    const reGetChat = async() => {
        try{
            const chatData = await LogAPI.get(`chat/room/${localStorage.getItem("chat_key")}/`)
            setInfo(chatData.data)
        }catch(error){
            console.log(error)
        }
    }

    const onValid = async(data) => {
        const chat = {
            "content" : data.toDo
        }
        localStorage.setItem("insure_chat_key", localStorage.getItem("chat_key"))
        await LogAPI.post(`chat/room/${localStorage.getItem("chat_key")}/`, chat)
        reGetChat()
        setValue("toDo", "")
    }
    const getChat = async() => {
        var key = ""
        if ( localStorage.getItem("chat_key")){
            key = localStorage.getItem("chat_key")
        } else {
            key = localStorage.getItem("insure_chat_key")
        }
        try{
            const chatData = await LogAPI.get(`chat/room/${key}/`)
            setInfo(chatData.data)
        }catch(error){
            console.log(error)
        }
    }
    console.log(localStorage.getItem("chat_key"))
    useEffect(()=>{
        if(isAtom === ""){
            localStorage.setItem("chat_key", localStorage.getItem("insure_chat_key"))
        }else{
            localStorage.setItem("chat_key", isAtom)
            localStorage.setItem("insure_chat_key", localStorage.getItem("chat_key"))
        }
        getChat()
    },[isAtom])
    console.log(isAtom)
    console.log(info.chat_list)

    return(
        <Container>
            <ChatList>
                {info.chat_list && info.chat_list.map(i => (
                    <div key={i.chat.id} style={{fontSize:"100px"}}>{i.chat.content}</div>
                ))}
            </ChatList>
            <ChatForm onSubmit={handleSubmit(onValid)}>
                <Chatinput {...register("toDo", {required : true})} />
                <ChatBtn>전송</ChatBtn>
            </ChatForm>
        </Container>
    )
}

export default Chating;