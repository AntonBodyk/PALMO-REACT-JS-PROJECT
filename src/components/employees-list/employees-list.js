import EmployeesListItems from '../employees-list-items/employees-list-items';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) =>{
    const elements = data.map(items =>{
        const {id, ...itemProps} = items;
        return(
            <EmployeesListItems 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}/>
        )
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}
export default EmployeesList;