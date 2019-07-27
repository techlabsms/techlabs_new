import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ProgrammHero from '../components/ProgrammHero';
import Academy from '../components/Academy';
import background from '../assets/p_background.png'

class program extends Component {
    render() {
        return (
            <div>
            <Navbar/>
                <div className="container-fluid">
                    <ProgrammHero headingFirst="Digital Shaper" headingSecond="Program" background={background}/>
                </div>
                <div className="container">
                    <Academy />
                </div>
            </div>
        );
    }
}

export default program;