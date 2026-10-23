import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akintade Daniel Emmanuel | AI Engineer & Software Developer",
  description: "Portfolio of Akintade Daniel Emmanuel — building practical AI systems, software applications, and developer tools.",
  keywords: ["AI Engineering", "Machine Learning", "Python", "PyTorch", "Full Stack"],
  openGraph: { title: "Akintade Daniel Emmanuel | AI Engineer", description: "Practical AI, machine learning, and software engineering.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
