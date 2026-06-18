import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  skill: string[];
};

function ProjectCard({ title, description, image, skill }: ProjectCardProps) {
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
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: { xs: 20, md: 24 },
              lineHeight: 1.25,
            }}
          >
            {title}
          </Typography>
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
