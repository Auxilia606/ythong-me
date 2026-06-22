import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "@/shared/component/link";
import ArrowTopRightOnSquare from "@/shared/icon/arrow-top-right-on-square";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  skill: string[];
  link?: string;
};

const titleSx = {
  fontSize: { xs: 20, md: 24 },
  lineHeight: 1.25,
};

const linkedTitleSx = {
  ...titleSx,
  color: "inherit",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    color: "primary.main",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
};

function ProjectCard({
  title,
  description,
  image,
  skill,
  link,
}: ProjectCardProps) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        sx={{
          height: { xs: 180, sm: 220, md: 240 },
        }}
        image={image}
      />
      <CardContent>
        <Stack spacing={1.5}>
          {link ? (
            <Typography
              gutterBottom
              variant="h5"
              component={Link}
              href={link}
              sx={linkedTitleSx}
            >
              {title}
              <ArrowTopRightOnSquare
                aria-hidden
                sx={{ ml: 0.75, fontSize: "0.85em", verticalAlign: "-0.1em" }}
              />
            </Typography>
          ) : (
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={titleSx}
            >
              {title}
            </Typography>
          )}
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </Typography>

          <Stack
            direction="row"
            useFlexGap
            spacing={1}
            sx={{ flexWrap: "wrap" }}
          >
            {skill.map((v) => (
              <Chip key={v} label={v} variant="outlined" color="primary" />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export type { ProjectCardProps };
export { ProjectCard };
