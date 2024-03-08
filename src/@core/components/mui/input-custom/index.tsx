// ** React Imports
import { ReactNode, useState } from 'react'
// ** MUI Imports
import { Box, IconButton, InputAdornment, SxProps, TextField, Typography, useTheme } from '@mui/material'
// ** Third Party Components
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

export interface InputCustomProps {
  type?: string
  name?: string
  label?: string | ReactNode
  placeHolder?: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (value: string) => void
  value?: string
  width?: string
  height?: string
  borderRadius?: string
  sx?: SxProps
  mt?: number
  endAdornment?: ReactNode
  error?: string | boolean
  helperText?: string | boolean
  textFieldProps?: React.ComponentProps<typeof TextField> // Add textFieldProps prop
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> // Add inputProps prop
}

export default function InputCustom(props: InputCustomProps) {
  const {
    type = 'text',
    name = '',
    placeHolder = '',
    value = '',
    onBlur,
    onChange,
    width = '100%',
    height = '42px',
    label = '',
    borderRadius = '8px',
    sx,
    // Destructure and include any additional props you want to pass to the TextField component
    mt,
    endAdornment,
    error,
    helperText,
    inputProps = {}, // Add inputProps
    textFieldProps, // Add textFieldProps
    ...otherProps
  } = props
  const theme = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const handleTogglePassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event?.target?.value
    if (onChange) {
      onChange(newValue)
    }
  }
  const defaultEndAdornment =
    type === 'password' ? (
      <InputAdornment position='end'>
        <IconButton onClick={handleTogglePassword} edge='end'>
          {!showPassword ? <FaEyeSlash /> : <FaEye />}
        </IconButton>
      </InputAdornment>
    ) : (
      <></>
    )

  return (
    <Box mt={mt}>
      {label && typeof label == 'string' ? (
        <Typography
          component={'p'}
          variant='label2'
          mb={8}
          color={!!error ? theme.palette.error.main : theme.palette.text.primary}
        >
          {label}
        </Typography>
      ) : (
        <>{label}</>
      )}
      <TextField
        name={name}
        value={value}
        type={showPassword ? 'text' : type}
        InputLabelProps={{ shrink: false }}
        placeholder={placeHolder}
        variant='outlined'
        onBlur={onBlur}
        onChange={handleOnChange}
        sx={{ width: { width }, ...sx }}
        error={!!error} // Set error prop based on its existence
        helperText={helperText}
        InputProps={{
          ...(endAdornment ? { endAdornment } : { endAdornment: defaultEndAdornment })
        }}
        {...textFieldProps} // Spread the textFieldProps prop to the TextField component
        {...otherProps} // Spread the remaining props to the TextField component
      />
    </Box>
  )
}
