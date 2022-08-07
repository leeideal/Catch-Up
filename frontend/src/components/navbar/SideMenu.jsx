import  styled  from 'styled-components';
import { motion  ,AnimatePresence} from "framer-motion";
import { useRecoilValue } from "recoil";
import { isMenu } from '../../atoms';

const Wapper = styled(motion.div)`
    background-color: aqua;
    width: 100%;
    height: 100vh; // 나중에 높이에 따라서 바꿔야 하는 설정!!
    position: absolute;
    top: 50px;
    z-index: 100;
`

const sideMenuVars = {
	//initial부분
	start : {
        opactiy: 0,
        translateX :1000,
    },
	// animate + transition부분
	end : {opactiy : 1, translateX:0, transition: {type : "tween"}},
}

function SideMenu(){
    const isMenuClick = useRecoilValue(isMenu);
    return(
        <>
            <AnimatePresence>
                {isMenuClick && (<Wapper variants={sideMenuVars} initial="start" animate="end" exit={{ scale: 0 }}>
                    사이드 메뉴!
                </Wapper>)}
                </AnimatePresence>
        </>
    );
}

export default SideMenu;


// 사라지는 효과 수정하기