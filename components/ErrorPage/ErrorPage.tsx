import Title from '@components/Title';

interface ErrorProps {
  type: string;
  message: string;
}

export default function ErrorPage({ type, message }: ErrorProps) {
  return <Title title={type} subtext={message} />;
}
