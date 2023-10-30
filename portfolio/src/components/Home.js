import axios from 'axios';
import 'bootstrap';
import { Link } from "react-router-dom";
import React, {  useRef, useState, useEffect, Text } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import { data } from "./data";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {



  return (
    <>
        <br></br>
      <h2> Trabajos destacados</h2>
      <div>
        <br></br>
      {data.map((item) => {
        
                  return <div key={item.id}>
                    <center>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <Col key={idx}>
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
                        ))}
                    </Row>
                    </center>
                    {/* <center>
                        
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
                    </center> */}
                  </div>
                })
              }
              </div>
    </>
  );
}
export default Home;