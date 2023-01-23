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

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// business logic for Contact
function Contact(firstName,lastName,phoneNumber) {
  this.first = firstName;
  this.last = lastName;
  this.number = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.first + ' ' + this.last; 
}

Contact.prototype.update = function(firstName,lastName,phoneNumber) {
  
}

let addressBook = new AddressBook();
let george = new Contact('george','gwedel','483-384-3482');
let miles = new Contact('miles','davis','432-542-9842');
addressBook.addContact(george);
addressBook.addContact(miles);

george.first = 'jorge';
console.log(addressBook.contacts['1'].first = 'georgie');
console.log(george)

