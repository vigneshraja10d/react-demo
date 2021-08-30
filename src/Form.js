import './App.css';
import React, { Fragment, Component } from 'react';
import { Route, Link, push } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import axios from "axios"
import { Button } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel, Input, FormHelperText } from '@material-ui/core';
import { history } from "./historyUtil"
// import { useHistory } from "react-router-dom";

class Form extends Component {

    state = {
        id: 0,
        name: "",
        contact: "",
        address: ""
    }

    componentDidMount(props) {
        if (this.props && this.props.data) {
            const { name, address, contact, id } = this.props.data
            this.setState({ name, address, contact, id })
        }
    }

    onBack = () => {
        history.push('/')
    }

    index = (props) => {
        if (Object.keys(this.props.data).length > 0) {
            return <div> <Button type="submit" variant="contained" color="primary" onClick={this.onPut} >UPDATE</Button>
                         <Button type="submit" variant="contained" color="primary" onClick={this.onBack}>Back</Button>
                   </div>
        } else {
            return (
                <Button type="submit" variant="contained" color="primary" onClick={this.onPost}>
                    SUBMIT
                </Button>
            )
        }
    }

    onInput = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    onPost = () => {
        axios.post("http://127.0.0.1:5000/user", null, { params: this.state }).then((res) => res.data === "values added" && window.location.reload())
    }

    onPut = () => {
        axios.put(`http://127.0.0.1:5000/user/${this.state.id}`, null, { params: this.state }).then((res) => console.log("ss", res))
    }

    refreshPage = () => {
        window.location.reload();
    }


    render() {
        const { name, address, contact } = this.state
        return (
            <div>

                <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input id="my-input" name="name" aria-describedby="my-helper-text" onChange={this.onInput} value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Contact</InputLabel>
                    <Input id="my-input" name="contact" aria-describedby="my-helper-text" onChange={this.onInput} value={contact} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Address</InputLabel>
                    <Input id="my-input" name="address" aria-describedby="my-helper-text" onChange={this.onInput} value={address} />
                </FormControl>
                {(this.props && this.props.data) &&
                    this.index(this.props)}
                    {this.onPut(this.props)}
            </div>
        );
    }
}


export default Form;
