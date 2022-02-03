import React from 'react'
import Navbar from './components/navbar'
import Bottombar from './components/bottombar'
import Glass from './images/a.jpg'

export default class App extends React.Component {
     render(){
       return(
         <div style={{overflowX: 'hidden'}}>
         <Navbar />
         <div style={{backgroundColor: 'lightgray'}}>
					<div style={{paddingLeft: 100, paddingRight: 100, paddingBottom: 100, paddingTop: 50}}>
						<h1>NEW PRODUCT</h1>
						<h2>The Twist of Healthy Yogurt</h2>
						<p>This website template has been designed by <br></br><a href='https://www.freewebsitetemplates.com'>freewebsitetemplates.com</a><br></br> for you, for free. You can replace all this text with your own text. </p>
            <img src={Glass} style={{float: 'right', position: 'absolute', top: '100%', right: 100}}></img>
          </div>
				</div>
         <Bottombar />
         </div>
       )
     }
}


