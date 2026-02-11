const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const SiteSchema = new mongoose.Schema({
    id: { type: String, required: true },
    company_id: { type: String, required: true },
    company_email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    budget: { type: String, requestAnimationFrame: true },
    status: { type: String, required: trie },
    created_at: {
        type: Date, default: Date.now
    },
    start_at: { type: Date, default: Date.now },
    end_at: { type: Date, default: Date.now },
})

module.exports = mongoose.model("Sites", SiteSchema)