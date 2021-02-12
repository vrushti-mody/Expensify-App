const getExpensesTotal = (expenses )=>{
    let total = 0
     expenses.forEach((expense)=>{
       total = total+expense.amount
    })
    return total/100
}

export default getExpensesTotal