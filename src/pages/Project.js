import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

function Project() {
  const params = useParams();
  const navigate = useNavigate()

  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects/" + params.id)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <Container>
      <Typography variant="h5">Project dashboard</Typography>
      <Typography variant="subtitle1">
        Project name: {project.projectId}
      </Typography>
      <Typography variant="body1">Project runs: {project.runs}</Typography>
      <Button variant="outlined" onClick={() => navigate(`/update-project/${project.id}`)}>Update</Button>
    </Container>
  );
}

export default Project;
