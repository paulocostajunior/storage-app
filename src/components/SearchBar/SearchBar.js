import React from 'react';
import AddButton from '../AddButton/AddButton';

class SearchBar extends React.Component {

    render() {
        return(
                <div className="ui icon input center aligned">
                    <input type="text" placeholder="Search..."/>
                    <i className="search icon"></i>
                </div>
        );
    }
}

export default SearchBar;