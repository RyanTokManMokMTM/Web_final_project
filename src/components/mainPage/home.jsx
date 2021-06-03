import {React,useState} from 'react'
import {Container,Row,Col,Carousel} from 'react-bootstrap'
import MovieCard from '../Card'
import Silder from '../Slider'

const Home = (props) =>{
    return(
        <div style={{margin:"10px"}}>
                <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.themoviedb.org/t/p/original/ovwN1JDPvllWZaH3xtKp7txRWDj.jpg"
                        alt="The Scientist"
                        style={{minHeight:"200px",maxHeight:"600px",objectFit:"contain"}}
                        />
        `               <Carousel.Caption>
                        <h3>The Scientist</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.themoviedb.org/t/p/original/54yOImQgj8i85u9hxxnaIQBRUuo.jpg"
                        alt="Ava"
                        style={{minHeight:"200px",maxHeight:"600px",objectFit:"contain"}}
                        />
        `               <Carousel.Caption>
                        <h3>Ava</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.themoviedb.org/t/p/original/eShw0LB5CkoEfYtpUcXPD85oz5Q.jpg"
                        alt="Freaky"
                        style={{minHeight:"200px",maxHeight:"600px",objectFit:"contain"}}
                        />
        `               <Carousel.Caption>
                        <h3>Freaky</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        <h3 style={{color:"#bf00ff",margin:"25px"}}>For You</h3>
        <Container fluid >
            <div style={{color:"purple"}}>
                <Row xl={6} md={3} sm={3} xs={2}> 
                {props.movieData.map((item) => (
                        <Col>
                            <MovieCard movie={item}/>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>

        <h3 style={{color:"#bf00ff",margin:"25px"}}>Upcoming</h3>
        <Container fluid >
            <div style={{color:"purple"}}>
                <Row xl={6} md={3} sm={3} xs={2}> 
                {props.movieData.map((item) => (
                        <Col>
                            <MovieCard movie={item}/>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>

        <h3 style={{color:"#bf00ff",margin:"25px"}}>Now Playing</h3>
        <Container fluid >
            <div style={{color:"purple"}}>
                <Row xl={6} md={3} sm={3} xs={2}> 
                {props.movieData.map((item) => (
                        <Col>
                            <MovieCard movie={item}/>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
        </div>

    )
}

export default Home