import React, { Component } from "react";
import Auxilary from "../../hoc/Auxilary";

import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         ingredients:{
  //             meat:1,
  //             bacon:1,
  //             cheese:2,
  //             salad:2
  //         }
  //     }
  // }

  state = {
    ingredients: {
      meat: 2,
      bacon: 1,
      cheese: 2,
      salad: 1,
    },
  };
  render() {
    return (
      <Auxilary>
        <Burger ingredients={this.state.ingredients} />
        <div>build controls</div>
      </Auxilary>
    );
  }
}

export default BurgerBuilder;
