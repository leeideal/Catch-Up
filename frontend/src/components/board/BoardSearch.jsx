import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Wapper = styled.section`
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
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
    height: 45px;
    font-size: 22px;
    padding-left: 42px;
    border : none;
    border-radius: 15px;
    background-color: #F5F5F5;
`

const InputIcon = styled(FontAwesomeIcon)`
    position: absolute;
    bottom : 9px;
    left: 8px;
    font-size: 27px;
`



function BoardSearch() {
    const [value, setValue] = useState("")
    const navigator = useNavigate();
    const handleChange = (e) => {
        setValue(e.target.value);
        navigator(`/board?q=${e.target.value}`)
    }
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const searchTerm = query.get("q");
    console.log(searchTerm)
    return (
        <Wapper>
            <Search>
                <Form>
                    <InputIcon icon={faMagnifyingGlass}/>
                    <Input 
                        value={value} onChange={handleChange} 
                        placeholder = "제목, 내용, 해시태그 검색" >
                    </Input>
                </Form>
            </Search>
        </Wapper>
    );
}

export default BoardSearch;