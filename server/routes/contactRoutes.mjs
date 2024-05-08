import express from 'express';
const router = express.Router();
import { 
    getAllContacts, 
    getContactById, 
    createContact, 
    updateContactById, 
    deleteContactById, 
} from '../controllers/contactController.mjs';

router.route('/').get(getAllContacts).post(createContact);
router.route('/:contactId').get(getContactById).put(updateContactById).delete(deleteContactById);

router.use((req, res) => {
    return res.send('Wrong route!');
});

export default router;
