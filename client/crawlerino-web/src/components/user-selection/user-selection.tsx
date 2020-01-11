import React from "react";
import { UserSelectionProps } from "./user-selection-props";
import styles from "./user-selection.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const UserSelection: React.FC<UserSelectionProps> = (
  props
): JSX.Element => {
  return (
    <React.Fragment>
      <div className={styles.selection_root}>
        <div className={styles.root__add_new_link_section}>
          <TextField
            className={styles.add_new_link_section__input}
            id="outlined-basic"
            label="Pazaruvaj link"
            variant="outlined"
          />
          <Button variant="contained" color="primary">
            Add
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserSelection;
