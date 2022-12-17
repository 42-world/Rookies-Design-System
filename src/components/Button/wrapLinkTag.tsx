import { Link } from 'framer';

export function wrapLinkTag(herf: string, children: JSX.Element): JSX.Element {
  return <Link href={herf}>{children}</Link>;
}
