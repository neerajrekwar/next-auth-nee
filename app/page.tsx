
import { auth } from "@/auth";
import { SignIn, SignOut } from "@/components/auth-comp";
 
export default async function Home() {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-900 text-gray-100 gap-y-20 p-24">
      <h1 className="md:leading-snug text-3xl max-w-[1000px] md:text-5xl  [&>a]:text-green-500 font-bold text-center">
        <a href="https://nextjs.org" target="_blank">
          Next.js
        </a>{" "}
        Authentication with{" "}
        <a href="https://authjs.dev/" target="_blank">
          NextAuth.js{" "}
        </a>{" "}
        +{" "}
        <a href="https://upstash.com/" target="_blank">
          Upstash Redis
        </a>
      </h1>
 
      {session ? (
        <div className="space-y-4">
          <div className="flex flex-col items-center gap-y-2">
            <span className="text-xl font-bold">{session.user?.name}</span>
            <span className="text-gray-400">{session.user?.email}</span>
          </div>
          <SignOut />
        </div>
      ) : (
        <SignIn />
      )}
    </main>
  );
}
 