import ArrowTrendingUp from "@/shared/icon/arrow-trending-up";
import { Chip, Paper, Stack, Typography } from "@mui/material";

function CareerJourney() {
  return (
    <Stack useFlexGap spacing={2}>
      <Stack
        direction="row"
        useFlexGap
        spacing={1}
        sx={{ alignItems: "center" }}
      >
        <ArrowTrendingUp color="primary" />
        <Typography variant="h5" component="div">
          Career Journey
        </Typography>
      </Stack>

      <Stack direction="row" useFlexGap spacing={2}>
        {careerItems.map((v, i) => (
          <Paper
            key={i}
            sx={{
              flex: 1,
              p: 2,
            }}
          >
            <Stack spacing={1.5}>
              <Typography color="textSecondary">
                {v.startDate} ~ {v.endDate ?? "Present"}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="div">
                  {v.company}
                </Typography>
                <Chip size="small" variant="filled" label={v.role} />
              </Stack>

              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "pre-line",
                }}
              >
                {v.descr}
              </Typography>

              <Stack direction="row" spacing={1}>
                {v.skills.map((v2, i2) => (
                  <Chip
                    key={i2}
                    label={v2}
                    variant="outlined"
                    color="primary"
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
}

export { CareerJourney };

const careerItems = [
  {
    startDate: "2024.04",
    endDate: null,
    company: "주식회사 디윅스",
    role: "Frontend Developer (책임)",
    descr:
      "AI SaaS와 공공 데이터 플랫폼 분야에서\n프론트엔드 개발자로 활동하며\n아키텍처 설계 공공 시스템 구축을 주도",
    skills: ["React", "TypeScript", "Next.js", "AI"],
  },
  {
    startDate: "2022.04",
    endDate: "2024.02",
    company: "주식회사 코코지",
    role: "Frontend Developer",
    descr:
      "React Native 기반 오디오 플랫폼 개발\n모바일 사용자 경험 개선\n애플리케이션 백오피스 개발",
    skills: ["React Native", "MobX", "React", "Next.js"],
  },
  {
    startDate: "2019.03",
    endDate: "2022.04",
    company: "티맥스 에이아이",
    role: "연구원",
    descr:
      "웹 UI 플랫폼과 사내 결제시스템 개발\n엔터프라이즈 시스템 개발 경험 축적",
    skills: ["React", "React Native", "Electron"],
  },
];
