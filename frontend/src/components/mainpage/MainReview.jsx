import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import StarRatingComponent from 'react-star-rating-component';

const Wapper = styled.section`
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
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

const reviewArray = [
    {
        title : "밥을 불어 길지 그들의 그들은 위하여서.",
        body : "곳으로 천지는 우리 들어 불어 아니다. 역사를 커다란 주는 그들은 그러므로 소리다.이것은 철환하였는가? 아름답고 이상 없는 것이다. 황금시대를 위하여.",
        rate : 4,
        who: "안경잡이",
        img : "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        id : 1
    },
    {
        title : "밥을 불어 길지 그들의 그들은 위하여서.",
        body : "곳으로 천지는 우리 들어 불어 아니다. 역사를 커다란 주는 그들은 그러므로 소리다.이것은 철환하였는가? 아름답고 이상 없는 것이다. 황금시대를 위하여며.",
        rate : 5,
        who: "빡빡이 아조씨",
        img : "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80",
        id : 2
    },
    {
        title : "밥을 불어 길지 그들의 그들은 위하여서.",
        body : "곳으로 천지는 우리 들어 불어 아니다. 역사를 커다란 주는 그들은 그러므로 소리다.이것은 철환하였는가? 아름답고 이상 없는 것이다. 황금시대를 위하여.",
        rate : 4,
        who: "개발좀 잘하게 생긴사람",
        img : "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
        id : 3
    },
]

const Review = styled.section`
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const Box = styled.div`
    font-family: 'Inter', sans-serif;
    width: 100%;
    height: 150px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    background-color: white;
    border-radius: 18px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:${props => props.theme.mainColor};
`

const Star = styled(StarRatingComponent)`
    font-size: 20px;
`

const BoxHeader = styled.section`
    margin-top: 2%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BoxTitle = styled.p`
    font-size: 13px;
`

const BoxMiddle = styled.section`
    display: flex;
    margin-top: 3%;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
`

const BoxImg = styled.img`
    width : 60px;
    height : 60px;
    border-radius: 50%;

`
const BoxBody = styled.p`
    font-size: 15px;
    width : 80%;
`

const BoxFooter = styled.div`
    width: 90%;
    margin-top: 2%;
    font-size: 14px;
    text-align: right;
`


function MainReview() {
    return (
        <Wapper>
            <Header>
                <Title>CATCHUP한 사람들의 생생한 후기</Title>
                <MoreInfo icon={faCirclePlus} size="2x"/>
            </Header>
            <Review>
                {reviewArray.map(prev => (
                    <Box key={prev.id}>
                        <BoxHeader>
                            <BoxTitle>
                                {prev.title}
                            </BoxTitle>
                            <Star
                                name={`rate${prev.id}`}
                                starCount={5}
                                value={prev.rate}
                                starColor={"#3A2217"}
                                emptyStarColor={"rgba(0,0,0,0.5)"}/>
                        </BoxHeader>
                        <BoxMiddle>
                            <BoxImg src={prev.img} />
                            <BoxBody>
                                {prev.body}
                            </BoxBody>
                        </BoxMiddle>
                        <BoxFooter>
                            {prev.who}
                        </BoxFooter>
                    </Box>
                ))}
            </Review>
        </Wapper>
    )
}

export default MainReview;