// business logic for addressBook
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignId = function() {
  return this.currentId += 1;
}

// business logic for Contact
function Contact(firstName,lastName,phoneNumber) {
  this.first = firstName;
  this.last = lastName;
  this.number = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.first + ' ' + this.last; 
}

let addressBook = new AddressBook();
let george = new Contact('george','gwedel','483-384-3482');
let miles = new Contact('miles','davis','432-542-9842');
addressBook.addContact(george);
addressBook.addContact(miles);

console.log(addressBook.contacts);
