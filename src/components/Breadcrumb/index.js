import React from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '@emotion/react';
const CustomBreadcrumbs = ({ links }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ padding: '0.5rem 0' }}
    >
      {links.map((link, index) => {
        if (index === links.length - 1) {
          return (
            <Typography
              color="text.primary"
              key={`breadcrumb-${index}`}
              sx={{ fontWeight: 'bold' }}
            >
              {link.label}
            </Typography>
          );
        }
        return (
          <Link
            color="inherit"
            href={link.href}
            key={`breadcrumb-${index}`}
            sx={{
              textDecoration: 'none',
              ':hover': { textDecoration: 'underline' },
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
