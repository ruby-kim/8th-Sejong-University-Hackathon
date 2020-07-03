import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';

class Boot extends Component {

    render() {
        return (
            <ScriptTag 
                isHydrating={true} 
                type="text/javascript" 
                src='./bootstrap.min.js'
            />);
    }
}