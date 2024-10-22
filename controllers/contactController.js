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
  const contactId = req.params.id;
  if (contactId) {
    res.status(200).json({ message: `Get Contact for ${contactId}` });
  } else {
    res.status(400).json({ message: "Contact not found" });
  }
});

// @desc Add a contact
// @route POST /api/contacts
// @access public
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields required");
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
  const contactId = req.params.id;
  res.status(200).json({ message: `Updated Contact for ${contactId}` });
});

// @desc Delete a contact
// @route DELETE /api/contacts
// @access public
export const deleteContact = asyncHandler(async (req, res) => {
  res.status(204).send();
});
