import {React,useState} from 'react'
import Silder from '../MovieComponent/Slider'
import CardScorllingList from '../MovieComponent/CardScrollingList'

const Home = (props) =>{
    return(
        <div style={{margin:"10px"}}>
        <Silder SilderData={props.silderData}/>
        {props.movieData.map(list=>(
            <CardScorllingList movieData={list.movieList} category = {list.categoty} />
        ))}
        </div>

    )
}

export default Home