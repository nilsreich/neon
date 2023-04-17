import React from "react";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import './globals.css'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
