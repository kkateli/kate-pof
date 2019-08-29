import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";
import "./Contact.css";
import thankyou from "../../assets/images/thankyou.png";
import send from '../../assets/images/send.png';
class Contact extends Component{
    render(){
        return(
<div className="contactForm">
<Form>
<Form.Group controlId="contactName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
   
  </Form.Group>

  <Form.Group controlId="contactEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      I'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="contactTextarea">
    <Form.Label>Comments</Form.Label>
    <Form.Control as="textarea" rows="4" />
  </Form.Group>
  
  <img src={send} alt="send" className="send"/>
</Form>
<img src={thankyou} alt="thankyou" className="thankyou"/>
</div>
        )
    }
}
export default Contact;