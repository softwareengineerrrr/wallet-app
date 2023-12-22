import { memo, useState, MouseEvent } from 'react';

import {
    Box,
    FormControl,
    FormHelperText,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputProps } from '@mui/material/Input/Input';

import { NUL } from '@typings/common';

import { SignInFormType } from '@ui/pages/CreateWallet/CreateWallet.typings';

const SignInForm = ({ formValues, handleChangeSignInValue, errorFields }: SignInFormType) => {
    return (
        <Box
            component="form"
            sx={{
                p: '4ch 0 2ch',
                display: 'flex',
                flexDirection: 'column',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="standard-required"
                label="Login"
                variant="standard"
                value={formValues.username}
                error={errorFields[0] !== null}
                helperText={errorFields[0] !== null && errorFields[0]}
                InputProps={{ inputProps: { min: 5, max: 50 } }}
                onChange={(e) => handleChangeSignInValue({ type: 'username', event: e })}
            />
            <PasswordField
                label={'Password'}
                id={'p-1'}
                value={formValues.password}
                error={errorFields[1] !== null}
                helperText={errorFields[1]}
                onChange={(e) => handleChangeSignInValue({ type: 'password', event: e })}
            />
            <PasswordField
                label={'Confirm password'}
                id={'p-2'}
                value={formValues.confirmPassword}
                error={errorFields[2] !== null}
                helperText={errorFields[2]}
                onChange={(e) => handleChangeSignInValue({ type: 'confirmPassword', event: e })}
            />
        </Box>
    );
};
export default memo(SignInForm);

const PasswordField = ({
    label,
    id,
    helperText,
    ...rest
}: { label: string; id: string; helperText: NUL<string> } & InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" id={id} required>
            <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
            <Input
                required
                id="standard-password-input"
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                inputProps={{ inputProps: { min: 5, max: 50 } }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="small"
                        >
                            {showPassword ? (
                                <VisibilityOff fontSize="small" color={'disabled'} />
                            ) : (
                                <Visibility fontSize="small" />
                            )}
                        </IconButton>
                    </InputAdornment>
                }
                {...rest}
            />
            {helperText && <FormHelperText error>{helperText}</FormHelperText>}
        </FormControl>
    );
};
