
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
    Side bar
    {children}
   </main> 
  );
}
