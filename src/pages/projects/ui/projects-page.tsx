"use client";

import { Container, Grid, Stack, Typography } from "@mui/material";
import { ProjectCard, ProjectCardProps } from "./project-card";

function ProjectsPage() {
  return (
    <Container maxWidth="xl">
      <Stack spacing={{ xs: 2, md: 2.5 }}>
        <Stack spacing={1}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: 600,
            }}
          >
            Projects
          </Typography>
          <Typography color="textSecondary">
            A selection of architectural software solutions and creative
            experiments focusing on performance, scalability, and user-centric
            design
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          {project.map((v) => (
            <Grid key={v.id} size={4}>
              <ProjectCard {...v} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

export { ProjectsPage };

const project: ProjectCardProps[] = [
  {
    id: "dweax005",
    title: "AI 병원 CRM 및 상담 분석 플랫폼",
    description:
      "• AI 상담 운영 콘솔 구축\n• 상담 품질 분석 서비스 구축\n• 임베디드 AI 챗봇 구축",
    image: "./project/prj-2026-mayaicc.png",
    skill: [
      "React",
      "material-ui",
      "@tanstack/router",
      "@tanstack/react-query",
    ],
  },
  {
    id: "dweax004",
    title: "문제해결은행 플랫폼 고도화",
    description:
      "• 맞춤형 데이터레시피 생성 서비스 고도화\n• 맞춤지원사업 프로세스 개편\n• 자원예약 시스템, 경진대회 신청/관리 시스템 구축",
    image: "./project/prj-2025-datahub.png",
    skill: ["React", "material-ui", "@tanstack/react-query", "draft.js"],
  },
  {
    id: "dweax003",
    title: "AI융합 플랫폼 구축",
    description:
      "• 관리자 플랫폼 아키텍처 구축\n• 권한 기반 메뉴 관리 시스템 개발\n• AI융합서비스 운영 관리 기능 개발",
    image: "./project/prj-2024-jb.png",
    skill: ["Next.js", "material-ui", "@tanstack/react-query", "react-quill"],
  },
  {
    id: "dweax002",
    title: "문제해결은행 플랫폼 구축",
    description:
      "• 통합 검색 서비스 개발\n• 데이터 레시피 등록 및 관리 기능 개발\n• 맞춤지원사업 신청 및 관리 기능 개발",
    image: "./project/prj-2024-datahub.png",
    skill: ["React", "material-ui", "@tanstack/react-query", "draft.js"],
  },
  {
    id: "dweax001",
    title: "기관공유데이터 관리시스템 구축사업",
    description:
      "• 기관 메타데이터 기반 데이터 등록 기능 개발\n• 데이터 결합 및 가공 UI 구현\n• 데이터 처리 전/후 비교 화면 개발",
    image: "./project/prj-2024-nia.png",
    skill: ["React", "antd", "recoil", "@tanstack/react-query"],
  },
  {
    id: "kokozi002",
    title: "애플리케이션 백오피스 개발",
    description:
      "• 글로벌 진출 대비 i18n 관리 기능 개발\n• API 인가 권한 관리 기능 개발\n• React 컴포넌트 리렌더링 지연 이슈 개선",
    image: "./project/prj-2022-kokozi.png",
    skill: ["Next.js", "material-ui"],
  },
  {
    id: "kokozi001",
    title: "코코지 모바일 애플리케이션 개발",
    description:
      "• 미디어 스트리밍 기능 개발\n• 플레이리스트 리뷰 등록/조회 기능 개발",
    image: "./project/prj-2022-kokozi.png",
    skill: ["React Native", "Firebase"],
  },
];
