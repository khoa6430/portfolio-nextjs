// ** React Imports
import { useEffect, useLayoutEffect, useState } from "react";

// ** Import All Icons
import * as Icons from "mdi-material-ui";

// ** Axios Import
import axios from "axios";

// ** Type Import
import { NavLink, VerticalNavItemsType } from "src/@core/layouts/types";

import { useRouter } from "next/router";

const ServerSideNavItems = () => {
  // ** State
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<NavLink[]>([]);

  return menuItems;
};

export default ServerSideNavItems;
