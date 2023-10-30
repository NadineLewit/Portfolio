import axios from 'axios';
import 'bootstrap';
import { Link} from "react-router-dom";
import React, {  useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import { data } from "./data";

function DetalleCreacion(id) {

  useEffect(() => {
    
  }, [])


  return (
    <>
      
      <div>
        <br></br>
      <CardGroup>
      {data.map((item) => {
                  return <li key={item.id}>
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
                  </li>
                })
              }
              </CardGroup>
              </div>
    </>
  );
}

export default DetalleCreacion;