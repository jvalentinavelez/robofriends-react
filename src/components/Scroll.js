import React from 'react';

//Scroll has 'Cardlist' as children 
//Every props has children
const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll',border:'5px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;