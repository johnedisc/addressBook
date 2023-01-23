// business logic for AddressBook
function AddressBook() {
  this.contacts = {};
}

AddressBook.prototype.addContact = function(contact) {
  
};

// business logic for Contact
function Contact(firstName, lastName, phoneNumber) {
  this.first = firstName;
  this.last = lastName;
  this.phone = phoneNumber;
  
}

Contact.prototype.fullName = function() {
 return `${this.firstName} ${this.lastName}`;
}


