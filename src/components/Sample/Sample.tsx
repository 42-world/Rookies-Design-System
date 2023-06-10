type Props = {
  text: string;
};

export function Sample({ text }: Props) {
  return <p className={'text-pink-500 dark:text-gray-700'}>This is Sample! "{text}"</p>;
}
