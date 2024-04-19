const {ApolloServer, gql} = require('apollo-server');

const {getAllUser,getRol} = require('../Servidor/db')


const persons = [
    {
        name: "Gerax",
        age: 20,
        street: "20 calle",
        city:"Guatemala"
    },
    {
        name:"Mirna",
        phone:"46668105",
        street:"14 calle",
        city:"Guatemala"
    }
]

/*! campo requerido*/ 
/*const typeDefs = gql`

 type Adress {
    street: String!
    city: String!
 }

 type Person {
    name: String!
    phone: String
    age: Int
    canDrink: Boolean
    adress: Adress
 }

 type Query {
    personCount: Int!
    allPersons: [Person]!
    findPerson(name: String!): Person
 }

 type Mutation {
    addPerson(
        name: String!
        phone: String
        street: String!
        city: String!
        age: Int
    ): Person
 }
`*/

const typeDefs = gql`

 type Roles {
    ID: Int!
    name: String!
 }

 type Users {
    ID: Int!
    name: String!
    password: String!
    rol: Roles
 }

 type Query {
    personCount: Int!
    allUsers: [Users]!
    getUser(name: String!): Users
 }

 type Mutation {
    addPerson(
        name: String!
        phone: String
        street: String!
        city: String!
        age: Int
    ): Users
 }
`

const resolvers = {
    Query: {
        personCount: () => persons.length,
        allUsers: async () => {
            const users = await getAllUser();
            console.log(users);
            return users
        },
        getUser: (root, args) => {
            const {name} = args
            return persons.find(persons => persons.name == name)
        }
    },
    Mutation: {
        addPerson: (root, args) => {
            const person = {...args}
            persons.push(person)
            return person
        }
    },
    Users: {
        rol : async (root) => {
            const rol = await getRol(root.IdRol)
            console.log(rol)
            return rol[0]
        } 
    }
    
}


/**
 * Person:{
        canDrink: (root) => root.age > 18,
        adress: (root) => {
            return {
                street: root.street,
                city: root.city
            }
        }
    }
 */
/**
 * Si quiero pasar algo es typeDefs: Nombre de mi clase
 * typedefs y resolvers siempre tienen que ir 
 */
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) =>
    console.log(`server redy at ${url}`)
)
