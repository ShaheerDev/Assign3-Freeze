import React from 'react'
import BottomNav from '../images/bottomnav.PNG'

export default class Bottombar extends React.Component {
    render() {
        return (
            <div style={{position: 'relative', bottom: '0px', right: '0px', left: '0px', }}>
                <img src={BottomNav} style={{cursor: 'pointer'}}></img>
            </div>
        )
    }
}