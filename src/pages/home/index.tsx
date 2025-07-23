import { AppShell, Box } from "@mantine/core";
import Navbar from "../../layouts/plain-layout/navbar";
import { usePageData } from "../../hooks/use-page-data";

const Home = () => {
  usePageData();
  return (
    <AppShell header={{ height: 55 }}>
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Box>Welcome</Box>
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
