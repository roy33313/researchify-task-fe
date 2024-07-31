import { Select, MenuItem, styled } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";

const StyledSelect = styled(Select)(() => ({
  width: "50vw",
  marginBottom: "20px",
  backgroundColor: "white",
  borderRadius: "4px",
  "& .MuiSelect-select": {
    padding: "12px 16px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

const customMenuProps = {
  PaperProps: {
    sx: {
      mt: 1, // Add a small gap
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      "& .MuiList-root": {
        padding: 0, // Remove list padding
      },
      "& .MuiMenuItem-root": {
        padding: "12px 16px",
      },
    },
  },
};

const StyledIcon = styled("div")({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  borderTopRightRadius: "4px",
  borderBottomRightRadius: "4px",
});

const SelectDropdown = ({ value, onChange, options }) => {
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      onOpen={() => setSelectOpen(true)}
      onClose={() => setSelectOpen(false)}
      displayEmpty
      MenuProps={customMenuProps}
      IconComponent={() => (
        <div style={{ backgroundColor: "white" }}>
          {selectOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </div>
      )}
      renderValue={(selected) => {
        if (!selected || selected === "") {
          return <span style={{ color: "#D8DEF3" }}>All tasks</span>;
        }
        return selected;
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default SelectDropdown;
