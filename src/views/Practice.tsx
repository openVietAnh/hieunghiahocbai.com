import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Operator } from "../components/Operator";

export const Practice: React.FC = () => {
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
      <Operator />
    </>
  );
};
