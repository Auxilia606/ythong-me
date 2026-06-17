import type { SvgIconProps } from "@mui/material";
import { SvgIcon } from "@mui/material";

export default function Cube(props: SvgIconProps) {
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
          d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    </SvgIcon>
  );
}
