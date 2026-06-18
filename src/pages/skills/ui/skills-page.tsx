"use client";

import AcademicCap from "@/shared/icon/academic-cap";
import CheckBadge from "@/shared/icon/check-badge";
import CircleStack from "@/shared/icon/circle-stack";
import CommandLine from "@/shared/icon/command-line";
import ComputerDesktop from "@/shared/icon/computer-desktop";
import WrenchScrewdriver from "@/shared/icon/wrench-screwdriver";
import theme from "@/shared/theme";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  type SvgIconProps,
} from "@mui/material";

type SkillGroup = {
  title: string;
  icon: (props: SvgIconProps) => React.JSX.Element;
  color: "primary" | "success" | "secondary";
  skills: string[];
  wide?: boolean;
};

type Education = {
  status: string;
  school: string;
  degree: string;
};

type Certification = {
  credential: string;
  organization: string;
  status: string;
};

function SkillsPage() {
  return (
    <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
      <Stack spacing={{ xs: 6, md: 8 }}>
        <Stack spacing={{ xs: 2, md: 2.5 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              maxWidth: 980,
              fontSize: { xs: 34, sm: 42, md: 48 },
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: 0,
            }}
          >
            Core Competencies & Academic Foundation
          </Typography>
          <Typography
            color="textSecondary"
            sx={{
              maxWidth: 720,
              fontSize: { xs: 16, md: 17 },
              lineHeight: 1.7,
            }}
          >
            A structured overview of technical expertise and academic background
            that drive my professional approach. I specialize in building robust
            frontend narratives through code and strategic thinking.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
            gap: { xs: 4, md: 3 },
            alignItems: "start",
          }}
        >
          <Stack spacing={3.25}>
            <SectionTitle
              icon={<ComputerDesktop />}
              title="Technical Expertise"
            />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 3,
              }}
            >
              {skillGroups.map((group) => (
                <SkillCard key={group.title} group={group} />
              ))}
            </Box>
          </Stack>

          <Stack spacing={3.25}>
            <SectionTitle icon={<AcademicCap />} title="Education" />

            <Stack spacing={3}>
              <EducationCard />
              <GrowthCard />
            </Stack>
          </Stack>
        </Box>

        <Stack spacing={3.25}>
          <SectionTitle
            icon={<CheckBadge />}
            title="Certifications & Major Achievements"
          />
          <CertificationTable />
        </Stack>
      </Stack>
    </Container>
  );
}

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
      <Box
        sx={{
          color: theme.vars.palette.primary.main,
          display: "flex",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontSize: { xs: 28, md: 34 },
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: 0,
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}

function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = group.icon;

  return (
    <Card
      variant="outlined"
      sx={{
        gridColumn: { md: group.wide ? "1 / -1" : undefined },
        borderColor: "divider",
        borderRadius: 2,
        boxShadow: "0 1px 4px rgba(15, 23, 42, 0.06)",
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3 }, "&:last-child": { pb: 3 } }}>
        <Stack spacing={2.5}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            <Icon color={group.color} sx={{ fontSize: 24 }} />
            <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>
              {group.title}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            useFlexGap
            spacing={1.25}
            sx={{ flexWrap: "wrap" }}
          >
            {group.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                color={group.color}
                sx={{
                  fontWeight: 500,
                }}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function EducationCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "divider",
        borderRadius: 2,
        boxShadow: "0 1px 4px rgba(15, 23, 42, 0.06)",
      }}
    >
      {educations.map((education, index) => (
        <Box key={`${education.degree}-${index}`}>
          <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
            <Stack spacing={1}>
              <Typography
                sx={{
                  color: theme.vars.palette.primary.main,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 2.4,
                  textTransform: "uppercase",
                }}
              >
                {education.status}
              </Typography>
              <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>
                {education.school}
              </Typography>
              <Typography sx={{ lineHeight: 1.45 }}>
                {education.degree}
              </Typography>
            </Stack>
          </CardContent>
          {index < educations.length - 1 ? <Divider /> : null}
        </Box>
      ))}
    </Card>
  );
}

function GrowthCard() {
  return (
    <Card
      sx={{
        minHeight: { xs: 260, md: 300 },
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        backgroundImage:
          "linear-gradient(180deg, rgba(15, 23, 42, 0.06) 0%, rgba(0, 86, 179, 0.55) 100%), url('/project/prj-2024-jb.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        boxShadow: "0 16px 28px rgba(15, 23, 42, 0.18)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 80, 150, 0.82) 100%)",
        }}
      />
      <Typography
        variant="h5"
        component="p"
        sx={{
          position: "absolute",
          right: 24,
          bottom: 24,
          left: 24,
          color: "#fff",
          fontWeight: 800,
          lineHeight: 1.18,
          textShadow: "0 2px 14px rgba(0, 0, 0, 0.38)",
        }}
      >
        Harmonious Growth of Skills and Theory
      </Typography>
    </Card>
  );
}

function CertificationTable() {
  return (
    <TableContainer
      component={Card}
      variant="outlined"
      sx={{
        borderColor: "divider",
        borderRadius: 2,
        boxShadow: "0 1px 4px rgba(15, 23, 42, 0.06)",
        overflowX: "auto",
      }}
    >
      <Table sx={{ minWidth: 760 }}>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor:
                "rgba(var(--palette-text-primaryChannel) / 0.03)",
            }}
          >
            {["Credential / Achievement", "Issuing Organization", "Status"].map(
              (label) => (
                <TableCell
                  key={label}
                  sx={{
                    py: 2.25,
                    fontSize: 18,
                    fontWeight: 700,
                    color: "text.primary",
                  }}
                >
                  {label}
                </TableCell>
              ),
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {certifications.map((certification) => (
            <TableRow key={certification.credential} hover>
              <TableCell sx={{ py: 2.25, fontSize: 16 }}>
                {certification.credential}
              </TableCell>
              <TableCell sx={{ py: 2.25, color: "text.secondary" }}>
                {certification.organization}
              </TableCell>
              <TableCell sx={{ py: 2.25 }}>{certification.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: CommandLine,
    color: "primary",
    skills: [
      "React",
      "Next.js",
      "TanStack Router",
      "TanStack Query",
      "React Hook Form",
      "Material-UI",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Infrastructure",
    icon: CircleStack,
    color: "success",
    skills: ["Node.js", "PostgreSQL", "MariaDB", "AWS S3", "AWS EC2", "Docker"],
  },
  {
    title: "Tools & Workflow",
    icon: WrenchScrewdriver,
    color: "secondary",
    wide: true,
    skills: [
      "Figma",
      "Jira",
      "Asana",
      "Teams",
      "Git",
      "Vercel",
      "Slack",
      "Postman",
    ],
  },
];

const educations: Education[] = [
  {
    status: "Graduated",
    school: "Yonsei University",
    degree: "Master of Science in Electrical and Electronic Engineering",
  },
  {
    status: "Graduated",
    school: "Yonsei University",
    degree: "Bachelor of Science in Electrical and Electronic Engineering",
  },
];

const certifications: Certification[] = [
  {
    credential: "정보처리기사",
    organization: "한국산업인력공단",
    status: "Certified",
  },
  {
    credential:
      "기억곡선 기반 맥락 유지 기법을 적용한 대규모 언어 모델의 대화 방법",
    organization: "주식회사 디윅스",
    status: "등록",
  },
];

export { SkillsPage };
