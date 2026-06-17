import type { SvgIconProps } from "@mui/material";
import { SvgIcon } from "@mui/material";

export default function Check(props: SvgIconProps) {
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
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    </SvgIcon>
  );
}
