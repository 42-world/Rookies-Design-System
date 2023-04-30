import { useEffect, useState } from 'react';

/**
 * Get the theme from the framer.
 */
export function useFramerThemeData() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

/*
// Enter the following code into the console
// Enable the framer theme toggle button to match the system theme.
window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
    const isOsDark = e.matches
    const isFramerDark = document.querySelector('body').getAttribute("class").includes("framer-theme-dark")
    
    
    if (isOsDark != isFramerDark) {
          document.querySelector("button[title=Theme]").click()
    }
})


// Make the CodeComponent theme work with the Framer Theme button.
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
