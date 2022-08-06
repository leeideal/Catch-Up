import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { isMenu } from '../atoms';

const Wapper = styled.nav`
    width: 100vw;
    background-color: ${prop => prop.theme.navBackColor};
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 2px 0px;
`
const GostBox = styled.div`
    width: 15px;
    height: 15px;
    margin-left: 30px;
`

const Logo = styled.svg`
    path:first-child{
        stroke: black;
        stroke-width: 2;
    }
    path:last-child{
        fill:#3D2618;
    }

`

const Menubar = styled(FontAwesomeIcon)`
    margin-right: 30px;
`

function Navber(){
// navbar에서 메뉴버튼 눌렀을 때 나오는 사이드메뉴
const [isMenuClicked, setIsMenu] = useRecoilState(isMenu);

return(
    <>
        <Wapper>
            <GostBox />
            <Logo width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 51C39.8071 51 51 39.8071 51 26C51 12.1929 39.8071 1 26 1C12.1929 1 1 12.1929 1 26C1 39.8071 12.1929 51 26 51Z"/>
                <path d="M35.9629 21.0392C35.6968 20.2702 35.1917 19.6024 34.5187 19.1299C33.8457 18.6573 33.0386 18.4038 32.211 18.405H29.0331V9.17529L27.6975 9.36253C24.6679 9.78724 22.3079 11.2939 20.684 13.8407C19.5131 15.6766 18.9688 17.7017 18.7162 19.2164C16.9723 20.5332 15.4552 22.3462 14.2014 24.6132C13.1448 26.5235 12.2701 28.7625 11.6015 31.268C10.4719 35.5015 10.319 39.0131 10.3131 39.1605L10.3125 43.2245H12.6523V39.2318C12.6815 38.641 13.4183 25.7146 20.4794 20.7925L20.8933 20.5039L20.9613 20.0101C21.3134 17.4534 22.5302 13.2305 26.6929 11.9325V20.7015H32.211C32.5494 20.7005 32.8795 20.8036 33.155 20.9964C33.4305 21.1892 33.6374 21.4619 33.7467 21.7761C34.6796 24.4785 36.2826 27.8602 38.7808 29.4494L38.0295 32.2144C37.768 33.2005 37.1731 34.0702 36.3423 34.6813C35.5114 35.2923 34.4938 35.6085 33.456 35.5781C31.3596 35.5164 29.1776 35.7848 26.9703 36.3755L26.1079 36.6062V43.2245H28.448V38.378C30.0651 38.0031 31.7246 37.8335 33.3857 37.8735C34.95 37.9158 36.4831 37.4384 37.7363 36.5186C38.9896 35.5988 39.8895 34.2907 40.2903 32.8061L41.54 28.2073L40.6093 27.8159C38.8689 27.0838 37.2188 24.6772 35.9629 21.0392Z"/>
            </Logo>
            <Menubar onClick={()=> setIsMenu(prev => !prev)} icon={isMenuClicked ? faX : faBars} />
        </Wapper>
    </>
)
}

export default Navber;