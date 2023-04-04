import './App.css';
import React, { useState } from 'react';
import CardList from './components/Cards/CardList.js';
import SearchBox from './components/SearchBox';
import NavBar from './components/NavBar';
import { items } from './components/Items';
import logo from './components/logo.png';

function App() {

const [searchField, setSearchField] = useState('');
const filteredItems = items.filter(items=> {
  return items.name.toLowerCase().includes(searchField.toLowerCase());
  })
function onSearchBoxChange(event) {
setSearchField(event.target.value);
}
  
  return (
    <div className="App text-center">
      <div className='static'>
      <img className='logo' src={logo} alt='Risk of Rain 2' /><br />
      <NavBar />
      <div className='subHeading'>
      <h1 className='title'>Risk of Rain 2 Item Index by muzlightyear</h1><br />
      <a className='disclaimer'>Disclaimer: The item descriptions are taken from https://riskofrain2.fandom.com/wiki/Items A special thanks to them for making the information public for me and the community to see. </a>
      </div>
      <SearchBox searchChange={onSearchBoxChange} />
      </div>
      <CardList items={filteredItems}/>
    </div>
  );
}

export default App;
