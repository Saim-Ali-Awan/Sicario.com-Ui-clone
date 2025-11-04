import React from "react";

export const Icons = {
  logo: (props) => (
    <svg
      width="36"
      height="41"
      viewBox="0 0 36 41"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17.641 33.4291L11.563 27.3511C7.26395 23.052 0 26.091 0 32.169V40.1001H35.2821V15.7881L17.641 33.4291Z" fill="black" />
      <path d="M17.641 6.67098L23.719 12.749C28.0181 17.0481 35.2821 14.0091 35.2821 7.93105V0H0V24.312L17.641 6.67098Z" fill="black" />
    </svg>
  ),
  twitter: (props) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      fill="currentColor"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562..."
      />
    </svg>
  ),
  radix: (props) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" fill="currentColor" />
      <path d="M12 0H4V8H12V0Z" fill="currentColor" />
      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" fill="currentColor" />
    </svg>
  ),
  // ...continue the rest of your icons here exactly as-is but without `: (props: IconProps)` types
};
