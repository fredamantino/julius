import NextAuth from "next-auth"
import Nodemailer from "next-auth/providers/nodemailer"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../database"

export const { handlers, auth, signIn, signOut } = NextAuth({
    pages: {
        signOut: "/auth",
        error: "/auth/error",
        verifyRequest: "/auth/verify-request",
        newUser: "/app",
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        Nodemailer({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
    ],
})