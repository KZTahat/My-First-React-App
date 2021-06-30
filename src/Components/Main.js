import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './Data.json';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArray: Data
        }
    }

    dispalyFilterdImages = (dataArray) => {
        this.setState({dataArray});          
      }

    filterByHornsNumber = (event) => {
        let numberOfHorns = parseInt(event.target.value);
        let animalGallery = Data;
        if(numberOfHorns){
            animalGallery = Data.filter(element => element.horns === numberOfHorns);
        }
        console.log(animalGallery);
        this.dispalyFilterdImages(animalGallery);
    }

    render() {
        return (
            <div>
                {/* <SelectForm filterFunction={this.filterByHornsNumber} /> */}

                <Form.Label>Filter by Horns</Form.Label>
                <Form.Control as='select' onChange={this.filterByHornsNumber}>
                    <option value="all">All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">WoooooW</option>
                </Form.Control>

                {
                    
                    this.state.dataArray.map((element, index) => {
                        return (<HornedBeasts
                            title={element.title}
                            url={element.image_url}
                            description={element.description}
                            key={index}
                        />
                        );
                    })
                }

            </div>
        )
    }
}

export default Main;