import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?._isAdmin) token._isAdmin = user._isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) token._id = session.user._id;
      if (token?._isAdmin) token._isAdmin = session.user._isAdmin;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'test' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // the problem here is ana khdama b dakchi statique o bagha nredo dynamique hehe
        const { email, password } = credentials;

        // !TO DO
        // fetch data
        const oussama = {
          id: '123',
          name: 'oussama',
          email: 'admin@gmail.com',
          password: '00000',
        };
        // !TO DO

        if (email == oussama.email && password == oussama.password) {
          return oussama;
        } else {
          return null;
        }
      },
    }),
  ],
});
