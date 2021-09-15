import  { Component } from "react";
import "../assets/styles/rattle.css";

class Rattle extends Component {
    state = {
        likes: 0,
    };

    handleClick = (e) => {
        e.target.classList.remove("far");
        e.target.classList.add("fas", "full");

        this.setState((prevState)=> {
            return {
                likes: prevState.likes + 1,
            };
        });
    };

    render() {
        const { username, rattle } = this.props.rattleObj;
        return (
            <div className="rattle-box">
                <p className="rattle-content">{rattle}</p>
                <div className="footer">
                    <p>
                        {this.state.likes} {" "}
                        <i className="far fa-heart" onClick={this.handleClick}></i>
                    </p>
                    <p>@{username}</p>
                </div>
            </div>
        );
    }
 }
export default Rattle;