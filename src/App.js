import React, { useState } from 'react'
import './App.css';

function App() {

  const list = [
    {
      title: 'React',
      url: 'https://facebook.github.io/react/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://github.com/reactjs/redux',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ]
  let helloWorld = "Welcome to Kelsey's road to React."
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting name ${name}`)
  }


  return (
    <div className="App">
      {list.map((item) => {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}> {item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>

          </div>
        )

      })}
      <h2>{helloWorld}</h2>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Name:
    <input 
    type="text" 
    name={name}
    onChange={e => setName(e.target.value)}/>
        </label>
        <input 
        type="submit" 
        value="Submit" />
      </form> */}

    </div>
  );
}

export default App;
