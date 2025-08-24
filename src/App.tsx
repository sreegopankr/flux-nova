import { useState } from 'react'
import './App.css'
import { Button } from './components/button'
import { Star, Trash2, Settings, Search } from "lucide-react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-6'>
      <Button variant="primary" rightIcon={<Star size={16} />}>Click Me</Button>
      <Button variant="secondary" size='sm'> <Settings size={16} /> Secondary</Button>
      <Button variant="danger"> <Trash2 size={16} /> Danger</Button>
      <Button variant="success" size='lg'>Success</Button>
      <Button variant="warning" leftIcon={<Search size={16} />}>Warning</Button>
    </div>
  )
}

export default App
