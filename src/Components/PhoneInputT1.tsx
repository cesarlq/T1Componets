import React, { useState, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  Select, 
  MenuItem, 
  InputBase,
  SelectChangeEvent
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Flag from 'react-world-flags';

// Country definition interface
interface Country {
  code: string;
  name: string;
  prefix: string;
}

// Predefined countries list
const DEFAULT_COUNTRIES: Country[] = [
  { code: 'MX', name: 'Mexico', prefix: '+52' },
  { code: 'US', name: 'United States', prefix: '+1' },
  { code: 'ES', name: 'Spain', prefix: '+34' },
  { code: 'CA', name: 'Canada', prefix: '+1' },
  { code: 'BR', name: 'Brazil', prefix: '+55' },
  { code: 'AR', name: 'Argentina', prefix: '+54' },
  { code: 'GB', name: 'United Kingdom', prefix: '+44' },
  { code: 'FR', name: 'France', prefix: '+33' },
  { code: 'DE', name: 'Germany', prefix: '+49' },
  { code: 'IT', name: 'Italy', prefix: '+39' },
  { code: 'PT', name: 'Portugal', prefix: '+351' },
  { code: 'JP', name: 'Japan', prefix: '+81' },
  { code: 'CN', name: 'China', prefix: '+86' },
  { code: 'AU', name: 'Australia', prefix: '+61' },
  { code: 'NZ', name: 'New Zealand', prefix: '+64' },
  { code: 'IN', name: 'India', prefix: '+91' }
];

// Props interface
interface PhoneInputT1Props {
  initialRegion?: string;
  initialPhoneNumber?: string;
  countries?: Country[];
  onChange?: (region: string, phoneNumber: string) => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

const PhoneInputT1: React.FC<PhoneInputT1Props> = ({
  initialRegion,
  initialPhoneNumber = '',
  countries = DEFAULT_COUNTRIES,
  onChange,
  placeholder = 'Cellphone number',
  error = false,
  helperText
}) => {
    
  const getInitialCountry = () => {
    if (initialRegion) {
      const country = countries.find(c => c.prefix === initialRegion);
      return country || countries[0];
    }
    return countries[0];
  };

  
  const [selectedCountry, setSelectedCountry] = useState<Country>(getInitialCountry());
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);

  
  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    const country = countries.find(c => c.code === event.target.value);
    if (country) {
      setSelectedCountry(country);
      onChange?.(country.prefix, phoneNumber);
    }
  };

  
  const handlePhoneNumberChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    
    if (value === '' || /^\d{1,10}$/.test(value)) {
      setPhoneNumber(value);
      onChange?.(selectedCountry.prefix, value);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #c4c4c4',
          borderRadius: '15px',
          overflow: 'hidden',
          bgcolor: 'background.paper',
          '& .MuiSelect-select': {
            paddingY: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }
        }}
      >
        <Select
          value={selectedCountry.code}
          onChange={handleCountryChange}
          sx={{
            minWidth: '120px',
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            '& .MuiSelect-select': { padding: '8px' },
            borderRight: '1px solid #c4c4c4',
            borderRadius: '0px !important'
          }}
          IconComponent={KeyboardArrowDownIcon}
          renderValue={(value) => {
            const country = countries.find(c => c.code === value);
            return (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: '24px', height: '16px' }}>
                  <Flag code={country?.code} height="16" width="24" />
                </Box>
                <span>{country?.prefix}</span>
              </Box>
            );
          }}
        >
          {countries.map((country) => (
            <MenuItem key={country.code} value={country.code}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: '24px', height: '16px' }}>
                  <Flag code={country.code} height="16" width="24" />
                </Box>
                <span>{country.prefix}</span>
                <span>{country.name}</span>
              </Box>
            </MenuItem>
          ))}
        </Select>
        <InputBase
          placeholder={placeholder}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          inputProps={{ 
            pattern: '[0-9]*', 
            maxLength: 10, 
            inputMode: 'numeric' 
          }}
          id="cellphone"
          type="text"
          sx={{
            flex: 1,
            px: 2
          }}
        />
      </Box>

      {error || (phoneNumber.length > 0 && phoneNumber.length < 10) ? (
        <Box
          sx={{
            color: '#d32f2f',
            mx: 2,
            mt: 0.5,
            fontSize: '0.75rem'
          }}
        >
          {helperText || 'Cellphone number must be at least 10 digits'}
        </Box>
      ) : null}
    </Box>
  );
};

export default PhoneInputT1;