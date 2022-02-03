import React from 'react'
import Logo from '../images/logo.png'
import Art from '../images/art.PNG'
export default class Navbar extends React.Component {
     render(){
       return(
         <>
         <div style={{backgroundColor: 'lightgray', paddingLeft: 100, paddingRight: 100, paddingBottom: 25, paddingTop: 25, }}>
         <img src={Logo} style={{cursor: 'pointer'}}></img>
         <div style={{float: 'right', paddingLeft: 25, cursor: 'pointer'}}>
             <h4>CONTACT</h4>
         </div>
         <div style={{float: 'right', paddingLeft: 25, cursor: 'pointer'}}>
             <h4>BLOG</h4>
         </div>
         <div style={{float: 'right', paddingLeft: 25, cursor: 'pointer'}}>
             <h4>ABOUT</h4>
         </div>
         <div style={{float: 'right', paddingLeft: 25, cursor: 'pointer'}}>
             <h4>HOME</h4>
         </div>
         </div>
        <img src={Art} width='100%' style={{paddingLeft: 100, paddingRight: 100,}}></img>
        </>
       )
     }
}