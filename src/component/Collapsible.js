import React, { Component } from 'react'
import './collapsible.css'

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
        //let style = 
        return(
            <div className = 'collapsible'>
                <div onClick = {(e) => this.togglePanel(e)} className = {this.props.tittle}> 
                    {this.props.tittle} 
                </div>
                {this.state.isVisible ? (<div className = 'content'> {this.props.children} </div>) : null}
            </div>
        );
    }

}