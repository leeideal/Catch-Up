import styled from 'styled-components';

const Wapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
`

const Title = styled.h2`
    margin-top: 50px;
    color : ${props => props.theme.mainColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 24px;
    width: ${props => props.theme.mainWidth};
    max-width:${props => props.theme.mainMaxWidth};
    text-align: left;
`

const GridContainer = styled.div`
    margin-top: 40px;
    width: 80%;
    max-width: 440px;
    display: grid;
    grid-template-columns: 8fr 1fr 8fr;
    grid-template-rows: repeat(14,50px);
`
const First = styled.div`
    border-radius: 10px; 
    grid-row:1/ span 5;
    background-image: url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
    background-size: cover;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    span{
        position: absolute;
        bottom : 15px;
        left: 15px;
        color:white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        font-weight: 600;
    }
`
const Second = styled.div`
    border-radius: 10px; 
    grid-column: 3;
    grid-row: 3 / span 5;
    background-image: url("https://images.unsplash.com/photo-1507812984078-917a274065be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80");
    background-size: cover;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    span{
        position: absolute;
        bottom : 15px;
        left: 15px;
        color:white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        font-weight: 600;
    }
`
const Thrid = styled.div`
    border-radius: 10px; 
    grid-row: 7/ span 5;
    background-image: url("https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
    background-size: cover;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    span{
        position: absolute;
        bottom : 15px;
        left: 15px;
        color:black;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        font-weight: 600;
    }
`
const Fourth = styled.div`
    border-radius: 10px; 
    grid-column: 3;
    grid-row:9/ span 5;
    background-image: url("https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60");
    background-size: cover;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    span{
        position: absolute;
        bottom : 15px;
        left: 15px;
        color:white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        font-weight: 600;
    }
`

function MainTop(){
return (
    <Wapper>
        <Title>
            CATCHUP 인기 HASH TAG
        </Title>
        <GridContainer>
            <First>
                <span>#개발자</span>
            </First>
            <Second>
                <span>#해외취업</span>
            </Second>
            <Thrid>
                <span>#네카라쿠배</span>
            </Thrid>
            <Fourth>
                <span>#마케팅</span>
            </Fourth>
        </GridContainer>
        
    </Wapper>
)
}

export default MainTop;