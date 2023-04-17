"use client";
import { Todos } from "./Todos";
import { SignOutButton } from "@clerk/clerk-react";
import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";
import { ConvexReactClient} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

export default function Home() {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <ConvexProviderWithClerk client={convex}>
      <main>
        <SignedIn>
          <Todos />
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <div className="flex h-screen bg-black items-center justify-center">
          <SignIn
            appearance={{
              elements: {
                card:'shadow-none p-0 m-0 rounded-none w-14',
                footer:'hidden',
                header:'hidden',
                internal: "none",
                external: "hidden",
                socialButtonsBlockButtonText:'hidden'
              },
            }}
          />
          </div>
        </SignedOut>
      </main>
    </ConvexProviderWithClerk>
  );
}
