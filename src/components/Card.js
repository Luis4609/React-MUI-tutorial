import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function ProjectCard({ project, handleDelete }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Card
        sx={{ maxWidth: 345 }}
        elevation={1}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              P
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(project.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          }
          title={project.projectId}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Runs: {project.runs}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate(`/project/${project.id}`)}>View details</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
