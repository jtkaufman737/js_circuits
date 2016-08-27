var contacts = [
  {firstName: 'John', lastName: 'Doe', phone: '(512) 355-0453', email: 'johndoe@email.com' },
  {firstName: 'Jane', lastName: 'Doe', phone: '(312) 641-2203', email: 'janedoe@email.com' },
  {firstName: 'Suzie', lastName: 'Smith', phone: '(415) 604-4219', email: 'suziesmith@email.com'}
];

function listContacts(x){
 for (i=0; i<x.length; i++) {
   console.log(x[i].firstName + ' ' + x[i].lastName);
 }
};

  listContacts(contacts);
