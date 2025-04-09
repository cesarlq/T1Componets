
import React from 'react';
import styles from '../styles/common/CommonStyles.module.scss';
import { TextField, Tooltip } from '@mui/material';
import { CustomInputI } from '../interfaces/commonInterfaces';

const CustomInput: React.FC<CustomInputI> = ({ label, required, textFieldProps, children, style, tooltip }) => (
	<div className={`${styles.container} ${textFieldProps && textFieldProps.className}`} style={textFieldProps && textFieldProps.fullWidth ? { width: '100%', ...style } : style}>
		{
			label &&
			<div className={styles['label-container']}>
				<div className={styles.label}>{label}{required && '*'}</div>
				{
					tooltip &&
					<Tooltip title={tooltip}>
						<div className={styles.tooltip}>
						</div>
					</Tooltip>
				}
			</div>
		}
		<TextField
			{...textFieldProps}
			inputProps={{
				...textFieldProps.inputProps
			}}
		>
			{
				textFieldProps && textFieldProps.select && children
			}
		</TextField>
	</div>
);

export default CustomInput;