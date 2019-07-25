import React, {Component} from 'react';
import axios from 'axios';
import Person from './Person';
import Layout from '../../components/UI/Layout';
import Aux from '../../components/hoc/Auxiliary';
import Header from '../../components/Header';
class GetPeople extends Component {
    state = {people: []};


    componentDidMount() {
        axios.get("http://localhost:5001/api/v1/todos/").then(response => {
            // axios.get("https://rest-api-example-go.herokuapp.com/people").then(response => {
            const people = response.data;
            // console.log(people);
            const updatedPeople = people.map(persons => {
                return {
                    ...persons
                }
            });


            this.setState({people: updatedPeople});

        })
            .catch(err => {
                //console.log(err);
                this.setState({error : true});
            });
    }


    render() {

        let people = this.state.people.map(person => {
            return <Person key={person.id} id={person.id} firstname={person.title} lastname={person.lastname} />;
        });

        return(
            <Aux>
            <Layout>
            <Header/>
            <div style={{marginTop: '10px'}}>

                <h1>People</h1>
                <div>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                        <th>#</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        </thead>
                        <tbody> {people}</tbody>

                    </table>
                </div>

            </div>
            </Layout>
            </Aux>
            
        );
    }
}

export default GetPeople;