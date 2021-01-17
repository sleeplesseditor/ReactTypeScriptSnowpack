import React, { Component } from 'react';
import './Table.scss';

interface TableProps {
    data: Student[];
    activeName: string;
    updateData: Function;
}

interface Student {
    name: string;
    height: string;
    age: string;
}

interface TableState {
    name?: string;
    height?: string;
    age?: string;
}

class Table extends Component <TableProps> {
    state: TableState = {
		name: '',
		height: '',
		age: ''
    }
    
    handleSubmit = (): void => {
        this.props.updateData([...this.props.data, this.state])
        this.setState({
            name: '',
            height: '',
            age: ''
        })
    }

    handleChange = (event: any): void => {
		this.setState({ [event.target.name]: event.target.value })
	}

    handleRemove = (event: any): void => {
        const newData = this.props.data.filter((d: any) => {
            return d.name !== event.target.name;
        });
        this.props.updateData(newData);
    }

    renderRows(): JSX.Element[]{
        return (
            this.props.data.map((student: Student) => {
                const background = (student.name === this.props.activeName) ? 'grey' : 'white';
                return (
                    <tr key={student.name} className={`table-form__row__${background}`}>
                        <td className='table-form__table-data'>{student.name}</td>
                        <td className='table-form__table-data'>{student.height}</td>
                        <td className='table-form__table-data'>{student.age}</td>
                        <td>
                            <button 
                                className='table-form__table-data__button'
                                name={student.name}
                                onClick={this.handleRemove}
                                type='button'
                            >
                                Remove
                            </button>
                        </td>
                    </tr>
                )
            })
        )
    }

    render(){
        return (
            <div className='table-form'>
                <form className='table-form__row'>
                    <input 
                        className='table-form__row__input'
                        placeholder="Name"
                        name={'name'}
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        className='table-form__row__input'
                        placeholder="Height"
                        name={'height'}
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <input 
                        className='table-form__row__input'
                        placeholder="Age"
                        name={'age'}
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <button
                        className='table-form__row__button'
                        type='button'
                        onClick={this.handleSubmit}
                    >
                        Add
                    </button>
                    <table className='table-form__table'>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default Table;