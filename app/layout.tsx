import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Emmanuel | AI Engineer & Cloud Developer",
  description: "Portfolio of Daniel Emmanuel — building practical AI systems, cloud-native applications, and developer tools.",
  keywords: ["AI Engineering", "Machine Learning", "Python", "PyTorch", "Cloud Engineering", "DevOps", "Full Stack"],
  openGraph: { title: "Daniel Emmanuel | AI Engineer", description: "Practical AI, cloud systems, and software engineering.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
