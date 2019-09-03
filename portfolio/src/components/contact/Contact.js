import React, {Component} from "react";
import {Form} from "react-bootstrap";
import "./Contact.css";
import thankyou from "../../assets/images/thankyou.jpg";
import send from '../../assets/images/send.png';
import axios from "axios";
class Contact extends Component{
  state={
    name:"",
    email:"",
    comments:""
  }

  name = event => {
    this.setState({
      name: event.target.value
    });
  };

  email = event => {
    this.setState({
      email: event.target.value
    });
  };

  comments = event => {
    this.setState({
      comments: event.target.value
    });
  };

  postSubmitButton = () => {
    if (this.state.email !== "") {
      axios
        .post("https://katelicv-dd194.firebaseio.com/.json", {

          name: this.state.name,
          email: this.state.email,
          comments: this.state.comments
          
        })
        .then(response => {
          console.log(response);
          alert("Thank you for submitting the form. I will get back to you in 1-2 days :)");
        })
        .catch(error => {
          console.log(error);
        });
    }
    else {
      alert("Please fill up the form. It is super fun :)");
    }
  }

    render(){
        return(
<div className="contactForm">
<Form>
<Form.Group controlId="contactName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" onChange={event => this.name(event)}/>
   
  </Form.Group>

  <Form.Group controlId="contactEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={event=>this.email(event)}/>
    <Form.Text className="text-muted">
      I'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="contactTextarea">
    <Form.Label>Comments</Form.Label>
    <Form.Control as="textarea" rows="4" onChange={event=>this.comments(event)}/>
  </Form.Group>
  
  <img src={send} alt="send" className="send"  onClick={this.postSubmitButton} />
</Form>
<img src={thankyou} alt="thankyou" className="thankyou"/>
</div>
        )
    }
}
export default Contact;