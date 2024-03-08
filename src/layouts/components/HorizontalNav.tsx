// ** React Imports
import { useEffect, useState } from "react";
// ** MUI Imports
import { Button, MenuItem, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
// ** Next Imports
import { useRouter } from "next/router";
// ** Icons Imports
import { FaChevronDown } from "react-icons/fa6";
// ** Component Import
import styled from "@emotion/styled";
import {
  NavGroup,
  NavLink,
  VerticalNavItemType,
  VerticalNavItemsType,
} from "src/@core/layouts/types";
import HorizontalNavItems from "src/navigation/horizontalNav";
import ServerSideNavItems from "./vertical/ServerSideNavItems";

// ** Third Party Components
import useActiveNavigation from "src/@core/hooks/useActiveNav";

interface Props {
  verticalNavItems?: VerticalNavItemsType;
}

const HorizontalNav = (props: Props) => {
  const { verticalNavItems } = props;
  const route = useRouter();
  const theme = useTheme();

  const { activePath, parentPathActive } =
    useActiveNavigation(verticalNavItems);

  const [open, setOpen] = useState<{ id: string | null }>({ id: null });

  const AppBarMenu = styled(
    ({
      className,
      hasChildren,
      ...props
    }: { hasChildren: boolean } & TooltipProps) => (
      <Tooltip
        {...props}
        classes={{ popper: className }}
        placement="bottom-start"
      />
    )
  )(({ theme, hasChildren }: any) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: "14px",
      color: "#212529 !important",
      borderRadius: 0,
      backgroundColor: "white",
      padding: "10px 0",
      border: hasChildren ? "1px solid #ececec" : "none",
    },
  }));

  const handleClickPrimaryNav = (NavItem: NavLink) => {
    if (NavItem.title === "HOME") {
      route.push(`${route.basePath}/${NavItem.path}` || "");
      return;
    }

    route.push(`${route.basePath}/${NavItem.path}` || "");
  };
  return (
    <>
      {verticalNavItems?.map((ele: VerticalNavItemType) => {
        const NavItem = ele as NavLink;
        const isHome = route.pathname === "/" && NavItem.title === "HOME";

        return (
          <Box key={NavItem.title}>
            <AppBarMenu
              open={open.id === NavItem.title}
              onOpen={() => setOpen({ id: NavItem.title })}
              onClose={() => setOpen({ id: null })}
              onClick={() => handleClickPrimaryNav(NavItem)}
              hasChildren={NavItem.children && NavItem.children.length > 0}
              title={
                <>
                  {NavItem.children?.map((child: NavLink) => (
                    <MenuItem
                      key={child.id}
                      onClick={() => {
                        route.push(`${route.basePath}/${child.path}` || "");
                      }}
                      sx={{
                        color:
                          child.id === activePath?.id &&
                          `/${child.path}` === route.asPath
                            ? "#3bb5e8"
                            : theme.palette.common.black,
                        fontWeight:
                          child.id === activePath?.id &&
                          `/${child.path}` === route.asPath
                            ? 700
                            : 400,
                        "&:hover": { color: "#3bb5e8", ml: 2 },
                      }}
                    >
                      {child.title}
                    </MenuItem>
                  ))}
                </>
              }
            >
              <Button
                sx={{
                  mr: 25,
                  py: 1,
                  px: 1,
                  display: "flex",
                  alignItems: "center",
                }}
                id={`${NavItem.title}`}
              >
                <Box
                  sx={[
                    {
                      mr: 3,
                      borderRadius: "4px",
                      cursor: "pointer",
                      backgroundColor: "transparent",
                      position: "relative",
                      display: "inline-block",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: "100%",
                        width:
                          isHome || parentPathActive?.title === NavItem.title
                            ? "100%"
                            : 0,
                        height: "2px",
                        backgroundColor: theme.palette.primary.main,
                        transition: "width .3s ease-in-out",
                      },
                      "&:hover:after": {
                        width: "100%",
                      },
                    },
                  ]}
                >
                  <Typography
                    sx={[
                      {
                        color: "#212529",
                        fontWeight: "700",
                        fontSize: "1rem",
                      },
                    ]}
                  >
                    {NavItem.title}
                  </Typography>
                </Box>
                {NavItem.title !== "HOME" && <FaChevronDown />}
              </Button>
            </AppBarMenu>
          </Box>
        );
      })}
    </>
  );
};

export default HorizontalNav;
