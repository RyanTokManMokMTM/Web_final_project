import {React} from 'react'
import {Card,Button} from 'react-bootstrap'

const MovieCard = (props) =>{
    return(
        <div style={{marginTop:"20px"}}>
            <Card  style={{ width:"180px"}}>
            <Card.Img variant="top" src={props.movie.url} height="268"/>
            <Card.Body>
            <Card.Title style={{fontSize:15,height:"45px"}}>{props.movie.movieName}</Card.Title>
            <Button variant="warning" size="sm">More Detail</Button>
            </Card.Body>
            </Card>
        </div>

    )
}

export default MovieCard