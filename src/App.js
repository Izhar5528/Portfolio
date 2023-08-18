import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import MySkills from './My Skills';
import Portfolio from './Portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <MySkills />
      <Portfolio/>
      {/* Your other content goes here */}
    </div>
  );
}

export default App;

