import theme from "@/shared/theme";
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
    <Card>
      <CardMedia
        sx={{
          height: 240,
        }}
        image={image}
      />
      <CardContent>
        <Stack spacing={1.5}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.vars.palette.text.secondary,
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </Typography>

          <Stack direction="row" spacing={1}>
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
