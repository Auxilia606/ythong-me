"use client";

import ArrowRight from "@/shared/icon/arrow-right";
import CodeBracket from "@/shared/icon/code-bracket";
import Cube from "@/shared/icon/cube";
import ShieldCheck from "@/shared/icon/shield-check";
import Square3Stack3d from "@/shared/icon/square-3-stack-3d";
import { Button, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroBanner() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 3, md: 4 }}
      sx={{
        alignItems: { xs: "stretch", md: "center" },
      }}
    >
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
            fontSize: { xs: 36, sm: 44, md: 48 },
            fontWeight: 600,
            lineHeight: 1.12,
          }}
        >
          Youngtaek Hong
        </Typography>
        <Typography
          variant="h6"
          component="div"
          color="primary"
          sx={{
            fontSize: { xs: 18, md: 20 },
            fontWeight: 600,
          }}
        >
          AI SaaS • Data Platform • Enterprise Web Applications
        </Typography>
        <Typography
          sx={{
            maxWidth: 800,
            lineHeight: 1.75,
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
            lineHeight: 1.75,
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

        <Stack sx={{ width: { xs: "100%", sm: "auto" } }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRight />}
            LinkComponent={Link}
            href="/projects"
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            프로젝트 보기
          </Button>
        </Stack>

        <Stack
          direction="row"
          useFlexGap
          spacing={{ xs: 1.25, md: 2 }}
          sx={{
            flexWrap: "wrap",
          }}
        >
          {techStack.map((v, i, arr) => (
            <React.Fragment key={i}>
              <Stack direction="row" useFlexGap spacing={1}>
                {v.icon}
                <Typography>{v.label}</Typography>
              </Stack>
              {i !== arr.length - 1 && (
                <Divider
                  orientation="vertical"
                  sx={{ display: { xs: "none", md: "block" } }}
                />
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Stack>

      <Paper
        elevation={4}
        sx={{
          flex: "0 1 400px",
          alignSelf: { xs: "center", md: "stretch" },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Stack
          sx={{
            p: 1,
            alignItems: "stretch",
          }}
        >
          <Image
            src="./image/profile.png"
            alt=""
            width={400}
            height={500}
            loading="eager"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Stack>
      </Paper>
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
