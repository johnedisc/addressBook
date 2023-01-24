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

// ui

let addressBook = new AddressBook();

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedFirstName = document.querySelector("input#new-first-name").value;
  const inputtedLastName = document.querySelector("input#new-last-name").value;
  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;
  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
  addressBook.addContact(newContact);
  console.log(addressBook.contacts);

  let contactKeys = Object.keys(addressBook.contacts);
  let contactKeyStr = '';
  contactKeys.forEach((key) => {
    console.log(addressBook.contacts[key]);
    let innerKeys = Object.keys(addressBook.contacts[key])
    innerKeys.forEach((key2) => {
      contactKeyStr = contactKeyStr.concat(key + ' (' + key2 + ': ' + addressBook.contacts[key][key2] + ')\n') 
    });
  });
  console.log(contactKeyStr);
}

window.addEventListener("load", function (){
  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);
});
