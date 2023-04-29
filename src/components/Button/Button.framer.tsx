import { ControlType, addPropertyControls } from 'framer';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '../../context';
import { Button as _Button } from './Button';

/**
const fn = `(() => {
    const isFramerDark = document
        .querySelector("body")
        .getAttribute("class")
        .includes("framer-theme-dark")
    const command = !isFramerDark ? "dark-mode" : "light-mode"

    document.querySelector("iframe").contentWindow.postMessage(
        {
            protocol: "42world",
            command,
        },
        "*"
    )
})()`

document.querySelector("button[title=Theme]").setAttribute("onclick", fn)
*/

function useThemeData() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //     const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")
  //     const handleChange = (e) => setIsDarkMode(e.matches)
  //     darkModeQuery.addListener(handleChange)

  //     // Set initial state
  //     setIsDarkMode(darkModeQuery.matches)

  //     // Cleanup listener on unmount
  //     return () => {
  //         darkModeQuery.removeListener(handleChange)
  //     }
  // }, [])

  useEffect(() => {
    const handleChange = (e: WindowEventMap['message']) => {
      if (e.data?.protocol !== '42world') {
        return;
      }

      if (e.data?.command === 'dark-mode') {
        setIsDarkMode(true);
        return;
      }

      if (e.data?.command === 'light-mode') {
        setIsDarkMode(false);
        return;
      }
    };

    window.addEventListener('message', handleChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('message', handleChange);
    };
  }, []);

  return isDarkMode;
}

export function Button(props: any) {
  return (
    <ThemeProvider value={useThemeData() ? 'dark' : 'light'}>
      <_Button {...props} />
    </ThemeProvider>
  );
}

addPropertyControls(Button, {
  type: {
    title: 'Type',
    type: ControlType.Enum,
    options: ['text', 'link'],
    defaultValue: 'text',
    displaySegmentedControl: true,
  },
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'text',
  },
  link: {
    title: 'Link',
    type: ControlType.Link,
    defaultValue: 'https://42world.kr',
    hidden: ({ type }) => !(type === 'link'),
  },
  size: {
    title: 'Size',
    type: ControlType.Enum,
    options: ['normal', 'small'],
    defaultValue: 'normal',
    displaySegmentedControl: true,
  },
  style: {
    title: 'Style',
    type: ControlType.Enum,
    options: ['default', 'primary', 'danger'],
    defaultValue: 'default',
    displaySegmentedControl: true,
  },
  onClick: {
    title: 'onClick',
    type: ControlType.EventHandler,
    hidden: ({ type }) => !(type === 'text'),
  },
});
