import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialProvider({
            async authorize(credentials) {
                const client = await connectToDatabase();

                const usersCollection = client.db('nextjs-auth').collection('users');

                const user = await usersCollection.findOne({ email: credentials.email });


                if (!user) {
                    throw new Error('No user found!');
                }

                // Fix the typo here
                const isValid = await verifyPassword(credentials.password, user.password);

                if (!isValid) {
                    client.close();
                    throw new Error('Could not log you in!');
                }

                client.close();
                return {
                    email: user.email,
                };
            }
        })
    ]
});
