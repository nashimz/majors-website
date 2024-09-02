import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Cards.css'


    const data = [
    { title: "Watch our telemetry",
    text: "You will be able to watch our telemetry and replays",
    imgsrc: "/img/home/telemetrylogo.jpg",
    id: 1 },
    { title: "Series",
        text: "Take a look at all the series that we build sets for",
        imgsrc: "/img/home/serieslogo.jpg",
        id: 2 } ,
        { title: "Coaching",
          text: "We provide coaching service 1on1 with our Crew Chiefs",
          imgsrc: "/img/home/coachinglogo.jpg",
          id: 3} ,
          { title: "Free Sets",
            text: "We upload free sets everyweek named Baseline+",
            imgsrc: "/img/home/freesetslogo.jpg",
            id: 4 } 
            

];



function Cards() {
    return (
        <Container >
        <Row xs={2} sm={2}>
        {data.map((item,idx) => (
          <Col key={idx}>
      
       <Card>
      <Card.Img variant="top" src={item.imgsrc} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         {item.text}
        </Card.Text>
        <Button variant="warning">Read more</Button>
      </Card.Body>
    </Card>
    
    </Col> ))}
    </Row>
   
    </Container>

    

    
  );






}

export default Cards;