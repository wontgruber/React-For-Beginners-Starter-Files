import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
        <form action="" className="store-selector">
            <input type="text" required placeholder="Store Name"></input>
            <button type="submit">Visit Store →</button>
        </form>
        )
    }
}

export default StorePicker;