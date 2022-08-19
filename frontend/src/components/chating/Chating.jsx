import styled from "styled-components";
import {useForm} from "react-hook-form"

const Container = styled.section`
    color: rgb(24, 62, 78);
    display: flex;
    flex-direction: column;
    width: 90%;
    
    padding-top: 100px;
`

const ChatForm = styled.form`
    position: relative;
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
    
`

function Chating() {
    const {register, handleSubmit, setValue} = useForm();
    const onValid = (data) => {
      console.log(data);
      setValue("toDo", "")
    }

    return(
        <Container>
            <ChatList></ChatList>
            <ChatForm onSubmit={handleSubmit(onValid)}>
                <Chatinput {...register("toDo", {required : true})} />
                <ChatBtn>전송</ChatBtn>
            </ChatForm>
        </Container>
    )
}

export default Chating;