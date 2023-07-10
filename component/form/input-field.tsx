import React from "react";
import { Control, useController } from "react-hook-form";
import { Box } from "@mui/system"
import { TextField, TextFieldProps } from "@mui/material";
export type InputFieldProps = TextFieldProps & {
    name: string,
    label?: string,
    control: Control<any>

}

export function InputField({ name, label, control, onChange: externalOnchange, onBlur: externalOnBlur, ...rest }: InputFieldProps) {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error }
    } = useController({
        name, control
    })
    return (
        <TextField
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}
            fullWidth
            size="small"
            margin="normal"
            {...rest}
        />
    )
}