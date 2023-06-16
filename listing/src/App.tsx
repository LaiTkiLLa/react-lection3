import React from 'react';
import './main.css';
import {Listing} from "./components/listing.component";
import {etsy} from "./data/etsy";

function App() {
  return (
    < Listing items={etsy}/>
  );
}

export default App;
