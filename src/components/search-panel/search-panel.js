import './search-panel.css';
import { Component } from 'react';

class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    render(){
        return(
            <div>
                <input 
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    type="text" 
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
            </div>
        );
    }
   
}
export default SearchPanel;