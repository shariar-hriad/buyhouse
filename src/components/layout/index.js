import { Footer, Header } from '..';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}
