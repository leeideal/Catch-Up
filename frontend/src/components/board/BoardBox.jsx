import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isUser } from '../../atoms';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color : rgb(24,62,78);
    overflow: scroll;
`

const Header = styled.section`
    margin-top: 20px;
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: flex-end;
`
const Title = styled.h1`
    margin-top: 25px;
    width: 90%;
    font-size: 24px;
    font-weight: 800;
    word-break: keep-all;
    line-height: 1.2;
`
const Tags = styled.section`
    display: flex;
    flex-wrap: wrap;
    line-height: 1.2;
    width: 90%;
    margin-top: 10px;
    p{
        font-size: 12px;
        font-weight: 600;
        opacity: 0.6;
        margin-right: 8px;
    }
`
const Body = styled.section`
    margin-top: 20px;
    width: 100%;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    padding: 30px 0px;

`
const Like = styled.section`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    span{
        margin-top: 10px;
        text-align: center;
    }
`
const Sign = styled.section`
    margin-bottom: 40px;
    margin-top: 30px;
    p{
        margin-top: 5px;
        font-size: 13px;
        font-weight: 600;
        opacity: 0.6;
        text-align: center;
    }
`
const FirstInfo = styled.div`
    display: flex;
    align-items: center;
`

const Img = styled.img`
    width : 50px;
    height : 50px;
    border-radius: 50%;
    margin-right: 8px;
`
const FirstInfoItem = styled.div`
    
`

const Name = styled.p`
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 3px;
`
const Rate =styled.div`
    position: relative;
    span{
        position: absolute;
        top : 2px;
        left : 20px;
    }
`
const Icon = styled(FontAwesomeIcon)`
    font-size: 45px;
    cursor: pointer;
`

const SecondInfo = styled.div`
    font-size: 12px;
    opacity: 0.7;
`

const BodyItem = styled.div`
    width: 90%;
    word-break: break-all;
    line-height: 1.3;
`

const Btn = styled.button`
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;
    padding: 10px 25px;
    font-size: 22px;
    font-weight: 600;
    color : rgb(24,62,78);
`

function BoardBox({props}) {
    const navigate = useNavigate()
    const checkUser = useRecoilValue(isUser);

    const onClick = () => {
        if(checkUser){
            if (window.confirm(`이 채팅에 필요한 츄르의 개수는 ${props.post.coin}개 입니다! \n(채팅 내에서 전화번호, 이메일등의 개인정보 교환은 금지됩니다.)`)){
                navigate("/chat")
            }
        }else{
            alert("로그인 이후 사용가능하십니다!");
            navigate("/login")
        }
    }
    
    return(
        <Container>
            <Header>
                <FirstInfo>
                    <Img src={props.writer.image} />
                    <FirstInfoItem>
                        <Name>{props.writer.nickname}</Name>
                        <Rate><FontAwesomeIcon icon={faStar} /> <span>{props.rate}</span></Rate>
                    </FirstInfoItem>
                </FirstInfo>
                <SecondInfo>
                    {props.post.created_at.substr(0,10)}
                </SecondInfo>
            </Header>
            <Title>
                {props.post.title}
            </Title>
            <Tags>
                {props.tag.map(i => <p>{i}</p>)}
            </Tags>
            <Body>
                <BodyItem>
                {props.post.content}
                </BodyItem>
            </Body>
            <Like>
                <Icon icon={faHeart} />
                <span>{props.post.like_users.length}</span>
            </Like>
            <Sign>
                <Btn onClick={onClick}>채팅신청</Btn>
                <p>츄르 {props.post.coin}개</p>
            </Sign>
        </Container>
    )
}

export default BoardBox;

// 모든 페이지 모달창!