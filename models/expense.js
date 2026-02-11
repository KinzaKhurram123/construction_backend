const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    id: { type: String, required: true },
    company_id: { type: String, required: true },
    site_id: { type: String, required: true },
    amount: { type: String, required: true },
    expense: { type: String, required: true },
    head_id: { type: String, required: true },
    expense_date: { type: Date, required: true, default: Date.now },
    paid_by: { type: String, required: true },
    remarks: { type: String, required: true }
})

mongoose.exports = mongoose.model("Expense", ExpenseSchema)