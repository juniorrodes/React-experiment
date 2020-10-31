import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Collapsible from './component/collapsible'
import './index.css'

class App extends Component{
    render(){
        return(
            <div className = 'container'>
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
                <Collapsible tittle = "Github">
                    <div>
                        <a href = "https://github.com/juniorrodes">
                            My Github
                        </a>
                    </div>
                </Collapsible>
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
)