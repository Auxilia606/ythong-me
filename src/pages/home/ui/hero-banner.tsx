"use client";

import ArrowRight from "@/shared/icon/arrow-right";
import CodeBracket from "@/shared/icon/code-bracket";
import Cube from "@/shared/icon/cube";
import ShieldCheck from "@/shared/icon/shield-check";
import Square3Stack3d from "@/shared/icon/square-3-stack-3d";
import { Button, Chip, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

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
        <Typography
          sx={{
            maxWidth: 800,
          }}
        >
          AI SaaS, 데이터 플랫폼, 엔터프라이즈 웹 애플리케이션 분야에서 7년 이상
          프론트엔드 개발자로 활동해왔습니다.
          <br /> 병원 CRM 및 상담 분석 플랫폼, 공공 데이터 활용 플랫폼, 모바일
          콘텐츠 서비스 등 다양한 규모의 프로젝트를 수행하며 핵심 화면 개발부터
          아키텍처 설계, 공통 UI 시스템 구축, 팀 리딩까지 경험했습니다.
        </Typography>
        <Typography
          sx={{
            strong: {
              color: "secondary.main",
            },
          }}
        >
          단순한 화면 구현을 넘어 복잡한 비즈니스 요구사항을{" "}
          <strong>안정적인 사용자 경험</strong>으로 연결하고,
          <br />
          개발팀이 <strong>지속적으로 확장 가능한 구조</strong>를 설계하는 것을
          중요하게 생각합니다.
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

        <Stack direction="row" useFlexGap spacing={2}>
          {techStack.map((v, i, arr) => (
            <React.Fragment key={i}>
              <Stack direction="row" useFlexGap spacing={1}>
                {v.icon}
                <Typography>{v.label}</Typography>
              </Stack>
              {i !== arr.length - 1 && <Divider orientation="vertical" />}
            </React.Fragment>
          ))}
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

const techStack = [
  { label: "React / TypeScript", icon: <CodeBracket color="primary" /> },
  { label: "FSD Architecture", icon: <Cube color="primary" /> },
  { label: "OPEN API / Type Safety", icon: <ShieldCheck color="primary" /> },
  { label: "Design System", icon: <Square3Stack3d color="primary" /> },
];
