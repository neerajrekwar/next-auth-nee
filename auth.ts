
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: UpstashRedisAdapter(red),
  debug: true,
  providers: [GitHub],
})