import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LoginIcon from "@mui/icons-material/Login";
import Logo from "../../../public/Logo.png";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const IconList = [
    {
      id: 0,
      icon: <HomeIcon />,
    },
    {
      id: 1,
      icon: <ViewAgendaIcon />,
    },
    {
      id: 2,
      icon: <ConnectWithoutContactIcon />,
    },
    {
      id: 3,
      icon: <QuestionAnswerIcon />,
    },
    {
      id: 4,
      icon: <LoginIcon />,
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="md:flex">
        {["Home", "FlashCard", "Contact", "FAQ", "Login"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <div className=" md:hidden">
                <ListItemIcon>{IconList[index].icon}</ListItemIcon>
              </div>
              <div
                className={`${
                  index === 4
                    ? "md:bg-[#072C75] md:w-32 md:h-12 md:flex md:items-center md:rounded-3xl md:text-white "
                    : null
                }`}
              >
                <ListItemText
                  primary={text}
                  className="md:flex md:justify-center"
                />
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider className="md:hidden" />
    </Box>
  );

  return (
    <div className="">
      {/* // For Small Screens */}
      <div className="bg-[#082299] h-14 md:hidden">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <div className="flex justify-between items-center pt-2">
              <div className="px-4 text-white">Hyggex</div>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon className="text-white" />
              </Button>
            </div>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
      
      {/* For Larger Screens */}
      <div className="hidden md:flex md:items-center md:justify-between ">
        <div className="px-4 text-[#06286E]">
          <img src={Logo} alt="" />
        </div>
        {list("top")}
      </div>
    </div>
  );
}
