import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navber from "./components/navbar/Navber";
import Mainpage from "./routes/Mainpage";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { useRecoilValue } from "recoil";
import { isMenu } from './atoms';
import SideMenu from './components/navbar/SideMenu';

function Routers(){
// 메뉴바 클린 check State
const isMenuClick = useRecoilValue(isMenu);
console.log(isMenuClick);

return(
    <Router>
        <ThemeProvider theme={theme}>
            <Navber />
            <Routes>
                <Route path="/" element={<Mainpage />} />
            </Routes>
            {isMenuClick && <SideMenu />}
        </ThemeProvider>
    </Router>
)
}

export default Routers;