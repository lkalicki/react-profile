import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is Lukasz Kalicki. I am an aspiring 
            Web Developer in the process of completing a coding boot camp through UCONN. 
            Through the Boot camp modules, I have gained experience with
            React.js, JavaScript, HTML, CSS, Node.js, and various other tools.
            I am eager to utilize these skilled and determined to pave a 
            successful career as a developer. 
            <br />
            <br />
            Apart from coding, I enjoy playing soccer, working out, going
            on walks with my family, and trying new foods. I am currently located in
            Stratford, CT but am open to opportunities within the state of CT or remote. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
