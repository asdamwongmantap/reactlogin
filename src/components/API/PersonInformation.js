import React, {Component} from 'react';
import axios from "axios/index";
// import Layout from '../../components/UI/Layout';
// import Aux from '../../components/hoc/Auxiliary';
// import Header from '../../components/Header';
class PersonInformation extends Component {
    state = {
        title: this.props.title,
        lastname: this.props.lastname,
        id: this.props.id
    };
    // Update Person w/ axios put() method.
    updatePersonHandler = () => {


        const ID = this.state.id;
        // const firstname = this.state.firstname;
        const data = {
            title: this.state.title,
            lastname: this.state.lastname

        };

        // Rest Api URL
        axios.put("http://localhost:5001/api/v1/todos/" + ID, data)
            .then(response => {
                console.log(response); // checking response in console.log

                alert("Successfully Updated! USERNAME: " + this.state.title);
            });
    };

    render() {
        // There is an action button to set input values to updatePersonHandler() method and put it into Rest Api.
        return (
            <tr>
                <th>{this.props.id}</th>
                <th><input type="text" className="form-control" value={this.state.title}
                           onChange={(event) => this.setState({title: event.target.value})}/></th>
                <th><input type="text" className="form-control" value={this.state.lastname}
                           onChange={(event) => this.setState({lastname: event.target.value})}/></th>
                <th>

                    <button className="btn btn-success btn-sm" onClick={this.updatePersonHandler}>
                        <i className="fa fa-refresh"></i> Apply
                    </button>
                </th>
            </tr>
        );
    }
}

export default PersonInformation;