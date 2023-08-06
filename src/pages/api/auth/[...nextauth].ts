import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import { JWTDecodeParams } from "next-auth/jwt";
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  jwt: {
    secret: process.env.SECRET,
    encode: async ({ secret, token, maxAge }) => {
      const jwtClaims = {
        sub: token?.id?.toString(),
        name: token?.name,
        email: token?.email,
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "x-hasura-user-id": token?.id,
        },
      };
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: "HS256" });
      return encodedToken;
    },
    decode: async ({ secret, token, maxAge }: JWTDecodeParams) => {
      //@ts-ignore
      const decodedToken = jwt.verify(token, secret, {
        algorithms: ["HS256"],
      });
      return decodedToken;
    },
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      const isUserSignedIn = user ? true : false;
      // make a http call to our graphql api
      // store this in postgres

      if (isUserSignedIn) {
        token.id = user.id.toString();
      }
      return Promise.resolve(token);
    },
    async session({ session, token }) {
      const secret = process.env.SECRET as string;
      const encodedToken = jwt.sign(token, secret, {
        algorithm: "HS256",
      });
      // session.id = token.id;
      // session.token = encodedToken;
      // return Promise.resolve(session);
      return session;
    },
  },
};

export default NextAuth(authOptions);
