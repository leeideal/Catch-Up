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
import Mypage from './routes/Mypage';
import Chat from './routes/Chat';
import FixProfile from './components/mypage/FixProfile';
import LikeList from './components/mypage/LikeList';
import PreviewList from './components/mypage/PreviewList';
import ChatRoom from "./components/chating/ChatRoom";
import MypageChur from './components/mypage/MypageChur';

function Routers(){
// 메뉴바 클린 check State
const isMenuClick = useRecoilValue(isMenu);

return(
    <Router>
        <ThemeProvider theme={theme}>
            <Navber />
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/chat/room/:id/" element={<ChatRoom />} />
                <Route path="/board" element={<Board />} />
                <Route path="/posting" element={<Posting />} />
                <Route path="/how" element={<How />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/mypage/fix" element={<FixProfile />} />
                <Route path="/mypage/like" element={<LikeList />} />
                <Route path="/mypage/preview" element={<PreviewList />} />
                <Route path="/mypage/chur" element={<MypageChur />} />
            </Routes>
            {isMenuClick && <SideMenu />}
        </ThemeProvider>
    </Router>
)
}

export default Routers;