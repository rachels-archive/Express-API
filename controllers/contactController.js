import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

// @desc Get all contacts
// @route GET /api/contacts
// @access public
export const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc Get a contact by id
// @route GET /api/contacts/:id
// @access public
export const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404).json({ message: "Contact Not Found!" });
  }
  res.status(200).json(contact);
});

// @desc Add a contact
// @route POST /api/contacts
// @access public
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400).json({ message: "All fields are required!" });
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(201).json(contact);
});

// @desc Update a contact
// @route PUT /api/contacts
// @access public
export const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404).json({ message: "Contact Not Found!" });
  }

  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedContact);
});

// @desc Delete a contact
// @route DELETE /api/contacts
// @access public
export const deleteContact = asyncHandler(async (req, res) => {
  const deletedContact = await Contact.findByIdAndDelete(req.params.id);
  if (!deletedContact) {
    return res.status(404).json({ message: "Contact not found." });
  }
  res.status(204).send("Contact Successfully Deleted!");
});
