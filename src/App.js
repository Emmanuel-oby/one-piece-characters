import './App.css';
import Search from './components/search/search';
import Image from './components/image/image';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData.value1);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <Image />
    </div>
  );
}

export default App;
