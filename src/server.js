import { createServer, Model, Response } from 'miragejs';

export function makeServer() {
  let server = createServer({
    models: {
      user: Model,
      activity: Model, // Add a model for activities
    },
    
    seeds(server) {
      console.log("Working");
      server.create('user', { 
        id: 5,
        name: 'Alex',
        password: 'AlexPassword',
        role: 'USER',
        activities: [],
      });
      server.create('user', { 
        id: 6,
        name: 'Anna',
        password: 'AnnaPassword',
        role: 'ADMIN',
        activities: [],
      });
      server.create('user', {
        id: 7,
        name: 'Roger',
        password: 'RogerPassword',
        role: 'USER',
        activities: [],
      });
      /*
      
export interface Activity{
    id:string;
    title:string;
    content:string;
    date:Date;
	maxCount: number;	
    
}*/
      
      server.create('activity', { 
        id: 1,
        title: 'Boxing',
        content: 'Boxing in the mud',
        date: new Date(2023, 5, 20), 
        maxCount: 20,
      });
      server.create('activity', { 
        id: 2,
        title: 'Spinning',
        content: 'Indoor cycling',
        date: new Date(2023, 8, 5),
        maxCount: 7,
      });
      server.create('activity', {
        id: 3, 
        title: 'Gym',
        content: 'Strength training',
        date: new Date(2023, 9, 19),
        maxCount: 2,
      });
      server.create('activity', { 
        id: 4,
        title: 'Aerobics',
        content: 'Cardio workout',
        date: new Date(2023, 9, 13),
        maxCount: 15,
      });
    },

    routes() {
      this.get('/user', (schema) => {
        return new Response(200, { 'Content-Type': 'application/json' }, schema.db.users);
      });

      this.get('/activities', (schema) => {
        return new Response(200, { 'Content-Type': 'application/json' }, schema.db.activities);
      });

      console.log("TestTest");
    },
  });

  return server;
}



/////TEST 2

// import { createServer, Model, Response, Server, JSONAPISerializer } from 'miragejs';

// export function makeServer(): Server {
//   let server = createServer({
//     serializers: {
//       application: JSONAPISerializer,
//     },

//     models: {
//       user: Model,
//     },
    
//     seeds(server): void {
//       console.log("Working");
//       server.create('user', { name: 'Bob' });
//       server.create('user', { name: 'Alice' });
//     },

//     routes(): void {
//       this.get('/users', (schema): Response => {
//         console.log("TestTest");
//         const users = schema.db.users;
//         return new Response(200, { 'Content-Type': 'application/json' }, { users });
//       });
//     },
//   });

//   return server;
// }



