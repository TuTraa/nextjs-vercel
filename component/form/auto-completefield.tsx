import React, { ChangeEvent } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { Box } from "@mui/system"
import { TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { title } from "process";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export type AutoCompleteFieldProps<T, K extends FieldValues> = Partial<AutocompleteProps<T, boolean, boolean, boolean>>
    & {
        name: Path<K>,
        label?: string,
        control: Control<K>,
        placeholder?: string,

        options: T[],
        getOptionLabel: (option: T) => string,
        onChange: (selectedOptions: T[]) => void,

    }
type OptionType = {
    title: string;
    key: string;
};

export function AutoCompleteField<T, K extends FieldValues>({ name, control, placeholder, options,
    onChange: externalOnChange,
    label, getOptionLabel, isOptionEqualToValue,
    ...rest }: AutoCompleteFieldProps<T, K>) {
    const {
        field: { onChange, onBlur, value, ref
        },
        fieldState: { error }
    } = useController({
        name, control,
    })
    console.log('option:', options[1]);
    return (
        <>
            <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                fullWidth
                size="small"
                options={
                    options
                }
                isOptionEqualToValue={isOptionEqualToValue}
                disableCloseOnSelect
                getOptionLabel={getOptionLabel}
                renderOption={(props, option, { selected }) =>
                (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {getOptionLabel(option) || '-'}
                    </li>
                )
                }
                renderInput={(params) => (
                    <TextField {...params} name={name} label={label}
                        margin="normal" placeholder={placeholder} error={!!error}
                        helperText={error?.message} />
                )}
                // onChange={(event, value) => onChange?.(value)
                // }
                onBlur={onBlur}
                // value={value}
                ref={ref}
            />
        </>

    )
}