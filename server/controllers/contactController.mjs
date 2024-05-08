import Contact from '../models/Contact.mjs';

// Create a new contact
export async function createContact(req, res) {
  try {
    const { first, last, email, inquiry, message } = req.body;

    // Create a new contact entry
    const newContact = await Contact.create({ first, last, email, inquiry, message }, { runValidators: true, new: true });

    res.status(201).json({ success: true, data: newContact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}

// Retrieve all contacts
export async function getAllContacts(req, res) {
  try {
    // Retrieve all contacts
    const contacts = await Contact.find();

    res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}

// Retrieve a single contact by ID
export async function getContactById(req, res) {
  try {
    const contactId = req.params.contactId;

    // Find a contact by ID
    const contact = await Contact.findById(contactId);

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}

// Update a contact by ID
export async function updateContactById(req, res) {
  try {
    const contactId = req.params.contactId;
    const updateData = req.body;

    // Update a contact by ID
    const updatedContact = await Contact.findByIdAndUpdate(contactId, updateData, { new: true });

    if (!updatedContact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    res.status(200).json({ success: true, data: updatedContact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}

// Delete a contact by ID
export async function deleteContactById(req, res) {
  try {
    const contactId = req.params.contactId;

    // Delete a contact by ID
    const deletedContact = await Contact.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    res.status(200).json({ success: true, message: 'Contact deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
