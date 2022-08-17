import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { LogAPI } from '../../axios';
import { useEffect, useState } from 'react';

const Container = styled.form`
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const Box = styled.div`
    width: 100%;
    background-color : white;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(24,62,78);
    border-radius: 25px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
const FixBtn = styled.button`
    cursor: pointer;
    width: 75px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: ${props => props.theme.mainSecondBackColor};
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
const BtnCon = styled.div`
    display: flex;
`
const ProfilePoto= styled.div`
    display:flex ;
    flex-direction: column ;
    align-items:center ;
    margin-top: 20px;
    margin-bottom: 30px;
`
const Poto = styled.input`
    
`

const FixItem = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`
const FixTitle = styled.span`
    font-size: 20px;
    font-weight: 600;
`
const FixInput = styled.input`
    border-radius : 10px;
    margin-top: 10px;
    padding: 5px 12px;
    border: none;
    background-color: #F5F5F5;
`
const TextInput = styled.textarea`
    padding: 12px 12px;
    border-radius: 10px;
    border: none;
    margin-top: 10px;
    background-color: #F5F5F5;
    resize: none;
    height: 7em;
`


function FixProfileBox () {
    const [info, setInfo] = useState()
    const navigate = useNavigate()
    const {register,  handleSubmit} = useForm();
    const getProfile = async() => {
        try{
            const data = await LogAPI.get("/users/myprofile/")
            setInfo(data.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getProfile()
    },[])

    const onValid = async (data) => {
        
    } 
    return(
        <Container onSubmit={handleSubmit(onValid)}>
            <Box>
                {/* API 연동이후 작업하기!! */}
                <ProfilePoto>
                    <Poto {...register("img")} type="file"/>
                </ProfilePoto>
                <FixItem>
                    <FixTitle>닉네임</FixTitle>
                    <FixInput value={info?.nickname ? info?.nickname : undefined} {...register("nickname" , {required : true,})} placeholder="닉네임을 입력하세요!" />
                </FixItem>
                <FixItem>
                    <FixTitle>한줄소개</FixTitle>
                    <TextInput value={info?.introduction ? info?.introduction : undefined} 
                    {...register("intro" , {required : true,})} placeholder="자신을 소개해주세요!"/>
                </FixItem>
            </Box>
            <BtnCon>
                <FixBtn as="div" style={{marginRight : "20px"}} onClick={()=>navigate("/mypage")}>취소</FixBtn>
                <FixBtn>수정</FixBtn>
            </BtnCon>
        </Container>
    )
}
export default FixProfileBox;