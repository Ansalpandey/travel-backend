const Contact = require('../model/contact.model');

exports.createQuery = (req, res) => {
    const {name, email, message, phone, subject} = req.body;

    if (!name || !email || !message || !phone || !subject) {
        res.status(400).send("All input is required");
    }

    let newContact = new Contact({
        name,
        email,
        message,
        phone,
        subject,
    });

    newContact.save().then((contact) => {
        res.status(201).send(contact);
    }).catch((error) => {
        res.status(500).send(error);
    });
};

exports.getQueries = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).send(contacts);
    } catch (error) {
        res.status(500, error);
    }
};