import Footer from '@components/Footer';
import Hero from '@components/Hero';

interface IProps {
  children: React.ReactNode;
}

export default function LayoutSearch({ children }: IProps) {
  return (
    <div className="wrapper">
      <Hero />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
