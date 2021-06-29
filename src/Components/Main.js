import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './Data.json'


class Main extends React.Component {
    
    render() {
        return (
            <div className='cardDiv'>
                {Data.map((element,index) => {
                    return (<HornedBeasts title={element.title} url={element.image_url} description={element.description} key={index}/>
                    );
                })}
            </div>
        )
    }
}

export default Main;