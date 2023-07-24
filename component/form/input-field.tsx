import React, { ChangeEvent } from "react";
import { Control, useController, Path, FieldValues } from "react-hook-form";
import { Box } from "@mui/system"
import { TextField, TextFieldProps } from "@mui/material";
export type InputFieldProps<T extends FieldValues> = TextFieldProps & {
    name: Path<T>,
    // label?: string,
    control: Control<T>

}

export function InputField<T extends FieldValues>(
    { name, label, control, onChange: externalOnchange, onBlur: externalOnBlur, ...rest
    }: InputFieldProps<T>) {
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
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                onChange(event)
                externalOnchange?.(event)
            }}
            onBlur={onBlur}
            inputRef={ref}
            fullWidth
            size="small"
            margin="normal"
            error={!!error}
            helperText={error?.message}
            {...rest}
        />
    )
}