import './App.css';
import { useState } from 'react';
import Search from './components/search/search';
import Image from './components/image/image';

function App() {
  const [img, setImg] = useState("");
  const [alt, setAlt] = useState("");

  const handleOnSearchChange = (searchData) => {
    console.log(searchData.value1);
    setImg(searchData.value2.slice(0, -58));
    setAlt(searchData.label)
    console.log(img);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <Image imageURL={img} alt={alt}/>
    </div>
  );
}

export default App;
