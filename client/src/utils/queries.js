import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      price
      description           
      quantity
      image
      ingredients
      category {
        _id
      }
      reviews {
        _id
        rating
        reviewText
        userId {
          _id
          username
        }
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
      reviews {
        _id
        rating
        reviewText
        userId {
          _id
          username
        }
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

