import React, {Component} from "react";
import "../assets/styles/form.css";

class RattleForm extends Component{
    state = {
        username: " ",
        rattle: " ",
    };

    //use method that handles data change for all 
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addRattle(this.state);

        this.setState({
            username: " ",
            rattle: " ",
        });
    };

    render() {
        return (
            <div className="form-container">
                <h1>
                    Rattler &nbsp;
                    <i className="fas fa-kiwi-bird"></i>
                </h1>
                <form
                onSubmit={(event) => this.handleSubmit(event)}
                className="rattle-form"
                >
                    <label htmlFor="username">Username: </label>
                    <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                    <br></br>
                        <label htmlFor="rattle">Rattle: </label>
                    <input
                    name="rattle"
                    rows="4"
                    value={this.state.rattle}
                    onChange={this.handleChange}
                    />
                    <button type="submit">
                         Rattle it! &nbsp;
                        <i className="far fa-feather-alt"></i>
                    </button>
                </form>
            </div>
        );
    }
}

export default RattleForm;