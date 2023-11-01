import axios from 'axios';
import 'bootstrap';
import { Link } from "react-router-dom";
import React, {  useRef, useState, useEffect, Text } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from "./data";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Home() {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  


  return (
    <>
        <br></br>
        <div className='margin'>
      <h2> Trabajos destacados </h2>
      </div>
        <br></br>
        <Box sx={{ minWidth: 275 }}>
      <Card style={{ maxWidth: '300px' }} variant="outlined">{card}</Card>
    </Box>
      {/* {data.map((item) => {
        
                  return <div key={item.id}>
                    <center>
                    <Row >
                            <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                <Card.Title>{item.nombre}</Card.Title>
                                <Card.Text>
                                    {item.descripcion}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                    </Row>
                    </center>
                    <center>
                        
                    <Card
                      style={{
                        width: '18rem'
                      }}
                    >
                      <CardBody>
                        
                        <CardTitle tag="h5">
                          {item.nombre}
                        </CardTitle>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6"
                        >
                          {item.descripcion}
                        </CardSubtitle>
                      </CardBody>
                      <img
                        alt="Card cap"
                        src={item.images[0]}
                        width="100%"
                      />
                      <CardBody>
                        <CardLink href={`/detalleCreacion/${item.id}`}>
                          Mas detalle
                        </CardLink>
                      </CardBody>
                    </Card>
                    </center>
                  </div>
                })
              } */}
    </>
  );
}
export default Home;