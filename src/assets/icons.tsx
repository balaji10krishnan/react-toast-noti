interface IconProps {
  className?: string;
  onClick?: () => void;
}

export const ICCheckCircle = ({ className, onClick }: IconProps) => (
  <svg
    className={className}
    onClick={onClick}
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke-miterlimit="10"
      stroke-width="32"
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    ></path>
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M352 176 217.6 336 160 272"
    ></path>
  </svg>
);

export const ICCloseCircle = ({ className, onClick }: IconProps) => (
  <svg
    className={className}
    onClick={onClick}
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke-miterlimit="10"
      stroke-width="32"
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    ></path>
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M320 320 192 192m0 128 128-128"
    ></path>
  </svg>
);

export const ICInfoCircle = ({ className, onClick }: IconProps) => (
  <svg
    className={className}
    onClick={onClick}
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke-miterlimit="10"
      stroke-width="32"
      d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
    ></path>
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M220 220h32v116"
    ></path>
    <path
      fill="none"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="32"
      d="M208 340h88"
    ></path>
    <path d="M248 130a26 26 0 1 0 26 26 26 26 0 0 0-26-26z"></path>
  </svg>
);

export const ICWarningCircle = ({ className, onClick }: IconProps) => (
  <svg
    className={className}
    onClick={onClick}
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17z"
    ></path>
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="m250.26 195.39 5.74 122 5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95z"
    ></path>
    <path d="M256 397.25a20 20 0 1 1 20-20 20 20 0 0 1-20 20z"></path>
  </svg>
);

export const ICClose = ({ className, onClick }: IconProps) => (
  <svg
    className={className}
    onClick={onClick}
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    role="button"
    aria-label="Close notification"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
  </svg>
);
