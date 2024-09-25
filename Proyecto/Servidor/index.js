const {ApolloServer, gql} = require('apollo-server');

const {getAllUser,
    getRol,
    validateUser,
    createNewUser,
    getAllItems, 
    getPage,
    getPromotions,
    setNewItem,
    getOneItem,
    updateItem,
    deleteUser,
    validateEmail,
    getCategories,
    getCategory,
    setCategory,
    setCategoryItem,
    getItemsPerCategory } = require('../Servidor/db')


const typeDefs = gql`

 type Roles {
    ID: Int!
    name: String!
 }

 type Users {
    email: String!
    name: String!
    lastName: String!
    password: String!
    rol: Roles
 }

 type Pages {
    idPage: Int!
    name: String!
    admin: Users
 }

 type Items {
    idItems: Int!
    name: String!
    quantity: Int
    price: Float!
    description: String
    promotions: [Promotions]
 }

 type Promotions {
    idPromotions: Int!
    percentage: Float
    state: String!
    name: String!
    discount: Float
 }

 type Categories {
    idCategory: Int!
    name: String
    Page: Pages
    Items: [Items]
 }

 type Query {
    allUsers: [Users]!
    validateCredentials(
        email: String!
        password: String!
    ): Users
    getItems: [Items]!
    getOneItem(
        idItem: Int!
    ): Items
    validateEmail(
        email: String!
    ): Users
    getCategories: [Categories]!
    getCategory (
        idCategory: Int!
    ): Categories
 }

 type UserValidationResult {
    status: Boolean!
    message: String
    user: Users
  }

 type StatusItemInsert {
    status: Boolean!
    message: String
    Item: Items
 }

 type statusCategoryInsert {
    status: Boolean!
    message: String
    Category: Categories
 }

 type StatusUserDelete {
    status: Boolean!
    message: String
 }

 type StatusInserCategoyItem {
    status: Boolean!
    message: String
 }

 type Mutation {
    addnewUser(
        email: String!
        nombre: String!
        appelido: String
        password: String!
    ): UserValidationResult
    addNewItem(
        name: String!
        quantity: Int
        price: Float!
        description: String
    ): StatusItemInsert
    updateItem(
        idItem: Int!
        name: String!
        quantity: Int
        price: Float!
        description: String
    ): Items
    deleteUser(
        email: String!
    ): StatusUserDelete
    addNewCategory(
        name: String!
        idPage: Int!
    ): statusCategoryInsert
    addNewCategoryItem(
        idCategory: Int!
        idItem: Int!
    ): StatusInserCategoyItem

 }
`

const resolvers = {
    Query: {
        allUsers: async () => {
            const users = await getAllUser()
            return users
        },
        validateCredentials: async (root, args) => {
            const {email, password} = args
            const user = await validateUser(email,password)
            return user[0]
        },
        getItems: async () => {
            const items = await getAllItems()
            return items
        },
        getOneItem: async (root, args) =>{
            const {idItem} = args
            const item = await getOneItem(idItem)
            return item[0]
        },
        validateEmail: async (root, args) => {
            const {email} = args
            const user = await validateEmail(email)
            return user[0]
        },
        getCategories: async (root, args) => {
            const categories = await getCategories()
            return categories
        },
        getCategory: async (root, args) => {
            const {idCategory} = args
            const category = await getCategory(idCategory)
            return category[0]
        }
    },
    Mutation: {
        addnewUser: async (root, args) => {
            const user = {...args}
            const response = await validateUser(user.email,user.password)
            if(response.length<1){
                const result = await createNewUser(user)
                return {
                    status: true,
                    message: "Usuario creado con exito",
                    user:result
                }
            }else{
                return {
                    status: false,
                    message: "El usuario ya existe"
                }
            }
        },
        addNewItem: async (root, args) => {
            const item = {...args}
            const response = await setNewItem(item)
            return {
                status: true,
                message: "Se creo con exito el objeto",
                Item: response
            }
        },
        updateItem: async (root, args) =>{
            const newItem = {...args}
            const response = await updateItem(newItem)
            return response
        },
        deleteUser: async (root, args) => {
            const {email} = args
            const response = await deleteUser(email)
            if(response.rowCount > 0){
                return {
                    status: true,
                    message: "Usuario eliminado con exito"
                }
            }
            else{
                return {
                    status: false,
                    message: "Usuario no encontrado"
                }
            }
            
        },
        addNewCategory: async (root, args) => {
            const {name, idPage} = args
            const response = await setCategory(name, idPage)
            if(response.length > 0){
                return {
                    status: true,
                    message: "Se inserto con exito",
                    Category: response[0]
                }
            }else{
                return {
                    status: false,
                    message: "Problema insertando"
                }
            }
        },
        addNewCategoryItem: async (root, args) => {
            const {idCategory, idItem} = args
            const response = await setCategoryItem(idCategory, idItem)
            if(response > 0){
                return {
                    status: true,
                    message: "Se agrego con exito la relacion"
                }
            }else{
                return {
                    status: false,
                    message: "problema al insertar"
                }
            }
        }
    },
    Users: {
        rol : async (root) => {
            const rol = await getRol(root.IdRol)
            return rol[0]
        } 
    },
    Items : {
        promotions: async (root) => {
            const promotions = await getPromotions(root.idItems)
            return promotions
        }
    },
    Categories : {
        Page: async (root) => {
            const page = await getPage(root.idPage)
            return page[0]
        },
        Items: async (root) => {
            const items = await getItemsPerCategory(root.idCategory)
            return items
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
