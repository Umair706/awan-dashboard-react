import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@emotion/react';
import { styled } from '@mui/system';

const StyledCardHeader = styled(CardHeader)(({ theme, gradient }) => ({
  transition: 'background-color 0.2s ease',
  borderRadius: 14,
  '&:hover': {
    // top: -100,
    transform: 'scale(1.1)',
  },
  backgroundImage: theme.gradients[gradient] || theme.gradients.red,
  paddingTop: '16px',
  paddingBottom: '16px',
  marginTop: '-40px',
  position: 'relative',
  height: '12.5rem',
  opacity: '1',
  transition: 'all 0.6s',
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  textAlign: 'center',
  borderRadius: '0.5rem',
  boxShadow: theme.shadows.primary,
  color: "#fff"
}));

const ShiningCard = ({ header, content, gradient, children }) => {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const boxShadow =
    theme.palette.mode === 'dark'
      ? '0px 0px 10px rgba(255,255,255,0.1)'
      : '0px 0px 10px rgba(0,0,0,0.1)';

  return (
    <Card
      sx={{
        position: 'relative',
        boxShadow: boxShadow,
        padding: '1rem',
        opacity: 1,
        overflow: 'visible',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledCardHeader title={header} theme={theme} gradient={gradient} />
      <CardContent
        sx={{
          padding: '24px 8px 8px',
          opacity: 1,
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        {content}
      </CardContent>
      {children}
    </Card>
  );
};

export default ShiningCard;
