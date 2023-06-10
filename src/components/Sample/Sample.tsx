type Props = {
  text: string;
};

export function Sample({ text }: Props) {
  return <p className={'text-blue-500 dark:text-pink-600'}>This is Sample! "{text}"</p>;
}
