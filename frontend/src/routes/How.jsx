import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ToCenter = styled.div`
width:100vw;
display: flex;
justify-content: center;
margin-top: 7px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Background = styled.section`
max-width: 700px;
width : 100%; 
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.h1`
    margin-top: 60px;
    font-size: 32px;
    font-weight: 800;
    color: rgb(24,62,78);
`
const SubTitle = styled.h4`
    text-align: left;
    color: rgb(24,62,78);
    font-weight: 600;
    opacity: 0.6;
    font-size: 14px;
    margin-top: 10px;
`

const Container = styled.section`
    width: 100%;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    margin-bottom: 500px;
`

const Grid = styled.div`
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
    display: grid;
    grid-template-columns: 9fr 1fr 9fr;
	grid-template-rows: repeat(18, 46px);
`

const One = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
    grid-row : 1 / span 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`
const Two = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
    grid-column: 3 / span 1;
    grid-row : 4 / span 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`
const Three = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
    grid-row : 10 / span 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`
const Four = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 10px;
    grid-column: 3 / span 1;
    grid-row : 13 / span 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`

const BoxTitle = styled.h4`
    width: 80%;
    margin-top: 20px;
    font-size: 22px;
    font-weight: 700;
    color: rgb(24,62,78);
`

const Body = styled.p`
    margin-top: 30px;
    line-height: 1.3;
    word-break: keep-all;
    width: 80%;
    color: rgb(24,62,78);
`
const Circle = styled(motion.div)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(240deg, #84fab0 0%, #8fd3f4 100%);
    z-index: -1;
`


function How(){
    const [num, setNum] = useState(1)

    return(
        <ToCenter>
            <Background>
                <Title>
                    CATCHUP 이용방법
                </Title>
                <SubTitle>설명박스를 클릭하며 공과 함께 확인하세요!</SubTitle>
                <Container>
                    <Grid>
                        <One onClick={()=>setNum(1)}>
                            <BoxTitle>
                                1.탐색하기
                            </BoxTitle>
                            <Body>
                            해시태그를 이용해 자신이 원하는 분야, 커리어에 관한 글을 찾을 수 있습니다.
                            </Body>
                            {num === 1 && <Circle layoutId = "circle" style={{marginTop :"40px"}}/>}
                        </One>
                        <Two onClick={()=>setNum(2)}>
                            <BoxTitle>
                            2.질문하기
                            </BoxTitle>
                            <Body>
                            글의 내용만으로 부족하다면 글쓴이에게 질문을 담은 채팅을 신청할 수 있습니다.
                            </Body>
                            {num === 2 && <Circle layoutId = "circle" style={{scale : 1.4, marginTop :"35px"}} />}
                        </Two>
                        <Three onClick={()=>setNum(3)}>
                            <BoxTitle>
                            3.채팅하기
                            </BoxTitle>
                            <Body>
                            1:1 채팅을 통해, 본인의 상황과 가장 맞는 살아있는 정보를 얻을 수 있습니다.
                            </Body>
                            {num === 3 && <Circle layoutId = "circle" style={{scale : 1.8, marginTop :"40px"}} />}
                        </Three>
                        <Four onClick={()=>setNum(4)}>
                            <BoxTitle>
                            4.후기작성하기
                            </BoxTitle>
                            <Body>
                            채팅이 끝난 후, 후기작성을 통해 정보를 원하는 다른 사람들에게 도움을 줄 수 있습니다.
                            </Body>
                            {num === 4 && <Circle layoutId = "circle" style={{scale : 2.2, marginTop :"30px"}} />}
                        </Four>
                    </Grid>
                </Container>
            </Background>
        </ToCenter>
    )   
}
export default How;


// 아직 작업 안끝남..