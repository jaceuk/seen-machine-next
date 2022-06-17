import Footer from '@components/Footer';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div className="wrapper">
      {children}
      <Footer />
    </div>
  );
}
