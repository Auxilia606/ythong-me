"use client";

import ArrowRight from "@/shared/icon/arrow-right";
import { Button, Chip, Stack, Typography } from "@mui/material";
import Link from "next/link";

function HeroBanner() {
  return (
    <Stack direction="row">
      <Stack
        sx={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
        useFlexGap
        spacing={2.5}
      >
        <Chip variant="outlined" color="primary" label="Frontend Developer" />
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: 600,
          }}
        >
          Youngtaek Hong
        </Typography>
        <Typography
          variant="h6"
          component="div"
          color="primary"
          sx={{
            fontWeight: 600,
          }}
        >
          AI SaaS • Data Platform • Enterprise Web Applications
        </Typography>
        <Typography>
          7년간 React 기반 서비스와 관리자 시스템을 개발하며
          <br />
          아키텍처 설계, 공통 컴포넌트 구축, 팀 리딩을 담당했습니다.
        </Typography>

        <Stack>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRight />}
            LinkComponent={Link}
            href="/projects"
          >
            프로젝트 보기
          </Button>
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: 400,
          height: 400,
          bgcolor: "gray",
          borderRadius: 2,
        }}
      >
        {/* NOTE: 개발자 사진으로 대체 */}
      </Stack>
    </Stack>
  );
}

export { HeroBanner };
