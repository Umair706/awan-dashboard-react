import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Text, SecondaryText } from '../Text';

const ThemeTest = () => {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.background.default }}>
      <SecondaryText variant="h4">This is custom secondary text</SecondaryText>
      <Text variant="h4">This is custom text</Text>
    </div>
  );
};

export default ThemeTest;
