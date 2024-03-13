import React from "react";
import ListItemButton from "@mui/material/ListItemButton";

const ListButton = ({ Icon, title, onClick }) => {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        ":hover": {
          bgcolor: "#444",
        },
      }}
    >
      <li className="flex gap-4 text-neutral-200 font-light text-sm">
        <Icon /> <p>{title}</p>
      </li>
    </ListItemButton>
  );
};

export default ListButton;
