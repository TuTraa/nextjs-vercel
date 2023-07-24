import React, { ChangeEvent, useState } from "react"
import { useForm } from 'react-hook-form'
import { InputField } from "../form/input-field"
import { Box } from "@mui/system"
import { Button, InputAdornment, IconButton, debounce } from "@mui/material"
import { Search, Visibility, VisibilityOff } from "@mui/icons-material"
// import InputAdornment from "@mui/material/InputAdornment/InputAdornment"
// import IconButton from "@mui/material/IconButton/IconButton"
import { WorkFilterPayload } from "@/models";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AutoCompleteField } from "../form"

export interface WorkFiltersProps {
    initialValues?: WorkFilterPayload
    onSubmit?: (payload: WorkFilterPayload) => void
}

export function WorkFilter({ initialValues, onSubmit }: WorkFiltersProps) {
    const schema = yup.object().shape({
        //     username: yup.string().required('please enter username').min(4, 'username must be more than 6 characters '),

        //     password: yup
        //         .string()
        //         .required('please enter username')
        //         .min(4, 'password must be more than 6 characters')
    })

    const {
        control,
        handleSubmit,
    } = useForm<WorkFilterPayload>({
        defaultValues: {
            tagList_search: '',
            ...initialValues,
        },
        // resolver: yupResolver(schema),
    })

    function handleLoginSubmit(payload: WorkFilterPayload) {
        // console.log('on submit:', payload);
        onSubmit?.(payload)
    }

    const debounceSearchChange = debounce(handleSubmit(handleLoginSubmit), 350)

    return (
        <>
            <Box component='form' onSubmit={handleSubmit(handleLoginSubmit)}>
                <InputField name="search"
                    placeholder="search work by title"
                    control={control}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Search />
                            </InputAdornment>
                        )
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        // console.log('change:', event.target.value);
                        debounceSearchChange()
                    }}
                />
            </Box>
            <Box component='form' onSubmit={handleSubmit(handleLoginSubmit)}>
                <AutoCompleteField name="tagList_search"
                    label="filter by category"
                    placeholder="filter by category"
                    control={control}
                    options={[{ title: 'tutran', key: 'next' }, { title: 'frontEnd', key: 'ezx' }]}
                    isOptionEqualToValue={(option, value) => option.key === value.key}
                    getOptionLabel={(option) => option.key}
                    onChange={() => debounceSearchChange()}
                />
            </Box>
        </>

    )
}