import React, { useEffect, useState } from "react";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import { Box, Stack, Toolbar, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import { drawerItems } from "@/utils/generateDrawerItems";
import { UserRole } from "@/types";
import SidebarItems from "./SidebarItems";
import { getUserInfo } from "@/service/actions/authService";
const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <div>
      <Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: "8px",
          }}
        >
          <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
          <Typography variant="h6" component="h1">
            HealthCare
          </Typography>
        </Box>
      </Stack>

      <Divider />
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItems key={index} item={item} />
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
