// ** React Import
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

// ** MUI Import
import { Accordion, AccordionSummary, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

// ** Third Party Components
import PerfectScrollbar from "react-perfect-scrollbar";

// ** Type Import
import { Settings } from "src/@core/context/settingsContext";
import {
  NavLink,
  VerticalNavItemType,
  VerticalNavItemsType,
} from "src/@core/layouts/types";

import themeConfig from "src/configs/themeConfig";

// ** Component Imports
import Drawer from "./Drawer";
import VerticalNavHeader from "./VerticalNavHeader";

// ** Util Import

// ** Icon Import
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import useActiveNavigation from "src/@core/hooks/useActiveNav";

interface Props {
  hidden: boolean;
  navWidth: number;
  navHover: boolean;
  settings: Settings;
  children: ReactNode;
  navVisible: boolean;
  collapsedNavWidth: number;
  navigationBorderWidth: number;
  toggleNavVisibility: () => void;
  setNavHover: (values: boolean) => void;
  setNavVisible: (value: boolean) => void;
  verticalNavItems?: VerticalNavItemsType;
  saveSettings: (values: Settings) => void;
  verticalNavMenuContent?: (props?: any) => ReactNode;
  afterVerticalNavMenuContent?: (props?: any) => ReactNode;
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode;
  isMobile: boolean;
}

const Navigation = (props: Props) => {
  // ** Props
  const {
    isMobile,
    hidden,
    settings,
    beforeVerticalNavMenuContent,
    toggleNavVisibility,
    verticalNavItems,
  } = props;
  const [isMobileV, setIsMobile] = useState(false);
  // ** States
  const [groupActive, setGroupActive] = useState<string[]>([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([]);
  const [isShowMainMenu, setStatusMainMenu] = useState<boolean>(false);

  const { activePath, parentPathActive } =
    useActiveNavigation(verticalNavItems);

  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile]);
  // ** Ref
  const shadowRef = useRef(null);
  // ** Hooks
  const theme = useTheme();

  // ** Var
  const { skin } = settings;
  const { beforeVerticalNavMenuContentPosition } = themeConfig;
  const route = useRouter();

  // ** Fixes Navigation InfiniteScroll
  const handleInfiniteScroll = (ref: HTMLElement) => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect;

      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect();

        return { ...original, height: Math.floor(original.height) };
      };
    }
  };

  // ** Scroll Menu
  const scrollMenu = (container: any) => {
    if (
      beforeVerticalNavMenuContentPosition === "static" ||
      !beforeVerticalNavMenuContent
    ) {
      container = hidden ? container.target : container;
      if (shadowRef && container.scrollTop > 0) {
        // @ts-ignore
        if (!shadowRef.current.classList.contains("d-block")) {
          // @ts-ignore
          shadowRef.current.classList.add("d-block");
        }
      } else {
        // @ts-ignore
        shadowRef.current.classList.remove("d-block");
      }
    }
  };

  const navItems = useMemo(() => {
    const { verticalNavItems = [] } = props;
    return verticalNavItems.filter((f: VerticalNavItemType) =>
      isShowMainMenu ? !f.isMainPage : !!f.isMainPage
    );
  }, [isShowMainMenu, props?.verticalNavItems]);

  const [expanded, setExpanded] = useState<string | false>(route.asPath || "");
  console.log("activePath:", activePath);
  console.log("parentPathActive:", parentPathActive);

  console.log("expanded:", expanded);

  useEffect(() => {
    setExpanded(route?.asPath);
  }, [route]);

  const handleChangeCategory =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const ScrollWrapper = hidden ? Box : PerfectScrollbar;

  return (
    <Drawer {...props}>
      <Box sx={{ p: 8 }}>
        <VerticalNavHeader {...props} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              textAlign: "left",
              pl: 8,
              width: "100%",
              cursor: "pointer",
            }}
            variant="h5"
          >
            MENU THÔNG TIN
          </Typography>
        </Box>
        {!isShowMainMenu && (
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            {/* @ts-ignore */}
            <ScrollWrapper
              containerRef={(ref: any) => handleInfiniteScroll(ref)}
              {...(hidden
                ? {
                    onScroll: (container: any) => scrollMenu(container),
                    sx: {
                      height: "100%",
                      overflowY: "auto",
                      overflowX: "hidden",
                    },
                  }
                : {
                    options: { wheelPropagation: false },
                    onScrollY: (container: any) => scrollMenu(container),
                  })}
            >
              <Box mt={25}>
                {verticalNavItems?.map((ele) => {
                  const NavItem = ele as NavLink;
                  console.log("NavItem:", NavItem);
                  return (
                    <Accordion
                      key={NavItem.id}
                      expanded={
                        (expanded === `/${NavItem.path}` ||
                          `/${NavItem.path}` ===
                            `/${parentPathActive?.path}`) &&
                        expanded !== "/"
                      }
                      onChange={handleChangeCategory(`/${NavItem.path}`)}
                      sx={{
                        px: 10,
                        py: 8,
                        m: 0,
                        "&.MuiPaper-root": {
                          borderBottom: `1px solid ${theme.palette.customColors.whiteSmoke}`,
                        },
                        "&.MuiAccordion-root.Mui-expanded": {
                          margin: 0,
                          backgroundColor:
                            NavItem.title !== "HOME" ? "#f6f6f6" : "initial",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          NavItem.title !== "HOME" && <ExpandMoreIcon />
                        }
                        sx={{
                          margin: 0,
                          "&.Mui-expanded": {},
                        }}
                      >
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          onClick={() => {
                            toggleNavVisibility();
                            if (NavItem.title === "HOME") {
                              route.push("/");
                              return;
                            }
                            route.push(
                              `${route.basePath}/${NavItem.path}` || ""
                            );
                          }}
                        >
                          {NavItem.title}
                        </Typography>
                      </AccordionSummary>
                      {NavItem?.children?.map((item: NavLink) => (
                        <Stack
                          key={item.id}
                          direction={"row"}
                          spacing={20}
                          pl={16}
                          mt={20}
                          sx={{ cursor: "pointer" }}
                          onClick={() => {
                            route.push(`${route.basePath}/${item.path}` || "");
                            toggleNavVisibility();
                          }}
                        >
                          <Typography
                            variant="body1"
                            fontWeight={500}
                            sx={{
                              color:
                                `/${item.path}` === route?.asPath
                                  ? "#3bb5e8"
                                  : theme.palette.common.black,
                              fontWeight:
                                `/${item.path}` === route?.asPath ? 700 : 400,
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Stack>
                      ))}
                    </Accordion>
                  );
                })}
              </Box>
            </ScrollWrapper>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default Navigation;
