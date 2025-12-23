import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Sakshi Sharma' age={18} img='https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Vamika Singh' age={32} img='https://images.unsplash.com/photo-1766106509321-f62d0017d9e6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Angel Bisht' age={27} img='https://images.unsplash.com/photo-1766038780820-a5c000ff0668?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzZ8fHxlbnwwfHx8fHw%3D' />
    </div>
  )
}

export default App
