import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      color: '#783330',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'black',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1616769364512-1e50e8266907?q=80&w=1299&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'gray',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1681949222860-9cb3b0329878?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'brown',
      tag: 'Average'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
