import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type User {
    email: String!
    password: String!
    name: String
  }

  type Mutation {
    login(email: String!, password: String!): User
  }
`;

const books = [
  {
    title: 'Nesnesitelná lehkost bytí',
    author: 'Milan Kundera',
  },
  {
    title: 'Meu Pé de Laranja Lima',
    author: 'José Mauro de Vasconcelos',
  },
  {
    title: '설국',
    author: '가와바타 야스나리',
  },
];

const users = [
  {
    email: 'atom@101.inc',
    password: '1111',
    name: '아톰',
  }
]

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    login: (_: any, args: { email: any; password: any; }) => {
      const { email, password } = args;

      const user = users.filter(user => user.email === email && user.password === password);

      if (!user) {
        return null;
      }
      
      return user[0];
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

server.listen().then(({ url }) => {
  console.log('Hello Creator Platform!')
  console.log(`🚀 Server ready at ${url}`);
});
