import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'name': '김준성',
  'birthday': '880420',
  'gender': '남자',
  'job': '프로그래머'
}

class App extends Component{
  render (){
    return (
    <Customer 
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
    )
  }
}

export default App;