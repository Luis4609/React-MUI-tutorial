import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import AddProject from "./pages/AddProject";
import Project from "./pages/Project";
import Profile from "./pages/Profile";
import UpdateProject from "./pages/Update";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Layout from "./components/Layout";
import ApolloApi from "./pages/ApolloApi";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

const theme = createTheme({
  palette: {
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});


const client = new ApolloClient({
  httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Link: {
        keyFields: ["projectId"],
      },
    },
  }),
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ApolloProvider client={client}>
          <Layout>
            <Routes>
              <Route path="/" element={<Projects></Projects>}></Route>
              <Route path="/project/:id" element={<Project></Project>}></Route>
              <Route
                path="/add-project"
                element={<AddProject></AddProject>}
              ></Route>
              <Route path="update-project/:id" element={<UpdateProject></UpdateProject>}></Route>
              <Route path="/profile" element={<Profile></Profile>}></Route>
              <Route path="/api-sorry-cypress" element={<ApolloApi></ApolloApi>}></Route>
            </Routes>
          </Layout>
        </ApolloProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
