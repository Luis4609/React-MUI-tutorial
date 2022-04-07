import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Container, Grid } from "@mui/material";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleDelete = async (id) => {
    console.log(id)
    await fetch("http://localhost:8000/projects/" + id, {
      method: "DELETE",
    });

    //Update state without the deleted note
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
  };

  return (
    <Container>
      <h1>Project list</h1>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <Card
              project={project}
              handleDelete={handleDelete}
            ></Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
