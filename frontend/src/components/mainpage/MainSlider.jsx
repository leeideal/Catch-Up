import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Wapper = styled(motion.section)`
    width: 100%;
    height:190px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 70px;
`

const Slider = styled.section`
    width: ${props => props.theme.mainWidth};
    max-width:450px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

const Box = styled(motion.div)`
  // 슬라이더 내부 디자인 수정해야..
  width: 100%;
  height: 190px;
  background:linear-gradient(200deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 28px;
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
    background-color: ${props => props.theme.mainSecondBackColor};
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
        x: back ? -250 : 250,
        opacity: 0,
        scale: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 } 
    },
    exit: (back) => ({ x: back ? 250 : -250, opacity: 0, scale: 0, transition: { duration: 0.4 } })
};

const sliderArray = [
    {
        title : "이벤트1",
        body : "이벤트1내용",
        footer : "이벤트1 아래 내용",
        id : 1
    },
    {
        title : "이벤트2",
        body : "이벤트2내용",
        footer : "이벤트2 아래 내용",
        id : 2
    },
    {
        title : "이벤트3",
        body : "이벤트3내용",
        footer : "이벤트3 아래 내용",
        id : 3
    },
    {
        title : "이벤트4",
        body : "이벤트4내용",
        footer : "이벤트4 아래 내용",
        id : 4
    }
]


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
                    <p>{prev.title}</p>
                    <p>{prev.body}</p>
                    <p>{prev.footer}</p>
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