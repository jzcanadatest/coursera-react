import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {


    render() {
        if (this.props.dish != null) {
            return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-1" >
                            <Card>
                                <CardImg right src={this.props.dish.image} alt={this.props.dish.name} width="100%" />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>
                                        <p>{this.props.dish.description}</p>
                                        <p>{new Date().toLocaleString()}</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
                
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;
