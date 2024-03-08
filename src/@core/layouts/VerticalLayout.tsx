// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Fab from "@mui/material/Fab";
import { styled, useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

// ** Icons Imports
import ArrowUp from "mdi-material-ui/ArrowUp";
import { FaPhone } from "react-icons/fa6";
// ** Theme Config Import
import themeConfig from "src/configs/themeConfig";
import useMediaQuery from "@mui/material/useMediaQuery";
// ** Type Import
import { LayoutProps } from "src/@core/layouts/types";
// ** Next Imports
import Image from "next/image";
// ** Components
import AppBar from "./components/vertical/appBar";
import Navigation from "./components/vertical/navigation";
import Footer from "./components/shared-components/footer";
import ScrollToTop from "src/@core/components/scroll-to-top";
import { Stack } from "@mui/material";
import ServerSideNavItems from "src/layouts/components/vertical/ServerSideNavItems";

// ** Styled Component

const VerticalLayoutWrapper = styled("div")({
  height: "100%",
  display: "flex",
});

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
});

const ContentWrapper = styled("main")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  transition: "padding .25s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const VerticalLayout = (props: LayoutProps) => {
  // ** Props
  const { hidden, settings, children, scrollToTop } = props;
  // ** Vars
  const { skin, navHidden, contentWidth } = settings;
  const { navigationSize, disableCustomizer, collapsedNavigationSize } =
    themeConfig;
  const navWidth = navigationSize;
  const navigationBorderWidth = skin === "bordered" ? 1 : 0;

  const collapsedNavWidth = collapsedNavigationSize;
  // ** Vars
  const navItems = ServerSideNavItems();
  // ** States
  const [navVisible, setNavVisible] = useState<boolean>(false);
  const [navHover, setNavHover] = useState<boolean>(false);
  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <VerticalLayoutWrapper className="layout-wrapper">
        {isMobile && (
          <Navigation
            navWidth={navWidth}
            navHover={navHover}
            navVisible={navVisible}
            setNavHover={setNavHover}
            setNavVisible={setNavVisible}
            collapsedNavWidth={collapsedNavWidth}
            toggleNavVisibility={toggleNavVisibility}
            navigationBorderWidth={navigationBorderWidth}
            isMobile={isMobile}
            verticalNavItems={navItems}
            {...props}
          />
        )}
        <MainContentWrapper
          id="layout-content-wrapper"
          className="layout-content-wrapper"
        >
          {/* Header */}
          <AppBar
            verticalNavItems={navItems}
            toggleNavVisibility={toggleNavVisibility}
            {...props}
          />
          {/* Content */}
          <ContentWrapper
            className="layout-page-content"
            // sx={{
            //   ...(contentWidth === 'boxed' && {
            //     mx: 'auto',
            //     [theme.breakpoints.up('xl')]: {
            //       maxWidth: 1170
            //     },
            //     [theme.breakpoints.between('sm', 'xl')]: {
            //       maxWidth: 1170
            //     },
            //     [theme.breakpoints.between('xs', 'sm')]: {
            //       maxWidth: '100%'
            //     },
            //     '@media (min-width: 1200px)': { maxWidth: 1170 }
            //   })
            // }}
          >
            {children}
          </ContentWrapper>
          <Footer {...props} />
        </MainContentWrapper>
      </VerticalLayoutWrapper>
      {/* Scroll to top button */}
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className="mui-fixed">
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </>
  );
};

export default VerticalLayout;
