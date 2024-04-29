import React from 'react' 
import {Routes ,Route, Link} from 'react-router-dom';
import Main from './Component/Main';
import About from './Component/About';
import Contact from './Component/Contact';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link  to='/'>Main</Link> </li>
          <li><Link to='/About'>About</Link> </li>
          <li><Link to='/Contact'>Contact</Link> </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
