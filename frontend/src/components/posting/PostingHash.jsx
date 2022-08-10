import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import { useState } from 'react';
import { useSetRecoilState } from "recoil";
import { isTag } from "../../atoms";


const Hash = styled.section`
    position: relative;
    width: ${props => props.theme.boardWidth};
    max-width:${props => props.theme.boardMaxWidth};
`

const HashTagIcon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 5px;
    left : 5px;
`

const TagInput = styled.input`
    width: 50%;
    border-radius: 5px;
    border: 1px solid #7C7B79;
    padding: 5px 4px 5px 20px;
`

const HashBtn = styled.button`
    margin-left: 10px;
    border-radius: 5px;
    height: 1.8em;
    border: none;
    background-color: #7C7B79;
    color:white;
`

const TagForm = styled.form`
`

const TagArray = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
`

const Tag = styled.p`
    margin-top: 10px;
    display : flex ;
    align-items: flex-start;
    font-size: 14px;
    margin-right: 10px;
    border-radius: 5px;
    padding: 5px 8px;
    border: none;
    background-color: #7C7B79;
    color:white;
    span{
        margin-right: 6px;
    }

`
const XMark = styled(FontAwesomeIcon)`
    cursor: pointer;
`

function PostingHash () {
    const [tags, setTags] = useState([]);
    const {register, handleSubmit,setValue} = useForm();
    const setAtom = useSetRecoilState(isTag)

    const onValid = (data) => {
        setTags(prev => {
            return [...prev, `#${data.tag}`]
        })
        setValue("tag", "");
        setAtom(prev => {
            return [...prev, `#${data.tag}`]
        })
    }

    const deleteTag = (event) => {
        setTags(prev => {
            return prev.filter(i => i !== event.target.parentElement.firstChild.textContent)
        })
    }

    return(
        <Hash>
            <HashTagIcon icon={faHashtag}/>
            <TagForm onSubmit={handleSubmit(onValid)}>
                <TagInput {...register("tag", {required:true, maxLength:10})}  placeholder="글에 태그를 달아주세요!" ></TagInput>
                <HashBtn >태그추가</HashBtn>
            </TagForm>
            <TagArray>
                {tags.map(prev => <Tag key={prev}>
                    <span>{prev}</span>
                    <XMark onClick={deleteTag} icon={faXmark}/>
                </Tag>)}
            </TagArray>
        </Hash>
    )
}

export default PostingHash;