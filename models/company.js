const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')


const CompanySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        phoneNumber: {
            type: String,
            required: false,
        },
        number_of_site: { type: Number, required: true },
        number_of_admins: { type: Number, required: true },
        address: { type: String, required: false },
        status: { type: String, required: true },
        company_id: { type: Number, required: true }
    },
    { timestamps: true },
)