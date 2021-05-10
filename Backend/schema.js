const { gql } = require('apollo-server');


const typeDefs = gql`
type Query {
    movie(movieName: String!): Movie
    movies: [Movie]
}
type Movie {
    title: String!
    year: Int!
    poster: String!
    genre: String!
    director: String!
    plot: String!
  }
`;

module.exports = typeDefs;