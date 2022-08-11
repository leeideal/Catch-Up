import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Wapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 50px;
`
const FormSection = styled.div`
    position: relative;
    margin-bottom: 15px;
`

const Input = styled.input`
    border : none;
    font-size: 18px;
    background-color: #F5F5F5;
    padding: 8px 0px 8px 38px;
    border-radius: 10px;
    width: 260px;
`

const Icon = styled(FontAwesomeIcon)`
    position: absolute;
    left : 10px;
    top:6px;
    font-size: 22px;
`

const SubBtn = styled.button`
    width : 260px;
    height: 45px;
    border-radius: 10px;
    border: none;
    margin-top: 8px;
    cursor: pointer;
    background-color: rgba(104,220,196);
    color: white;
    font-size: 24px;
    font-weight: 600;
`

function SignUp() {
    const {register, handleSubmit} = useForm();

    const onValid = (data) => {
        console.log(data);
    }

    return(
        <Wapper>
            <Form onSubmit={handleSubmit(onValid)}>
                <FormSection>
                    <Icon icon={faIdBadge} />
                    <Input {...register("id" , {required:true})} placeholder="아이디"></Input>
                </FormSection>
                <FormSection>
                    <Icon icon={faLock} />
                    <Input {...register("pw" , {required:true})} placeholder="비밀번호" type="password"></Input>
                </FormSection>
                <FormSection>
                    <Icon icon={faEnvelope} />
                    <Input {...register("Email" , {required:true,
                    pattern : {
                        value:/^[A-Za-z0-9._%+-]+@+[A-Za-z]+.+[A-Za-z]$/
                    }})} placeholder="이메일"></Input>
                </FormSection>
                <SubBtn>
                    <p>로그인</p>
                </SubBtn>
            </Form>
        </Wapper>
    );
}

export default SignUp;