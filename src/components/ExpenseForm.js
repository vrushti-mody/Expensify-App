import ReactDOM from 'react-dom'
import React from 'react'
import moment from 'moment'
0
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description: props.expense? props.expense.description : '',
            note:props.expense? props.expense.note :'',
            amount:props.expense? ((props.expense.amount)/100).toString() :'',
            createdAt: props.expense? moment(props.expense.createdAt) : moment(),
            focused:false,
            error:''
        }
    }

onSubmit=(e)=>{
    e.preventDefault()
    if(!this.state.description || !this.state.amount){

        this.setState(()=>({error:'Please provide description and amount'}))
    }
    else{
        this.setState(()=>({error:''}))
        this.props.onSubmit({
            description:this.state.description,
            note:this.state.note,
            amount:parseFloat(this.state.amount,10)*100,
            createdAt: this.state.createdAt.valueOf()
        })
    }
    }

onDescriptionChange=(e)=>{
const desc= e.target.value;
this.setState(()=>({description:desc}))
}

onNoteChange=(e)=>{
    const note= e.target.value;
    this.setState(()=>({note}))
    }
onAmountChange=(e)=>{
    const amount= e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      
        this.setState(()=>({amount}))
    }
}
onDateChange = (createdAt)=>{
    if(createdAt){
        this.setState(()=>({createdAt}))
    }
    
}
onFocusChange =({focused})=>{
    this.setState(()=>({focused}))
}
render(){
    return(
        <form className="form">
        { this.state.error && <p className="form__error">{this.state.error }</p>}
            <input type="text"
            placeholder="Enter Title Here"
            autoFocus
            className="text-input"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            ></input>
            <input type="text"
            className="text-input"
            placeholder="Enter Amount Here"
            value={this.state.amount}
            onChange={this.onAmountChange}>
            </input>
            <SingleDatePicker
            date = {this.state.createdAt}
            onDateChange ={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            />
            <textarea
            rows="10"
            className='text-input'
            placeholder="Enter Notes here"
            value={this.state.note}
            onChange={this.onNoteChange}>
            </textarea>
            <div>
            <button className="button form__button" onClick={this.onSubmit}>{this.props.expense ? 'Edit Expense':'Save Expense'}</button>
            </div>

        </form>
)
}
}

