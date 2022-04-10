const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        orders: [Order]
    }
    
    type Product {
        _id: ID
        name: String
        price: Float
        description: String
        ingredients: [String]
        reviews: [Review]
        image: String
        quantity: Int
        category: Category
    }

    type Order {
      _id: ID
      purchaseDate: String
      products: [Product]
    }

    type Review {
        _id: ID
        rating: Int
        reviewText: String
        userId: User
    }

    type Category {
        _id: ID
        name: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Checkout {
      session: ID
    }

    type Query {
        user: User
        products(category: ID, name: String): [Product]
        product(_id: String): Product
        order(userId: ID): Order
        categories: [Category]
        checkout(products: [ID]): Checkout
    }

    type Mutation {
        login(email: String, password: String): Auth
        addUser(username: String, email: String, password: String): Auth
        addReview(rating: Int, reviewText: String, userId: ID, productId: ID): Review
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateProduct(_id: ID, quantity: Int): Product
        addOrder(products: [ID]): Order
    }

`;

module.exports = typeDefs;
