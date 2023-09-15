const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const totalExpense = document.getElementById('totalExpense');

let expenses = [];
let total = 0;

expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const expenseName = document.getElementById('expenseName').value;
  const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

  if (expenseName && expenseAmount) {
    const expense = {
      name: expenseName,
      amount: expenseAmount
    };

    expenses.push(expense);
    updateExpenseList();
    updateTotalExpense();
    expenseForm.reset();
  } else {
    alert('Please fill out both fields.');
  }
});

function updateExpenseList() {
  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.innerHTML = `
      ${expense.name}: $${expense.amount.toFixed(2)}
      <button type="button" class="btn btn-danger btn-sm float-right" onclick="removeExpense(${index})">Remove</button>
    `;
    expenseList.appendChild(listItem);
  });
}

function updateTotalExpense() {
  total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalExpense.textContent = total.toFixed(2);
}

function removeExpense(index) {
  expenses.splice(index, 1);
  updateExpenseList();
  updateTotalExpense();
}
