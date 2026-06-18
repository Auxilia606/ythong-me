"use client";

import BuildingOffice2 from "@/shared/icon/building-office-2";
import Check from "@/shared/icon/check";
import {
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

function ExperienceStepper() {
  return (
    <Stepper orientation="vertical">
      {experiences.map((v, i) => (
        <Step key={i} active>
          <StepLabel>{v.role}</StepLabel>
          <StepContent>
            <Stack spacing={0.5} sx={{}}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                sx={{
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <BuildingOffice2 />
                  <Typography variant="h6" component="span">
                    {v.company}
                  </Typography>
                </Stack>
                <Typography component="span" color="textSecondary">
                  {v.startDate} ~ {v.endDate ?? "재직중"}
                </Typography>
              </Stack>
              <Typography>{v.summary}</Typography>

              <Paper
                sx={{
                  py: 1.5,
                  px: 2,
                }}
              >
                <Stack spacing={2}>
                  <List disablePadding>
                    {v.achievements.map((v2, i2) => (
                      <ListItem key={i2} disableGutters disablePadding>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <Check sx={{ width: 16, height: 16 }} />
                        </ListItemIcon>
                        <ListItemText primary={v2} />
                      </ListItem>
                    ))}
                  </List>
                  <Stack
                    direction="row"
                    useFlexGap
                    spacing={1}
                    sx={{ flexWrap: "wrap" }}
                  >
                    {v.skills.map((v2) => (
                      <Chip
                        color="primary"
                        size="medium"
                        variant="outlined"
                        key={v2}
                        label={v2}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Paper>
            </Stack>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}

export { ExperienceStepper };

type Experience = {
  role: string; // 직책
  company: string; // 회사명
  startDate: string; // 시작일
  endDate: string | null; // 종료일
  summary: string; // 한 줄 소개
  achievements: string[]; // 주요 성과
  skills: string[]; // 기술 태그
};

const experiences: Experience[] = [
  {
    role: "프론트엔드 개발자 (책임)",
    company: "주식회사 디윅스",
    startDate: "2024.04",
    endDate: null,
    summary:
      "AI SaaS와 공공 데이터 플랫폼 분야에서 프론트엔드 리드로 활동하며 아키텍처 설계, 공통 시스템 구축, 기술 표준화를 주도했습니다.",
    achievements: [
      "TypeScript 컨벤션 수립",
      "FSD 아키텍처 도입",
      "Merge Request 기반 코드 리뷰 프로세스 운영",
      "공통 컴포넌트 및 디자인 시스템 구축 주도",
      "AI Agent 기반 프론트엔드 개발 프로세스 구축",
      "웹 접근성(WA) 인증 대응 UI 개선",
      "Swagger 기반 API 계층 구조 설계 및 DTO 타입 표준화",
      "Material UI 기반 디자인 시스템 구축",
    ],
    skills: [
      "React",
      "Next.js",
      "@tanstack/react-query",
      "@tanstack/router",
      "zod",
      "material-ui",
      "react-hook-form",
      "jotai",
    ],
  },
  {
    role: "Frontend Software Engineer",
    company: "주식회사 코코지",
    startDate: "2022.04",
    endDate: "2024.02",
    summary:
      "React Native 기반 오디오 콘텐츠 플랫폼 개발과 하이브리드 앱 아키텍처 설계를 담당하며 모바일 사용자 경험과 성능 최적화를 수행했습니다.",
    achievements: [
      "React Native 기반 크로스 플랫폼 모바일 애플리케이션 개발",
      "React Native Track Player 기반 고품질 음원 스트리밍 개발",
      "애플리케이션 백오피스 구축",
      "글로벌 진출 대비 i18n 기반 다국어 지원 기능 구축",
    ],
    skills: [
      "React Native",
      "Next.js",
      "@tanstack/react-query",
      "antd",
      "react-hook-form",
      "mobx",
    ],
  },
  {
    role: "연구원",
    company: "티맥스 에이아이",
    startDate: "2019.03",
    endDate: "2022.04",
    summary:
      "웹 UI 플랫폼과 사내 결제 서비스 개발에 참여하며 WYSIWYG 편집기 구현, 렌더링 엔진 최적화, 실시간 주문 시스템 개발을 담당했습니다.",
    achievements: [
      "TOP Webstudio에서 사용자 WYSIWYG 에디터 기능 개발",
      "React Native 기반 사내 결제 애플리케이션 개발",
      "Electron 기반 사내 결제기(POS) 개발",
      "SSE 프로토콜 기반 사이렌 오더 기능 개발(주문 수신, 주문 진행상황 확인)",
    ],
    skills: ["React Native", "Electron", "Backbone.js", "React"],
  },
];
