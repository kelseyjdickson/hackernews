import React, { Component } from 'react'


const list = [
    {
        title: 'Programming Queen',
        url: 'https://kelseydickson.netlify.app/',
        author: 'Kelsey J. Dickson',
        age: 35,
        isAwesome: true,
        objectID: 0
    }
]
class AppClass extends Component {
   
    state = {
        list: list
    }
    render(){
        console.log('list',list)
    return (
        <div className="hi">
            {this.state.list.map((item) => {
                <div key={item.objectID}>
                    <span>
                        <a href={item.url}>{item.title}</a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.age}</span>
                    <span>{item.isAwesome}</span>

                    </div>}
                    )}
            <h1>hi</h1>
        </div>
    )
}
}

export default AppClass