import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg src={dish.image} alt={dish.name} width="100%" />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div></div>
        );
    }

}

function RenderComments({ dish }) {

    return (
        <div></div>
    );
}


const DishDetail = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1" >
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish} />
                </div>
            </div>
        </div>
    );
}


export default DishDetail;
