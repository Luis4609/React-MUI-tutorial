import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function ProjectList() {
  const { loading, error, data } = useQuery(gql`
    {
      projects(orderDirection: $orderDirection, filters: $filters) {
        projectId
        projectColor
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.projects.map(({ projectId, projectColor }) => (
    <div key={projectId}>
      <p>
        {projectId}: {projectColor}
      </p>
    </div>
  ));
}

export default function ApolloApi() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ProjectList />
    </div>
  );
}
