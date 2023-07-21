import React, { useState } from "react"
import { useForm } from 'react-hook-form'
import { InputField } from "../form/input-field"
import { Box } from "@mui/system"
import { Button, InputAdornment, IconButton } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
// import InputAdornment from "@mui/material/InputAdornment/InputAdornment"
// import IconButton from "@mui/material/IconButton/IconButton"
import { LoginPayLoad } from "@/models";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export interface LoginFormProps {
    onSubmit?: (payload: LoginPayLoad) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
    const schema = yup.object().shape({
        username: yup.string().required('please enter username').min(4, 'username must be more than 6 characters '),

        password: yup
            .string()
            .required('please enter username')
            .min(4, 'password must be more than 6 characters')
    })

    const [showPassword, setShowPassword] = useState(false)
    const { control, handleSubmit } = useForm<LoginPayLoad>({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(schema),

    })

    function handleLoginSubmit(payload: LoginPayLoad) {
        console.log('on submit:', payload);
        onSubmit?.(payload)
    }

    return (
        <Box component='form' onSubmit={handleSubmit(handleLoginSubmit)}>
            <InputField name="username" control={control} />
            <InputField type={showPassword ? "text" : "password"} name="password" control={control}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(x => !x)}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <Button type="submit" variant="contained">Login</Button>
        </Box>
    )
}