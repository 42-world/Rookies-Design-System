export function wrapATag(herf: string, children: JSX.Element): JSX.Element {
  return <a href={herf}>{children}</a>;
}
