import React from "react";
import Card from "react-bootstrap/Card";

function UserCards({ name, phone, email, street , company, address, website}) {
  return (
    <div className="UserCards">
      <Card style={{ width: "25rem", border: "solid 1px blue" }}>
        <Card.Body>
          <Card.Img style={{width:"70px", marginLeft:"10px", float: "right", marginTop:"5px"}} variant="top" src="https://static.thenounproject.com/png/17241-200.png" />
          <Card.Title style={{color: "blue"}}>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">phone: {phone}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"> email: {email}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"> website: {website}</Card.Subtitle>
  <Card.Subtitle className="mb-2 text-muted"> address: {address.street}-{address.suite} -{address.city}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"> company name: {company.name}</Card.Subtitle>

          <Card.Text>{street}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCards;
