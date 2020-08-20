import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, BreadcrumbProps } from 'reactstrap';
import DishDetails from './DishdetailComponent';
import { Link } from 'react-router-dom';


function RenderMenuComponents({ dish, onClick }) {


    return(
        <Card>
            <Link to={`/menu/${dish.id}`}>
                    <CardImg  width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
            </Link>
        </Card>
    );   
    }
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
              <div  className="col-20 col-md-5 m-1">
                <RenderMenuComponents dish={dish} onClick={props.onClick}/>
              </div>
            );
        });
    
        return (
          <div className="container">
              <div className="row">
                  <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Menu</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>Menu</h3>
                      <hr/>
                  </div>
              </div>
              <div className="row">
                  {menu}
              </div>
              
          </div>
      );
    } 
    
        
    

export default Menu;