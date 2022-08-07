import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Wapper = styled.section`
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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

function MainReview() {
    return (
        <Wapper>
            <Header>
                <Title>CATCHUP한 사람들의 생생한 후기</Title>
                <MoreInfo icon={faCirclePlus} size="2x"/>
            </Header>
        </Wapper>
    )
}

export default MainReview;