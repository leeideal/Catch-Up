import styled from 'styled-components';
import {useForm} from "react-hook-form";
import PostingHash from '../components/posting/PostingHash';

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
    margin-top:40px;
    margin-bottom: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 30px;
    width: ${props => props.theme.boardWidth};
    max-width:${props => props.theme.boardMaxWidth};
    text-align: left;
`

const Form = styled.form`
    display: flex;
    width: ${props => props.theme.boardWidth};
    max-width:${props => props.theme.boardMaxWidth};
    flex-direction: column;
    align-items: center;
`

const FormSection = styled.div`
    width: 100%;
    margin-bottom: 25px;
`

const SubTitle = styled.h3`
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    margin-bottom: 7px;
`

const TitleInput = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 1px solid #7C7B79;
    padding: 5px 4px;
`

const TextInput = styled.textarea`
    width: 100%;
    padding: 5px 4px;
    border-radius: 5px;
    border: none;
    resize: none;
    height: 25em;
    border: 1px solid #7C7B79;
`

const ChurInput  = styled.input`
    width: 60%;
    border-radius: 5px;
    border: 1px solid #7C7B79;
    padding: 5px 4px;
    margin-bottom: 20px;
`

const TagSection = styled.div`
    position: absolute;
    top : 610px;
    width: ${props => props.theme.boardWidth};
    max-width:${props => props.theme.boardMaxWidth};
`

const FormBtn = styled.button`
    width : 30%;
    margin-bottom: 80px;
    padding: 10px;
    border: none;
    background-color: #7C7B79;
    color:white;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`



function Posting(){
    const {register, handleSubmit } = useForm();

    const onValid = (data) => {
        console.log(data)
    }

    return(
        <ToCenter>
            <Background>
                <Title>글쓰기</Title>
                <Form onSubmit={handleSubmit(onValid)}>
                    <FormSection>
                        <SubTitle>제목</SubTitle>
                        <TitleInput {...register("title", {required:true})} placeholder="제목을 입력해주세요."></TitleInput>
                    </FormSection>
                    <FormSection>
                        <SubTitle>내용</SubTitle>
                        <TextInput {...register("content", {required:true})} placeholder="다른이들에게 전달하고 싶은 자신만의 이야기를 써보세요!"></TextInput>
                    </FormSection>
                    <FormSection style={{marginTop: "160px"}}>
                        <SubTitle>츄르 (1~50개)</SubTitle>
                        <ChurInput type ={'number'} {...register("chur", {required:true, min:"1", max:"50"})} placeholder="원하는 츄르 갯수를 입력해주세요!"></ChurInput>
                    </FormSection>
                    <FormBtn>전송</FormBtn>
                </Form>
                <TagSection>
                        <SubTitle>태그</SubTitle>
                        <PostingHash />
                </TagSection>
            </Background>
        </ToCenter>
    )
}

export default Posting;