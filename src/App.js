import React from 'react'
import Slider from './ImgSlider/Slider'
import SliderData from './ImgSlider/SliderData'
import './App.css';

function App() {
  return (
    <div className="App">
      <Slider slides={SliderData} />
    </div>
  );
}

export default App;
