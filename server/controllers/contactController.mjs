import Contact from '../models/Contact.mjs';

export async function submitContactForm(req, res) {
  try {
    const { first, last, email, message } = req.body;

    // Create a new contact entry
    const newContact = await Contact.create({ first, last, email, message });

    res.status(201).json(newContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getAllContacts(req, res) {
  try {
    // Retrieve all contacts
    const contacts = await Contact.find();

    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getContactById(req, res) {
  try {
    const contactId = req.params.contactId;

    // Find a contact by ID
    const contact = await Contact.findById(contactId);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function updateContactById(req, res) {
  try {
    const contactId = req.params.contactId;
    const updateData = req.body;

    // Update a contact by ID
    const updatedContact = await Contact.findByIdAndUpdate(contactId, updateData, { new: true });

    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json(updatedContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function deleteContactById(req, res) {
  try {
    const contactId = req.params.contactId;

    // Delete a contact by ID
    const deletedContact = await Contact.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
