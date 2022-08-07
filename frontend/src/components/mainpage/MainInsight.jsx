import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useState } from 'react';

import { AnimatePresence, motion } from "framer-motion";

const Background = styled.section`
    height: 350px;
    width: 100%;
    background-color : ${props => props.theme.mainSecondBackColor};
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const Header = styled.div`
    margin-top: 40px;
    color : ${props => props.theme.mainColor};
    display: flex;
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 24px;
`

const MoreInfo = styled(FontAwesomeIcon)`
`


const InsightInfo = [
    {
        category : "#공대생",
        title : "정보통신공학과 3.03의 네카라쿠배 클라우드 직무 최종합격 후기",
        num : 25,
        id: 1
    },
    {
        category : "#마케팅",
        title : "글빨로 TvN 합격한 썰",
        num : 12,
        id : 2
    },
    {
        category : "#어학연수",
        title : "보스턴대학교 2달 어학연수 후기",
        num : 14,
        id : 3
    },
    {
        category : "#공대생",
        title : "정보통신공학과 3.03의 네카라쿠배 클라우드 직무 최종합격 후기",
        num : 25,
        id: 4
    },
    {
        category : "#마케팅",
        title : "글빨로 TvN 합격한 썰",
        num : 12,
        id : 5
    },
    {
        category : "#어학연수",
        title : "보스턴대학교 2달 어학연수 후기",
        num : 14,
        id : 6
    }
]

const Insight = styled.section`
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
    color : ${props => props.theme.mainColor};
    display: flex;
    justify-content: center;
`

const Box = styled(motion.div)`
    margin-top: 15px;
    width: 95%;
    height: 200px;
    border : 4px solid #7C7B79;
    background-color: white;
    border-radius: 18px;
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
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`;

const BigBox = styled(motion.div)`
    width: 80%;
    max-width: 450px;
    height: 80vh;
    background-color: white;
    border-radius: 20px;
`



function MainInsight(){
    const [clicked, setClicked] = useState(false);
    const [clickedInfo, setClickedInfo] = useState([]);

    const onBoxClick = (i) => {
        setClicked(prev => !prev);
        setClickedInfo(i)
    }

    const onOverlayClick = () =>{
        setClicked(prev => !prev);
        setClickedInfo([]);
    }

    return (
        <Background>
            <Header>
                <Title>CATCHUP 들여다보기</Title>
                <MoreInfo icon={faCirclePlus} size="2x"/>
            </Header>
            <Insight>
                <Swiper slidesPerView={2.2}
                        scrollbar={{ draggable: true }} 
                        className="mySwiper"
                        mousewheel={true}
                        keyboard={true}
                        grabCursor={true}
                >
                    {InsightInfo.map(i => (
                        <SwiperSlide key={i.id} >
                            <Box layoutId={i.id+""} onClick={() => onBoxClick(i)}>
                                <p>{i.category}</p>
                                <p>
                                    {i.title}
                                </p>
                                <p>
                                    연결된 대화 수 {i.num}
                                </p>
                            </Box>
                        </SwiperSlide>
                    ))}
                    
                    {/* 모달창 */}
                    <AnimatePresence>{clicked ? 
                        <Overlay 
                            onClick = {onOverlayClick}
                            initial={{ opacity : 0}}
                            animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        >
                            <BigBox layoutId={clickedInfo?.id+""} >
                                <div>{clickedInfo?.title}</div>
                            </BigBox>
                        </Overlay> : null}
                    </AnimatePresence>

                </Swiper>
            </Insight>
        </Background>
    )
}

export default MainInsight;