import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name': '김준성',
    'birthday': '880420',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name': '박정하',
    'birthday': '930902',
    'gender': '여자',
    'job': '프로그래머'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name': '김새봄',
    'birthday': '910111',
    'gender': '여자',
    'job': '프로그래머'
  }
]

class App extends Component{
  render (){
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer 
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                />
            )
          })
        }
      </div>
    )
  }
}

export default App;