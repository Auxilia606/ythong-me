import ArrowTopRightOnSquare from "@/shared/icon/arrow-top-right-on-square";
import Sparkles from "@/shared/icon/sparkles";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

function InterestingProblems() {
  return (
    <Stack useFlexGap spacing={2}>
      <Stack
        direction="row"
        useFlexGap
        spacing={1}
        sx={{ alignItems: "center" }}
      >
        <Sparkles color="primary" />
        <Typography variant="h5" component="div">
          Interesting Problems I&lsquo;ve Solved
        </Typography>
      </Stack>

      <Grid container spacing={2}>
        {problems.map((v, i) => (
          <Grid key={i} size={4}>
            <Paper
              sx={{
                flex: 1,
                p: 2,
                height: "100%",
              }}
            >
              <Stack
                spacing={1}
                sx={{
                  alignItems: "flex-start",
                  height: "100%",
                }}
              >
                <Stack direction="row" spacing={1}>
                  <Stack
                    sx={{
                      borderRadius: 100,
                      bgcolor: "primary.main",
                      width: 32,
                      height: 32,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "primary.contrastText",
                        fontWeight: 700,
                      }}
                    >
                      {i + 1}
                    </Typography>
                  </Stack>
                  <Typography variant="h6" component="div">
                    {v.title}
                  </Typography>
                </Stack>
                <List
                  disablePadding
                  sx={{
                    flex: 1,
                  }}
                >
                  {v.descr.map((v2, i2) => (
                    <ListItem key={i2} disablePadding disableGutters>
                      <ListItemText primary={v2} />
                    </ListItem>
                  ))}
                </List>
                {v.link && (
                  <Button
                    variant="outlined"
                    endIcon={<ArrowTopRightOnSquare />}
                    LinkComponent={Link}
                    href={v.link}
                    sx={{ alignSelf: "flex-end" }}
                  >
                    자세히보기
                  </Button>
                )}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export { InterestingProblems };

const problems = [
  {
    title: "OpenAPI 기반 API 계층 표준화",
    descr: [
      "• OpenAPI 기반 코드 생성 체계(Orval)를 도입",
      "• API, React Query Hook, Query Key 자동 생성 API 계층을 구축",
      "• API 변경 대응 비용을 절감 및 타입 안정성 확보",
    ],
    link: "https://typical-earwig-65a.notion.site/OpenAPI-API-382351322877805d8678d46f45ec4d91",
  },
  {
    title: "권한 기반 관리자 셸 및 트리형 메뉴 관리 시스템 구축",
    descr: [
      "• 서버 메뉴 권한 트리를 관리자 셸의 단일 기준 데이터로 설계",
      "• Sidebar, Breadcrumb, Page Header 동일 메뉴 트리 기반 통합",
      "• 트리형 메뉴 CRUD 및 메뉴 유형 관리 기능 개발",
      "• Drag & Drop 기반 메뉴 이동 및 정렬 시스템 구현",
    ],
    link: "https://typical-earwig-65a.notion.site/OpenAPI-API-382351322877805d8678d46f45ec4d91",
  },
  {
    title: "맞춤형 데이터레시피 생성 고도화",
    descr: [
      "• SSE 기반 AI 데이터레시피 생성 기능 구축 및 실시간 UI 연동",
      "• 생성 단계별 상태코드 관리와 사용자 노출 이벤트 분리",
      "• 트리형 메뉴 CRUD 및 메뉴 유형 관리 기능 개발",
    ],
    link: "https://typical-earwig-65a.notion.site/3833513228778071989cf9c7a914101c",
  },
];
