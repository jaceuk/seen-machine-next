import Title from '@components/Title';

interface Props {
  type: string;
  message: string;
}

export default function Error({ type, message }: Props) {
  return <Title title={type} subtext={message} />;
}
