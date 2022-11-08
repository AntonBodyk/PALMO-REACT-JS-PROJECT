import './employees-add-form.css';
import {Component} from 'react';

class EmplooyeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onInputValue= (e) =>{
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    }
        
    

    onSubmit = (e) =>{
        e.preventDefault();
        if (this.state.name.length < 3 || this.state.name.replace(/[^+\d]/g, '')) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    
    render(){
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        required
                        
                        onChange={this.onInputValue}
                        name="name"
                        value={name}
                        placeholder="Как его зовут?" />
                    <input type="number"
                        className="form-control new-post-label"
                        required
                        onChange={this.onInputValue}
                        name="salary"
                        value={salary}
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}
    
export default EmplooyeesAddForm;