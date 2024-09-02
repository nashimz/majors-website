import './Series.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const data = [
    { title: "GT Sprint Series",
    imgsrc: "/img/series/gt3.jpg",
    id: 1 },
    
    { title: "Nascar",
        
        imgsrc: "/img/series/nascar.jpg",
        id: 2 } ,
        { title: "IMSA",
          
          imgsrc: "/img/series/imsa.jpg",
          id: 3} ,
          { title: "Porsche Cup",
            
            imgsrc: "/img/series/pcup.jpg",
            id: 4 } ,
            { title: "Porsche Cup",
            
            imgsrc: "/img/series/pcup.jpg",
            id: 5 } 
            

];


function Series() {
    return (
        
            
         
        <Container className='seriesCont m-auto mt-5'>
        <Row  xs={1} sm={2} lg={4}>
        {data.map((item,idx) => (
          <Col className='mt-3' key={idx}>
      <a href={`series/${item.id}`}><img src={item.imgsrc} alt="" /></a>
       
    
    </Col> ))}
    </Row>
   
    </Container>
   

        
        
    );
}
  
  export default Series;