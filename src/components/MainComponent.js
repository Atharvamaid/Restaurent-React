import React from 'react';
import Header from './Header';
import Menu from './MenuComponents';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import { COMMENTS} from '../shared/comments';
import { LEADERS} from '../shared/leaders';

import { PROMOTIONS} from '../shared/promotions';
import About  from './AboutComponent';
import {Switch, Route, Redirect } from 'react-router-dom';
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes:DISHES,
      leaders : LEADERS,
      promotions : PROMOTIONS, 
      comments : COMMENTS
      
    };
  }
 

  render(){

    const HomePage = ()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
        promotion = {this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader = {this.state.leaders.filter((lead)=>lead.featured)[0]}

        />
      );
    }

    const DishWithId=({match}) =>{
        return (
          <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
          comments = {this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
          />

        );
    }
    const about =()=>{
      return(
        <About leaders={this.state.leaders} />
      );
    }
    return (
      <div>
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
        <Route path="/menu/:dishId" component={DishWithId}/>
        <Route exact path="/contactus" component={Contact}/>
        <Route exact path="/aboutus" component={about}/>
        <Redirect to="/home/" />
      </Switch>
       <Footer/>
      </div>
    );
  }
}

export default Main;
