import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Collapsible from './component/Collapsible'

class App extends Component{
    render(){
        console.log('A');
        return(
            <Collapsible tittle = "Header">
                <div> 
                    <p>Content of Collapsible</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                </div>
            </Collapsible>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
)