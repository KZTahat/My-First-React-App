import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOFvotes: 0
        }
    }

    increaseVotes = () => {
        this.setState({
            numberOFvotes: this.state.numberOFvotes + 1
        })
    }

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={this.increaseVotes} variant="top" src={this.props.url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            {this.state.numberOFvotes}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default HornedBeasts;