import React, { Fragment, Component } from 'react';
import { Route, Link, push } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import axios from "axios"
import { Button } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { InputLabel, Input, FormHelperText } from '@material-ui/core';
import Form from './Form';
import { history } from './historyUtil'

class Table extends Component {

    state = {
        data: {},
        rows: [],
        checked: false
    }
    columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'contact', headerName: 'Contact', width: 130 },
        {
            field: 'address',
            headerName: 'Address',
            type: 'number',
            width: 90,
        }]

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/user").then((res) => this.setState({
            rows: res.data.return
        }))
    }

    deleteRow = (id, e) => {
        axios.delete(`http://127.0.0.1:5000/user/${this.state.data.id}`).then((res) => res.data === "Deleted" && window.location.reload());
        const rows = this.state.rows.filter(item => item.id !== id);
        this.setState({ rows });
    }

    handleOnClick = () => history.push('/edit')

    /*
     handleOnClick = () => history.push('/edit')
    handleOnClick = ({location}) => { 
        <div>
        const history = useHistory();
        this.setState({ checked: !this.state.checked })
        <button onClick={ () => {history.goBack();}}>Go back</button>
        </div>

    }*/

    onRowSelected = ({ data }) => {
        if (data["name"] !== this.state.data["name"]) {
            this.setState({ data })
        } else {
            this.setState({ data: {} })
        }
    }

    dataTable({ rows = rows, columns = columns }) {
        return (
            <div style={{ height: 400, width: '100%' }}>
                <Button disabled={Object.keys(this.state.data).length > 0 && true} variant="contained" color="primary" onClick={this.handleOnClick}> ADD </Button>
                <Button variant="contained" color="primary" onClick={this.handleOnClick} > EDIT </Button>
                <Button variant="contained" color="primary" onClick={this.deleteRow}> DELETE </Button>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection onRowSelected={this.onRowSelected} />
            </div>
        );
    }

    render(){
        return this.dataTable({
            rows: this.state.rows,
            columns: this.columns,
        })
    }
}


export default Table;
