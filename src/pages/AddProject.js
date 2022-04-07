import { useState } from "react";
import {
  Typography,
  Container,
  Stack,
  TextField,
  Button,
  Box,
  Alert,
  AlertTitle,
  Collapse,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function AddProject() {
  //Navigate
  const navigate = useNavigate();
  const [activeAlert, setActiveAlert] = useState();

  const validationSchema = Yup.object().shape({
    projectId: Yup.string().required("ProjectId is required"),
    runs: Yup.number()
      .required("Runs is required")
      .min(1, "Runs must be at least 1")
      .max(10, "Runs must not exceed 10"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const projectId = data.projectId;
    const runs = data.runs;
    console.log(JSON.stringify(data, null, 2));
    fetch("http://localhost:8000/projects", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ projectId, runs }),
    })
      // .then(() => activeAlert())
      .then(() => navigate("/"));
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
        // align="center"
      >
        Project settings
      </Typography>

      <Stack
        component="form"
        sx={{
          width: "35ch",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          label={"Project Id"}
          variant="outlined"
          color="primary"
          fullWidth
          margin="dense"
          {...register("projectId")}
          error={errors.projectId ? true : false}
        ></TextField>

        <Typography variant="inherit" color="textSecondary">
          {errors.projectId?.message}
        </Typography>

        <TextField
          id="runs"
          name="runs"
          label="Runs"
          type="number"
          fullWidth
          margin="dense"
          {...register("runs")}
          error={errors.runs ? true : false}
        />
        <Typography variant="inherit" color="textSecondary">
          {errors.runs?.type === "typeError"
            ? (errors.runs.message = "Runs is required")
            : errors.runs?.message}
        </Typography>
      </Stack>
      <Box mt={2}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit(onSubmit)}
        >
          Add
        </Button>
      </Box>
    </Container>
  );
}

export default AddProject;
