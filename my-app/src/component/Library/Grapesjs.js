import React, { Component } from 'react';
import classes from './Grapesjs.css';

class grapesjsEditor extends Component {
    constructor(props){
        super(props);
    }
    shouldComponentUpdate(){
        return false
    }
    componentDidMount(){
        const editor = grapesjs.init({
            container : '#gjs',
            components: '<div class="txt-red">Hello world!</div>',
            style: '.txt-red{color: red}',
        });
    }
    render() {
        return (
            <div id ='gjs'></div>
        );
    }
}


export default grapesjsEditor;