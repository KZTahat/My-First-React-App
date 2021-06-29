import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.show}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Card.Img variant="top" src={this.props.url} />
                    <Modal.Body>{this.props.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.changeState}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}


export default SelectedBeast;