import React from "react";
import { AppHeaderProps } from "./app-header-props";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./app-header.module.scss";
export const AppHeader: React.FC<AppHeaderProps> = (props): JSX.Element => {
  return (
    <React.Fragment>
      <div className={styles.header_root}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography className={styles.app_name} variant="h6">
              Crawlerino
            </Typography>
            <div className={styles.right_side_buttons}>
              <Button color="inherit">New</Button>
              <Button color="inherit">Fork</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
};

export default AppHeader;
