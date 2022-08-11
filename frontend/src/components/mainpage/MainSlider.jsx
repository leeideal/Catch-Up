import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Wapper = styled(motion.section)`
    width: 100%;
    height:230px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 70px;

`

const Slider = styled.section`
    width: 95%;
    max-width:580px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Box = styled(motion.div)`
  // 슬라이더 내부 디자인 수정해야..
  color:rgb(24,62,78);
  width: 100%;
  height: 260px;
  background: linear-gradient(255.63deg, #96FBC4 0.99%, #66E4EC 100%);
  border-radius: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const ToRight = styled(FontAwesomeIcon)`
    color : ${props => props.theme.mainColor};
    margin-left: 15px;
    cursor: pointer;
`

const ToLeft = styled(FontAwesomeIcon)`
    color : ${props => props.theme.mainColor};
    margin-right: 15px;
    cursor: pointer;
`


const SliderPointer = styled.section`
    display: flex;
`

const Circle = styled(motion.div)`
    width: 9px;
    height: 9px;
    border-radius: 9px;
    background-color: ${props => props.theme.mainColor};
    margin: 0 3px;
`

const CircleHere = styled(motion.div)`
    width: 25px;
    height: 9px;
    border-radius: 9px;
    background-color:  ${props => props.theme.mainColor};
    margin: 0 3px;
`


const slider = {
    entry: (back) => ({
        x: back ? -280 : 280,
        opacity: 0,
        scale: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 } 
    },
    exit: (back) => ({ x: back ? 280 : -280, opacity: 0, scale: 0, transition: { duration: 0.4 } })
};

const sliderArray = [
    {
        title : "SPECIAL",
        body : "CATCHUP 활용백서",
        footer : "실사용자들의 후기를 통해서 CATCHUP을 100% 활용하세요!",
        id : 1
    },
    {
        title : "EVENT",
        body : "신규가입 이벤트",
        footer : "신규가입시 츄르 100개 증정! 1:1 대화 신청의 기회를 놓치지 마세요!",
        id : 2
    },
    {
        title : "HOT",
        body : "이달의 인기글",
        footer : "정보통신공학과 3.03의 NAVER 클라우드 보안 직무 최종합격 후기",
        id : 3
    },
    {
        title : "HOT",
        body : "이달의 인기글",
        footer : "이금융공기업 A부터 Z까지! -  한국은행편",
        id : 4
    }
]

const BoxCategory = styled.div`
    margin-top: 45px;
    width: 70%;
    p {
        border: 2px solid rgb(24,62,78);
        width:76px;
        text-align: center;
    }
`

const BoxTitle = styled.div`
    width: 70%;
    font-size: 30px;
    font-weight: 700;
    margin-top: 15px;
`

const BoxBody = styled.div`
    margin-top: 30px;
    width: 70%;
    font-size: 20px;
    font-weight: 500;
`

function MainSlider(){
const [visible, setVisible] = useState(1);
const [back, setBack] = useState(false);
const nextPlease = () => {
    setBack(false);
    setVisible(prev => prev === 4 ? 1 : prev+1);
}
const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 4 : prev-1));
}

return(
    <Wapper>
        <Slider>
            <ToLeft icon={faCaretLeft} onClick={prevPlease} size="3x" />
            <AnimatePresence exitBeforeEnter custom={back}>
                {sliderArray.map(prev => prev.id === visible && (
                    <Box 
                    custom={back}
                    variants={slider}
                    initial="entry"
                    animate="center"
                    exit="exit"
                    key={prev.id}
                >
                    <BoxCategory>
                        <p>{prev.title}</p>
                    </BoxCategory>
                    <BoxTitle>{prev.body}</BoxTitle>
                    <BoxBody>{prev.footer}</BoxBody>
                </Box>
                ))}
            </AnimatePresence>
            <ToRight icon={faCaretRight} onClick={nextPlease} size="3x" />
        </Slider>
        <SliderPointer>
            {visible === 1 ? <CircleHere layoutId="circle" /> : <Circle />}
            {visible === 2 ? <CircleHere layoutId="circle" /> : <Circle />}
            {visible === 3 ? <CircleHere layoutId="circle" /> : <Circle />}
            {visible === 4 ? <CircleHere layoutId="circle" /> : <Circle />}
        </SliderPointer>
    </Wapper>
);
}

export default MainSlider;