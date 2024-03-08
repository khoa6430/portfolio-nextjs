// ** MUI Imports
import Box from "@mui/material/Box";

// ** Type Import
import { Settings } from "src/@core/context/settingsContext";

// ** Components
import LanguageDropdown from "src/@core/layouts/components/shared-components/LanguageDropdown";
import ModeToggler from "src/@core/layouts/components/shared-components/ModeToggler";
import NotificationDropdown from "src/@core/layouts/components/shared-components/NotificationDropdown";
import UserDropdown from "src/@core/layouts/components/shared-components/UserDropdown";
interface Props {
  hidden: boolean;
  settings: Settings;
  saveSettings: (values: Settings) => void;
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings } = props;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* <LanguageDropdown settings={settings} saveSettings={saveSettings} /> */}
      {/* <ModeToggler settings={settings} saveSettings={saveSettings} /> */}
      {/* <NotificationDropdown settings={settings} /> */}
      {/* <UserDropdown settings={settings} /> */}
    </Box>
  );
};

export default AppBarContent;
