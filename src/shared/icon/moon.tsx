import type { SvgIconProps } from "@mui/material";
import { SvgIcon } from "@mui/material";

export default function Moon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      {/* 여기에 svg 텍스트를 입력합니다. 필요에 따라 jsx 문법으로 바꿔야 할 수 있습니다. */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
        />
      </svg>
    </SvgIcon>
  );
}
