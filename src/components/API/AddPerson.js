/**
 * Created by caglarergul on 6.12.2017.
 */
import React , {Component} from 'react';
import axios from "axios/index";
import Layout from '../../components/UI/Layout';
import Aux from '../../components/hoc/Auxiliary';
import Header from '../../components/Header';

//
class AddPerson extends Component {

    state = {
        title: '',
        lastname: ''

    };

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            lastname: this.state.lastname
        };
        // const Firstname = data.firstname;
        axios.post("http://localhost:5001/api/v1/todos/", data)
        // axios.post("https://rest-api-example-go.herokuapp.com/people", data)
            .then(response => {
                console.log(response);
                alert(data.title);
                window.location.reload();
            });

    };

    render() {
        return (
            <Aux>
            <Layout>
            <Header/>
            <div style={{marginTop: '10px'}}>

            <h1>Add a new person</h1>

            
            <div className="col-lg-8 offset-lg-2" style={{marginTop:'30px'}}>
                <div className="form-group">
                    Firstname: <input type="text" className="form-control" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                </div>
                <div className="form-group">
                    Lastname: <input type="text" className="form-control" value={this.state.lastname} onChange={(event) => this.setState({lastname: event.target.value})}/>
                </div>
                {/* <div className="form-group">
                    Title: <input type="text" name="title"/>
                </div> */}
                <button className="btn btn-success btn-block" onClick={this.postDataHandler}><i className="fa fa-plus"></i> Add Person</button>
            </div>
            
            
            </div>
            </Layout>
            </Aux>
        )
    }
}

export default AddPerson;