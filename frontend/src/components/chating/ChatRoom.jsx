import styled from "styled-components";
import Chating from "./Chating";
import { AnimatePresence , motion} from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ByeBox from './ByeBox';
import { useState } from 'react';

const ToCenter = styled.div`
    width:100vw;
    display: flex;
    justify-content: center;
`

const Background = styled.section`
    background-color: #68DCC4;
    max-width: 700px;
    width : 100%; 
    margin-top: 2.22px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title= styled.div`
    color: rgb(24,62,78);
    margin-top:60px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 22px;
    width: ${props => props.theme.mainWidth};
    max-width:580px;
    text-align: left;
    line-height: 1.3;
    p{
        font-weight: 500;
        font-size: 18px;
    }
`

const Wapper = styled.section`
    z-index: 2;
    background-color: white;
    width: 100%;
    margin-top: 50px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const UnderTitle =styled.div`
    width: ${props => props.theme.mainWidth};
    max-width:580px;
    position: relative;
    margin-top: 40px;
`

const EndBtn = styled.button`
    cursor: pointer;
    z-index: 4;
    position: absolute;
    top : 10px;
    font-size: 20px;
    font-weight: 600;
    padding: 20px 0px;
    width: 100%;
    border: none;
    background-color: #B3EDE1;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition: all 0.15s;
    &:active{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        transition: all 0.15s;
    }
`

const BigBox = styled(motion.div)`
    width: 90%;
    max-width: 450px;
    height: 90vh;
    background-color: white;
    border-radius: 20px;
    position: relative;
`

const XMark = styled(FontAwesomeIcon)`
    font-size: 32px;
    position: absolute;
    top:15px;
    right: 15px;
    cursor: pointer;
`
const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: fixed;   // 다른것들보다 가장 위에 있게 함
    top:0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.7);
`;

function ChatRoom () {
    const [clicked, setClicked] = useState(false)

    const endChat = () => {
        setClicked(true)
    }

    const onOverlayClick = () =>{
        setClicked(false);
    }

    return (
        <ToCenter>
            <Background>
                <Title>
                    <h1>기계공학과 3.1의 LG CNS 스마트팩모리 마곡본사 합격후기 </h1>
                    <p>(으)로부터 시작된 채팅입니다</p>
                </Title>
                <UnderTitle>
                    <EndBtn onClick={endChat}>채팅종료</EndBtn>
                    <Wapper>
                        <Chating />
                    </Wapper>
                </UnderTitle>
            </Background>

            <AnimatePresence>{clicked ? 
                        <Overlay 
                            initial={{ opacity : 0}}
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                        >
                            <BigBox>
                                <ByeBox/>
                                <XMark onClick = {onOverlayClick} icon={faCircleXmark} />
                            </BigBox>
                        </Overlay> : null}
            </AnimatePresence>
        </ToCenter>
    );
}

export default ChatRoom;