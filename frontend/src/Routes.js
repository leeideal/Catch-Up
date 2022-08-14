import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navber from "./components/navbar/Navber";
import Mainpage from "./routes/Mainpage";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { useRecoilValue } from "recoil";
import { isMenu } from './atoms';
import SideMenu from './components/navbar/SideMenu';
import Board from './routes/Board';
import Posting from "./routes/Posting";
import How from './routes/How';
import About from './routes/About';
import Login from './routes/Login';

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
                <Route path="/board" element={<Board />} />
                <Route path="/posting" element={<Posting />} />
                <Route path="/how" element={<How />} />
                <Route path="/about" element={<About />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
            {isMenuClick && <SideMenu />}
        </ThemeProvider>
    </Router>
)
}

export default Routers;