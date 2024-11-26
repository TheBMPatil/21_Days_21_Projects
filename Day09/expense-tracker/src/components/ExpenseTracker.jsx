import React, { useState } from 'react';
import './ExpenseTracker.css';  // Importing the CSS file

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    date: '',
    category: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addExpense = (e) => {
    e.preventDefault();

    // Check if the date is in the future
    const today = new Date();
    const enteredDate = new Date(formData.date);

    if (enteredDate > today) {
      setError('Date cannot be in the future.');
      return;
    }

    // Proceed if all validations pass
    if (formData.name && formData.amount && formData.date) {
      setExpenses([...expenses, { ...formData, id: Date.now() }]);
      setFormData({ name: '', amount: '', date: '', category: '' });
      setError(''); // Clear any previous errors
    }
  };

  const totalExpense = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);

  return (
    <div className="container mt-5">
      <h1>Expense Tracker</h1>
      <form onSubmit={addExpense} className="mb-3">
        <div className="mb-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Expense Name"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="form-control"
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary">Add Expense</button>
      </form>

      <h2>Total Expenses: ₹{totalExpense}</h2>
      <ul className="list-group">
        {expenses.map((expense) => (
          <li key={expense.id} className="list-group-item">
            {expense.name} - ₹{expense.amount} on {expense.date} [  {expense.category} ]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
