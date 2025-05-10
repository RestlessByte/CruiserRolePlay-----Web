import "./layout.scss";
interface HeaderProps {
  children: React.ReactNode;
  title?: string;
  descriptionSEO?: string;
  namePage?: string;
  titlePage?: string;
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
