import Spinner from "@/components/spinner/Spinner";
import "./globals.css";
import Header from "@/components/header/Header";
import { DarkModeProvider } from "@/context/DarkModeContext";
import Providers from "@/queries/providers";

import { Josefin_Sans, MedievalSharp } from "next/font/google";
import { Suspense } from "react";

// Font baraye kole app.
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

// Font makhsoos baraye Logo.
const medieval = MedievalSharp({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export { medieval };

// Be in sooorate metadata ro minevisim ke hamishe "... / Mehraco Project" bashe too title page.
export const metadata = {
  title: {
    template: "%s / Mehraco Project",
    default: "Welcome / Mehraco Project",
  },
  description: "Project By Macan Ebrahimzade",
};

export default function RootLayout({ children, modal }) {
  return (
    // Class dark ba estefade az ghabliate tailwind.
    <html lang="en" className="dark">
      <body
        className={`${josefin.className} bg-primary-50 text-primary-950 dark:bg-primary-950 dark:text-primary-100 px-9 py-6 2xl:py-10 2xl:px-40 `}
      >
        <DarkModeProvider>
          <Suspense fallback={<Spinner />}>
            <Providers>
              <Header />

              <main className="flex justify-center flex-col pb-16">
                {modal}
                {children}
              </main>
            </Providers>
          </Suspense>
        </DarkModeProvider>
      </body>
    </html>
  );
}
