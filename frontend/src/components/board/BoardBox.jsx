import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

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

    const onClick = () => {
        if (window.confirm("이 채팅에 필요한 츄르의 개수는 10개 입니다! \n(채팅 내에서 전화번호, 이메일등의 개인정보 교환은 금지됩니다.)")){
            navigate("/chat")
        }
    }
    
    return(
        <Container>
            <Header>
                <FirstInfo>
                    <Img src={props.img} />
                    <FirstInfoItem>
                        <Name>{props.name}</Name>
                        <Rate><FontAwesomeIcon icon={faStar} /> <span>{props.rate}</span></Rate>
                    </FirstInfoItem>
                </FirstInfo>
                <SecondInfo>
                    2022.08.15
                </SecondInfo>
            </Header>
            <Title>
                {props.title}
            </Title>
            <Tags>
                {props.category.map(i => <p>{i}</p>)}
            </Tags>
            <Body>
                <BodyItem>
                로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도 사용된다.
로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그 이상의 의미를 담지는 않는다. 문서에서 텍스트가 보이면 사람들은 전체적인 프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서 출판사들은 서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을 맞추기 위해 로렘 입숨을 사용한다.
로렘 입숨은 영어에서 사용하는 문자들의 전형적인 분포에 근접하다고도 하는데, 이 점 때문에 프레젠테이션으로 초점을 이동하는 데에도 도움을 준다
                </BodyItem>
            </Body>
            <Like>
                <Icon icon={faHeart} />
                <span>{props.like}</span>
            </Like>
            <Sign>
                <Btn onClick={onClick}>채팅신청</Btn>
                <p>츄르 20개</p>
            </Sign>
        </Container>
    )
}

export default BoardBox;

// 모든 페이지 모달창!