import Mirage from 'ember-cli-mirage';

export default function() {
  this.get('/api/v1/users', function(db, request) {
    return db.users;
  });

  this.get('/api/v1/users/:id', function(db, request) {
    return db.users.find(request.params.id);
  });

  this.post('/api/v1/users', function(db, request) {
    // let params = JSON.parse(request.requestBody);
    // console.log(request.requestBody);
    // return db.users.insert(params);

    return new Mirage.Response(422, {}, {
      errors: {
        first: [ 'First name is not long enough', 'Must be a string.' ]
      }
    });
  });

  this.get('/api/v1/pets/:id', function(db, request) {
    return db.pets.find(request.params.id);
  });

  this.get('/api/v1/companies/:id', function(db, request) {
    return db.companies.find(request.params.id);
  });

  // this.get('/api/users', function() {
  //   return {
  //     users: [
  //       {id: 1, name: 'Zelda'},
  //       {id: 2, name: 'Link'},
  //       {id: 3, name: 'Epona'},
  //     ]
  //   };
  // });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
