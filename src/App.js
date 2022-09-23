import './App.css';
import { useState } from 'react';
import Search from './components/search/search';
import Image from './components/image/image';

function App() {
  const [img, setImg] = useState("");

  const handleOnSearchChange = (searchData) => {
    console.log(searchData.value1);
    setImg(searchData.value2);
    console.log(img);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <Image imageURL={img}/>
    </div>
  );
}

export default App;
