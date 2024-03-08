// ** React Imports
// ** MUI Imports
import { Button, Grid, TextField, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// ** Next Imports
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

// ** Component Import
// ** Third Party Components
import { useRouter } from "next/router";

const FooterContent = () => {
  const theme = useTheme();
  const router = useRouter();

  return <Box>Footer</Box>;
};

export default FooterContent;
