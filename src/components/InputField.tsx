import { InputLabel, TextField, TextFieldProps } from "@mui/material";

const InputField = ({ value, onChange, ...props }: TextFieldProps) => {
  return (
    <div className="space-y-1">
      <InputLabel
        htmlFor={props.name}
        className="capitalize"
        sx={{
          "&.MuiInputLabel-root": {
            color: "white",
            margin: 0,
          },
        }}
      >
        {props.name}
      </InputLabel>
      <TextField
        fullWidth
        value={value}
        onChange={onChange}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "#ccc",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#333",
            },
          },
          "& .MuiInputBase-input": {
            backgroundColor: "#f9f9f9",
            borderRadius: "5px",
          },
        }}
        {...props}
      />
    </div>
  );
};

export default InputField;
