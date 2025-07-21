import { MantineProvider } from "@mantine/core";
import { theme, colorSchemeManager } from "./theme";
import { Notifications } from "@mantine/notifications";

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
    </MantineProvider>
  );
};

export default App;
