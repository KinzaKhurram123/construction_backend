const { json } = require("express");
const company = require("../models/company");
const Company = require("../models/company");
const bcrypt = require('bcryptjs')

exports.addCompany = async (req, res) => {
    const { name, email, createdAt, phoneNumber, number_of_site, number_of_admins, address, status, company_id } = req.body
    try {
        const companyExist = await Company.findOne({ email })
        if (companyExist) {
            return res.status(400).json({ message: "Company Already Registerd" })
        }
        const company = await Company.create({
            name, email, createdAt, phoneNumber, number_of_site, number_of_admins, address, status, company_id
        })
        if (company) {
            res.status(200).json({
                name: company.name,
                email: company.email,
                createdAt: company.createdAt,
                phoneNumber: company.phoneNumber,
                number_of_site: company.number_of_site,
                number_of_admins: company.number_of_admins,
                address: company.address,
                status: company.status,
                company_id: company.company_id
            })
        } else {
            res.status(400).json({ message: "Invalid Company data" })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server Error" })
    }

}
