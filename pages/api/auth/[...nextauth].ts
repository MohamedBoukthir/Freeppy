import NextAuth from "next-auth"
import bcrypt from 'bcrypt'
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"

import prisma from '@/libs/prismadb'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
        name: 'credentials',
        credentials: {
            email: {
                label: 'email',
                type: 'text',
            },
            password: {
                label: 'password',
                type:'password'
            },
        },
        async authorize(credentials) {

            if(!credentials?.email || !credentials.password){
                throw new Error('INVALID EMAIL OR PASSWORD')
            }

            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
            })

            if(!user || !user?.hashedPassword){
                throw new Error('INVALID EMAIL OR PASSWORD')
            }

            const isCorrectPassword = await bcrypt.compare(
                 credentials.password,
                 user.hashedPassword
            )

            if(!isCorrectPassword){
                throw new Error('INVALID EMAIL OR PASSWORD')
            }

            return user;
        }
    }),
  ],
  pages: {
    signIn: '/login',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});