import React, { Component } from 'react'
import './Collapsible.css'

export default class Collapsible extends Component{
    constructor(props){
        super(props);
        this.state = {
            isVisible: false
        }

        this.togglePanel = this.togglePanel.bind(this);

    }

    togglePanel(e){
        this.setState({isVisible: !this.state.isVisible});
    }

    componentDidUpdate(){

    }

    render(){
        return(
            <div>
                <div onClick = {(e) => this.togglePanel(e)} className = 'header'> 
                    {this.props.tittle} 
                </div>
                {this.state.isVisible ? (<div className = 'content'> {this.props.children} </div>) : null}
            </div>
        );
    }

}