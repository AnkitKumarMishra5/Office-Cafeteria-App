import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Menu.css';

const Menu = () => {
    let[count, setCount] = useState(0);
    let[show, setShow] = useState(false);
    useEffect(()=>{
        console.log("show" + show);
        if(count===0){
            setShow(false);
        }
    }, [count, show])
  
    const IncrementItem = () => {
            setCount(count+1)
    }
    const DecrementItem = () => {
            if(count>0){
                setCount(count-1)
            }
    }
    const  ToggleClick = () =>{
        if(count===0){   
            setCount(count+1);
        }
        setShow(true);
    }
    return (
        <div className="menuContainer">
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1581073766947-e8f3ef5393a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" />
                            <Card.Body>
                                <Card.Title className="dishName">French Fries</Card.Title>
                                <Card.Title className="price">Rs 80</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <div className="addToCart">
                                    {show  && (<Button className="decrement" onClick={()=>{DecrementItem()}}>-</Button>)}
                                    <Button className="show" onClick={()=>{ToggleClick()}}> {(!show && count===0) ? 'ADD' : count }</Button>
                                    {show  && (<Button className="increment" onClick={()=>{IncrementItem()}}> +</Button>)}
                                </div>  
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  lg={4} md={6} sm={12}>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button className="addToCart" >ADD</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        </div >

    );


}
export default Menu;