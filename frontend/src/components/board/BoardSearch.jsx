import styled from 'styled-components';
import {useForm} from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Wapper = styled.section`
    width: ${props => props.theme.boardWidth};
    max-width:${props => props.theme.boardMaxWidth};
`

const Search = styled.section`
    width:100%;
    margin-bottom: 40px;
`

const Form = styled.form`
    width:100%;
    position: relative;
`

const Input = styled.input`
    width:100%;
    height: 40px;
    font-size: 20px;
    padding-left: 40px;
    border : none;
    border-radius: 10px;
`

const InputIcon = styled(FontAwesomeIcon)`
    position: absolute;
    bottom : 6px;
    left: 6px;
    font-size: 27px;
`



function BoardSearch() {
    const {register, handleSubmit, setValue} = useForm();
    const onValid = (data) => {
        console.log(data);
        setValue("search" , "")
    }

    return (
        <Wapper>
            <Search>
                <Form onSubmit={handleSubmit(onValid)}>
                    <InputIcon icon={faMagnifyingGlass}/>
                    <Input {...register("search", {required : true})}
                            placeholder = "제목, 내용, 해시태그 검색" >
                            </Input>
                </Form>
            </Search>
        </Wapper>
    );
}

export default BoardSearch;