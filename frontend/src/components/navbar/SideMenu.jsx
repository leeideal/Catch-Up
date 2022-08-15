import  styled  from 'styled-components';
import { motion  ,AnimatePresence} from "framer-motion";
import { useRecoilState } from "recoil";
import { isMenu } from '../../atoms';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width:100%;
    display: flex;
    justify-content: center;

`

const Wapper = styled(motion.div)`
    background: white;
    max-width: 700px;
    width : 100%; 
    height: 2600px; // 나중에 높이에 따라서 바꿔야 하는 설정!!
    position: absolute;
    top: 53px;
    z-index: 100;
    display: flex;
    justify-content: center;
`

const sideMenuVars = {
	//initial부분
	start : {
        opactiy: 0,
        translateX :500,
    },
	// animate + transition부분
	end : {opactiy : 1, translateX:0, transition: {type : "tween"}},
}

const MList = styled.section`
    margin-top: 50px;
    width : 80%; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    color:rgb(24,62,78);
`

const Item = styled.div`
    font-size: 24px;
    font-weight: 800;
    margin-bottom : 30px;
    opacity : 0.8;
`

const Log = styled.div`
    font-size: 32px;
    font-weight: 800;
    margin-bottom : 60px;
    opacity : 1;
`

function SideMenu(){
    const [isMenuClick ,setisMenuClick] = useRecoilState(isMenu);
    const onClick = () => {
        setisMenuClick(prev => !prev);
    }

    return(
        <Container>
            <AnimatePresence>
                {isMenuClick && (<Wapper variants={sideMenuVars} initial="start" animate="end" exit={{ scale: 0 }}>
                    <MList>
                        <Link to="/login">
                            <Log onClick={onClick}>
                                로그인
                            </Log>
                        </Link>
                        <Link to="/about">
                            <Item onClick={onClick}>
                                CATUP 소개
                            </Item>
                        </Link>
                        <Link to="/how">
                            <Item onClick={onClick}>
                                CATUP 사용방법
                            </Item>
                        </Link>
                        <Link to="/board">
                            <Item onClick={onClick}>
                                멘토들의 이야기
                            </Item>
                        </Link>
                        <Link to="/chat">
                            <Item onClick={onClick}>
                                채팅하기
                            </Item>
                        </Link>
                        <Link to="/mypage">
                            <Item onClick={onClick}>
                                마이페이지
                            </Item>
                        </Link>
                    </MList>
                </Wapper>)}
                </AnimatePresence>
        </Container>
    );
}

export default SideMenu;


// 사라지는 효과 수정하기