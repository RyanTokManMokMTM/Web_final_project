import {React} from 'react'
import {Carousel} from 'react-bootstrap'
const Silder = (props)=>{
    return(
        <div >
            <Carousel>
                {props.SilderData.map((item)=>(
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={item.url}
                alt={item.movieName}
                style={{minHeight:"200px",maxHeight:"600px",objectFit:"contain"}}
                />
                  <Carousel.Caption>
                <h3>{item.movieName}</h3>
                </Carousel.Caption>
                </Carousel.Item>

                   ))}

            </Carousel>
        </div>
    )
}

export default Silder