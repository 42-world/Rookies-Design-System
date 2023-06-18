import { ControlType } from 'framer';
import type { ComponentProps } from 'react';
import { applyFramerProperties, FramerProvider } from '../../common/framer';
import { Footer as _Footer } from './Footer';

export function Footer(props: ComponentProps<typeof _Footer>) {
  return (
    <FramerProvider>
      <_Footer {...props} />
    </FramerProvider>
  );
}

// Add your custom property infos here
applyFramerProperties(Footer, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: '@ 2022. Team ROOK!ES',
  },
  githubLink: {
    title: 'GithubLink',
    type: ControlType.String,
    defaultValue: 'https://github.com',
  },
  mailLink: {
    title: 'MailLink',
    type: ControlType.String,
    defaultValue: 'mailto:asdf@naver.com',
  },
});
