import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import AddButton from './AddButton/AddButton';
import AddProduct from './AddProduct/AddProduct';

class App extends React.Component {  

    render() {
        return (
          <div className="ui container">
            <h1 style={{marginTop: '10px'}}>Storage App</h1>
            <div >
              <SearchBar />
              <AddButton buttonTitle="Add Product" />
            </div>
            {/* <AddProduct /> */}
          </div>
 
        );
    }
} 

export default App;