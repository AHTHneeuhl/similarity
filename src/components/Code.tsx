"use client";

import { useTheme } from "next-themes";
import { defaultProps, Language } from "prism-react-renderer";
import { useEffect, useState } from "react";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import Highlight from "prism-react-renderer";

interface CodeProps {
  code: string;
  show: boolean;
  language: Language;
  animattionDelay?: number;
  animated?: boolean;
}

const Code: React.FC<CodeProps> = ({
  code,
  show,
  language,
  animated,
  animattionDelay,
}) => {
  const [text, setText] = useState(animated ? "" : code);

  const { theme: applicationTheme } = useTheme();

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i = i + 1;
          if (i > code.length) {
            clearInterval(intervalId);
          }
        }, 15);

        return () => clearInterval(intervalId);
      }, animattionDelay || 150);
    }
  }, [show, code, animated, animattionDelay]);

  const lines = text.split(/\r\n|\r|\n/).length;

  const theme = applicationTheme === "light" ? lightTheme : darkTheme;

  return (
    <Highlight {...defaultProps} code={text} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar`}
          style={{ maxHeight: show ? lines * 24 : 0, opacity: show ? 1 : 0 }}
        >
          {tokens.map((line, idx) => {
            // eslint-disable-next-line no-unused-vars
            const { key, ...rest } = getLineProps({ line, key: idx });

            return (
              <div
                key={`line-${idx}`}
                style={{ position: "relative" }}
                {...rest}
              >
                {line.map((token, index) => {
                  // eslint-disable-next-line no-unused-vars
                  const { key, ...props } = getTokenProps({
                    token,
                    key: index,
                  });

                  return <span key={index} {...props} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
