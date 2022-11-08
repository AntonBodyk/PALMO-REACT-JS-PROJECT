import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmplooyeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Anton Grebenyuk', salary: 1500, increase: false, like: false, id: 1},
                {name: 'Andrew Bondarenko', salary: 1000, increase: false, like: false, id: 2},
                {name: 'Yaroslav Popov', salary: 500, increase: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) =>{
        this.setState(({data}) => ({
            data: data.map(items => {
                if(items.id === id){
                    return {...items, increase: !items.increase}
                }
                return items;
            })
        }))
    }
    onToggleRise = (id) =>{
        this.setState(({data}) => ({
            data: data.map(items => {
                if(items.id === id){
                    return {...items, like: !items.like}
                }
                return items;
            })
        }))
    }
    searchItem = (items, term) => {
        if(term.length === 0){
            return items;
        }
        return items.filter(item =>{
            return item.name.indexOf(term) > -1
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term});
    }
    filterPost = (items, filter) => {
        switch(filter) {
            case 'like':
                return items.filter(items => items.like);
            case 'more1000': 
                return items.filter(items => items.salary > 1000);
            default: 
                return items;
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter})
    }
    render(){
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(items => items.increase).length;
        const visibleData = this.filterPost(this.searchItem(data, term), filter);
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onAdd={this.addItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmplooyeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;