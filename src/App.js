import React, { Component } from "react";
import Header from "./components/Header";
import ControlledForm from "./components/forms/ControlledForm";
import ControlledValidation from "./components/forms/ControlledValidation";
import RattleList from "./components/RattleList";
import RattleForm from "./components/RattleForm";
import "./assets/styles/app.css";


class App extends Component {
  //create some initial state 
  state = {
    rattles: [
      {
      username: "EdgarAPoe",
      rattle: "@VirginiaPoe u up?",
      },
      {
        username: "VirginiaPoe",
        rattle: "@EdgarAPoe 	:sleeping:"
      },
    ],
  };

  //function to be added as a callback prop

  addRattle = (newRattle) => {
    this.setState((prevState) => {
      return {
        rattles: [...prevState.rattles, newRattle] //spread operator
      };
    });
  };

  render() {
    return (
      <>
        <div>
          <Header />
        </div>

        <div className="container">

          {/* parent */}
          <div className="rattle-list">

            {/* passing rattles in as props */}
            <RattleList rattles={this.state.rattles} />

          </div>

          <div className="rattle-form">

            {/* passing in addRattle as a callback function  */}
            <RattleForm addRattle={this.addRattle} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
