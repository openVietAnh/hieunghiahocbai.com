import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import CalculateIcon from "@mui/icons-material/Calculate";
import DifferenceIcon from "@mui/icons-material/Difference";

export const Practice: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const showLinks = location.pathname === "/practice";
  const searchParams = new URLSearchParams(location.search);
  const assigneeParam = searchParams.get("assignee");
  const queryString = assigneeParam ? `?assignee=${assigneeParam}` : "";

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link
          to={`/practice/operator${queryString}`}
          style={{ textDecoration: "none" }}
        >
          <ListItem key="Cộng trừ" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalculateIcon />
              </ListItemIcon>
              <ListItemText primary="Cộng trừ" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to={`/practice/minmax${queryString}`}
          style={{ textDecoration: "none" }}
        >
          <ListItem key="Lớn nhất/Bé nhất" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DifferenceIcon />
              </ListItemIcon>
              <ListItemText primary="Lớn nhất/Bé nhất" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(!open)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Luyện Tập
            </Typography>
            <a href="/">
              <Button color="inherit">Thoát</Button>
            </a>
          </Toolbar>
        </AppBar>
      </Box>

      {showLinks && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 20,
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Typography variant="h4" sx={{ marginRight: 2 }}>
            Chọn bài tập
          </Typography>
          <Paper
            elevation={12}
            sx={{
              width: 320,
              maxWidth: "100%",
            }}
          >
            <MenuList>
              <Link
                to={`/practice/operator${queryString}`}
                style={{ textDecoration: "none" }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <CalculateIcon />
                  </ListItemIcon>
                  <ListItemText>Cộng trừ</ListItemText>
                </MenuItem>
              </Link>
              <Link
                to={`/practice/minmax${queryString}`}
                style={{ textDecoration: "none" }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <DifferenceIcon />
                  </ListItemIcon>
                  <ListItemText>Lớn nhất/Bé nhất</ListItemText>
                </MenuItem>
              </Link>
            </MenuList>
          </Paper>
        </div>
      )}
      <Outlet />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};
