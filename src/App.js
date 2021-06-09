import CustionNavBar from './components/Nav/CustomNavBar'
import { React, useState, useEffect } from 'react'
import { hometest } from './api/api.js'

function App() {
    // useEffect(()=>{
    //   hometest()
    //   .then(res =>{
    //     console.log(res.data)
    //   })
    //   .catch(err => console.log(err))
    // })


    return ( <
        div className = "main-body" >
        <
        CustionNavBar / >
        <
        /div>
    );
}


export default App;