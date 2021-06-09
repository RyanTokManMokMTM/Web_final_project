import {React} from 'react'
import {Container,Row,Col,Card,ResponsiveEmbed} from 'react-bootstrap'
import './movieDetail.css'
const MovieDetail = ()=>{
    return(
        <div>
        <div className="movie_detail" style={{"--img":"url('https://www.themoviedb.org/t/p/original/bZGAX8oMDm3Mo5i0ZPKh9G2OcaO.jpg')"}} >
        <Container  >
            <Row xs = {1} sm={1} md={2}>
            <Col md={5}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.themoviedb.org/t/p/original/lch4lTR1gZxXp3L8wzaBM86v4Zi.jpg"/>
                </Card>
            </Col>

            <Col  style={{paddingTop:"75px"}}>
                <Container >
                    <Row xs={1} md={1}style={{Padding:"25px",color:"white"}}>
                        <Col>
                        <h1 style={{color:"#FFB84D"}}>The Conjuring: The Devil Made Me Do It</h1>
                        </Col>
                        <Col>
                        <h4 style={{color:"gray"}} >More Movie Info</h4>
                        </Col>

                        <Col style={{marginTop:"15px"}}>
                        <b style={{margin:"10px"}} >Release Date:</b>
                        </Col>
                        <Col>
                        <b style={{margin:"10px"}}>lang:</b>
                        </Col>
                        <Col>
                        <b style={{margin:"10px"}}>Cast:</b>
                        </Col>
                        <Col>
                        <b style={{margin:"10px"}}>Director:</b>
                        </Col>
                    </Row>

                </Container>
            </Col>
        </Row>
        </Container>
       </div>
        
        <Container>
            <Row xs={1} md={1}>
                 <Col>
                    <h3 style={{color:"#1a82ff",marginTop:"20px"}}>ABOUT THE STORY</h3>
                </Col>    

                <Col>
                <p style={{color:"white",marginTop:"35px",lineHeight:3}}>
                故事設定在1970年代倫敦正值龐克搖滾的革命時期，一位名叫艾絲黛拉的年輕惡女，想憑著她的才智在時尚界闖出自己的名號，她結識了兩位與她臭味相投的竊賊，以各種伎倆讓他們得以在倫敦風生水起；直到有天，艾絲黛拉的時尚才氣被時尚界天后－馮赫爾曼男爵夫人相中（金獎影后艾瑪湯普遜 飾），兩人從相知相惜演變到反目成仇，更讓艾絲黛拉的黑暗面逐漸展露，成為了人見人怕的時尚惡女－庫依拉。
                </p>
                </Col>
             </Row>

            <Row>
                <Col>
                <div>
                <h3 style={{color:"#1a82ff",marginTop:"20px",marginBottom:"20px"}}>Movie Trailer</h3>
                </div>
                <div style={{ width: "80%", height: 'auto',background:"black"}}>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed type="video/mp4" src="https://www.youtube.com/embed/KD43OQnTMWU" />
                    </ResponsiveEmbed>
                </div>
                </Col>
            </Row>
        </Container>

        </div>
  )
}

export default MovieDetail