import { MantineProvider } from "@mantine/core";
import { theme, colorSchemeManager } from "./theme";
import { Notifications } from "@mantine/notifications";
import MyForm from "./components/MyForm";

const App = () => {
  return (
    <MantineProvider
      {...{
        theme,
        colorSchemeManager,
        defaultColorScheme: "light",
      }}
    >
      <Notifications />
      <MyForm />
    </MantineProvider>
  );
};

export default App;
