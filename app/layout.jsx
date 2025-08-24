import "./globals.css";

export const metadata = {
  title: "Terra: 25 Years Of Earth Stories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
        />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
