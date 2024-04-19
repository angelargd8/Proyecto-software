const {ApolloServer, gql} = require('apollo-server');

const {createUser} = require('../Servidor/connection')


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
const typeDefs = gql`

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
`

const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: () => persons,
        findPerson: (root, args) => {
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
    Person:{
        canDrink: (root) => root.age > 18,
        adress: (root) => {
            return {
                street: root.street,
                city: root.city
            }
        }
    }
}

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
