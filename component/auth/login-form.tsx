import React, { useState } from "react"
import { useForm } from 'react-hook-form'
import { InputField } from "../form/input-field"
import { Box } from "@mui/system"
import { Button, InputAdornment, IconButton } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
// import InputAdornment from "@mui/material/InputAdornment/InputAdornment"
// import IconButton from "@mui/material/IconButton/IconButton"
import { LoginPayLoad } from "@/models"

export interface LoginFormProps {
    onSubmit?: (payload: LoginPayLoad) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
    const [showPassword, setShowPassword] = useState(false)
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const { control, handleSubmit } = useForm<LoginPayLoad>({
        defaultValues: {
            username: '',
            password: '',

        }
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