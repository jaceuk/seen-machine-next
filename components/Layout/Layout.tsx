import Footer from '@components/Footer';
import Header from '@components/Header';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
