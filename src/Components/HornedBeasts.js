import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast ';

class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOFvotes: 0,
            show: false
        }
    }

    increaseVotes = () => {
        this.setState({
            numberOFvotes: this.state.numberOFvotes + 1
        })
    }

    changeState = () => {
        let currentState = this.state.show;
        if (currentState === false) {
            this.setState({
                show: true
            })
        } else if (currentState === true) {
            this.setState({
                show: false
            })
        }
    }

    render() {
        return (
            <>
                <SelectedBeast 
                    show={this.state.show}
                    changeState={this.changeState}
                    title={this.props.title}
                    description={this.props.description}
                    url={this.props.url} />

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src={this.props.url} className='cardImg' onClick={this.changeState}/>
                    <Card.Body onClick={this.changeState}>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            {this.state.numberOFvotes}
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={this.increaseVotes} className='cardButton'>Vote</Button>
                </Card>
                
            </>
        )
    }
}

export default HornedBeasts;