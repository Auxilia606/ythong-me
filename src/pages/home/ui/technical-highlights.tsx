"use client";

import ChatBubbleLeftEllipsisSolid from "@/shared/icon/chat-bubble-left-ellipsis-solid";
import Check from "@/shared/icon/check";
import CodeBracketSquareSolid from "@/shared/icon/code-bracket-square-solid";
import LightBulb from "@/shared/icon/light-bulb";
import Square3Stack3dSolid from "@/shared/icon/square-3-stack-3d-solid";
import UserGroupSolid from "@/shared/icon/user-group-solid";
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function TechnicalHighlights() {
  return (
    <Stack useFlexGap spacing={2}>
      <Stack
        direction="row"
        useFlexGap
        spacing={1}
        sx={{ alignItems: "center" }}
      >
        <LightBulb color="primary" />
        <Typography variant="h5" component="div">
          Technical Highlights
        </Typography>
      </Stack>

      <Box
        sx={(theme) => ({
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          [theme.breakpoints.down("lg")]: {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          },
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "1fr",
          },
        })}
      >
        {techItems.map((v, i) => {
          const TechIcon = v.Icon;
          return (
            <Paper
              key={i}
              sx={{
                flex: 1,
                p: 2,
              }}
            >
              <Stack
                sx={{
                  alignItems: "flex-start",
                }}
              >
                <Stack
                  sx={{
                    p: 1,
                    border: "2px solid",
                    borderColor: `${v.color}.main`,
                    borderRadius: 100,
                    mb: 2,
                  }}
                >
                  <TechIcon
                    color={v.color}
                    sx={{
                      width: 40,
                      height: 40,
                    }}
                  />
                </Stack>
                <Typography variant="h6" component="div">
                  {v.title}
                </Typography>
                <List>
                  {v.description.map((v2, i2) => (
                    <ListItem key={i2} disablePadding disableGutters>
                      <ListItemIcon
                        sx={{
                          minWidth: 24,
                        }}
                      >
                        <Check
                          color={v.color}
                          sx={{
                            width: 16,
                            height: 16,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={v2} />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}

export { TechnicalHighlights };

const techItems = [
  {
    title: "Architecture Design",
    description: [
      <>
        <Link href="https://feature-sliced.design/docs/get-started/overview">
          Feature Sliced Design
        </Link>{" "}
        기반 설계
      </>,
      "Design System 구축",
      "상태 관리 표준화",
    ],
    color: "primary" as const,
    Icon: Square3Stack3dSolid,
  },
  {
    title: "API Contract First",
    description: [
      "OPEN API 기반 타입 생성",
      "DTO 일관성 확보 및 검증",
      "타입 안정성 확보",
    ],
    color: "secondary" as const,
    Icon: CodeBracketSquareSolid,
  },
  {
    title: "AI Application",
    description: [
      "LLM 기반 서비스 개발",
      "AI SaaS 플랫폼 구축",
      "RAG 및 프롬프트 설계",
    ],
    color: "warning" as const,
    Icon: ChatBubbleLeftEllipsisSolid,
  },
  {
    title: "Team Leadership",
    description: [
      "코드 리뷰 문화 운영",
      "기술 표준 및 컨벤션 수립",
      "주니어 멘토링 및 성장 지원",
    ],
    color: "success" as const,
    Icon: UserGroupSolid,
  },
];
