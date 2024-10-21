import express from "express";

const router = express.Router();

// GET /api/contacts
router.get("/", (req, res) => {
  res.status(200).json({ message: "Contacts List" });
});

// GET /api/contacts/:id
router.get("/:id", (req, res) => {
  if (req.params.id) {
    res.status(200).json({ message: `Get Contact for ${req.params.id}` });
  } else {
    res.status(400).json({ message: "Contact not found" });
  }
});

// POST /api/contacts
router.post("/", (req, res) => {
  res.status(201).json({ message: "Contact successfully created", contact: req.body });
});

// PUT /api/contacts
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Updated Contact for ${req.params.id}`, contact: req.body });
  console.log(req.body);
});

router.delete("/:id", (req, res) => {
  res.status(204).send();
});

export default router;
