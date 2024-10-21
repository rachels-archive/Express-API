// @desc Get all contacts
// @route GET /api/contacts
// @access public

export const getAllContacts = (req, res) => {
  res.status(200).json({ message: "Contacts List" });
};

export const getContactById = (req, res) => {
  const contactId = req.params.id;
  if (contactId) {
    res.status(200).json({ message: `Get Contact for ${contactId}` });
  } else {
    res.status(400).json({ message: "Contact not found" });
  }
};

export const createContact = (req, res) => {
  res.status(201).json({ message: "Contact successfully created" });
};

export const updateContact = (req, res) => {
  const contactId = req.params.id;
  res.status(200).json({ message: `Updated Contact for ${contactId}` });
};

export const deleteContact = (req, res) => {
  res.status(204).send();
};
