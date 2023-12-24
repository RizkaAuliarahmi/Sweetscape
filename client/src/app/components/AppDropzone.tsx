import { UploadFile } from '@mui/icons-material'
import { FormControl, Typography, FormHelperText, useTheme, useMediaQuery } from '@mui/material'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useController, UseControllerProps } from 'react-hook-form'

interface Props extends UseControllerProps { }

export default function AppDropzone(props: Props) {
    const { fieldState, field } = useController({ ...props, defaultValue: null });
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const dzStyles = {
      display: 'flex',
      border: 'dashed 3px #eee',
      borderColor: '#eee',
      borderRadius: '5px',
      paddingTop: isSmScreen ? '15px' : '30px',
      alignItems: 'center',
      height: isSmScreen ? 150 : 200,
      width: isSmScreen ? '100%' : 500,
      flexDirection: 'column', 
    };
  
    const dzActive = {
      borderColor: '#d3979f'
    };
  
    const onDrop = useCallback((acceptedFiles: any) => {
      acceptedFiles[0] = Object.assign(acceptedFiles[0], { preview: URL.createObjectURL(acceptedFiles[0]) });
      field.onChange(acceptedFiles[0]);
    }, [field]);
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
    return (
      <div {...getRootProps()}>
        <FormControl style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles} error={!!fieldState.error} >
          <input {...getInputProps()} />
          <UploadFile sx={{ fontSize: '100px' }} />
          <Typography variant='h4'>Drop image here</Typography>
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
      </div>
    );
  }