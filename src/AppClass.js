import React, { Component } from 'React'


const list = [
    {
       title: 'Programming Queen',
        url: 'https://kelseydickson.netlify.app/',
        author: 'Kelsey J. Dickson',
        age: 35,
        isAwesome: true
    }
]
class AppClass extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="hi">
                <h1>hi</h1>
            </div>
        )
    }
}

export default AppClass