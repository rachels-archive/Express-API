import express from "express";
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";
import validateToken from "../middleware/validateTokenHandler.js";
const router = express.Router();

// use middleware for all routes
router.use(validateToken);

router.route("/").get(getAllContacts).post(createContact);

router.route("/:id").get(getContactById).put(updateContact).delete(deleteContact);

export default router;
