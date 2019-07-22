import React from 'react';

class AddButton extends React.Component {
    render () {
        return(
            <button className="ui inverted green button">{this.props.buttonTitle}</button>
        )
    }
}

export default AddButton;