interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className="wrapper">{children}</div>;
}
