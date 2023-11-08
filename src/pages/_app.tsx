import { AppProps } from "next/app";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} flex bg-gray-960 font-sans text-white`}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}

export default MyApp;
