import React from 'react';
import Layout from '../../Layout';
import {
  Card,
  BackgroundTable,
  Menu,
  PaginatedTable,
  SecondaryText,
  Title,
  TransparentTable,
} from '../../components';
import { Grid } from '@mui/material';

const Cards = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} sx={{ marginBottom: 10 }}>
        <Card
          gradient={'red'}
          header="Red Header"
          content={
            <>
              <Title>Red Header</Title>
              <SecondaryText>
                "You can use the card compoennet like this. I hope you like it"
              </SecondaryText>
            </>
          }
        />
      </Grid>
      <Grid item xs={4} sx={{ marginBottom: 10 }}>
        <Card
          gradient={'blue'}
          header="Blue Header"
          content={
            <>
              <Title>Blue Header</Title>
              <SecondaryText>
                "You can use the card compoennet like this. I hope you like it"
              </SecondaryText>
            </>
          }
        />
      </Grid>
      <Grid item xs={4} sx={{ marginBottom: 10 }}>
        <Card
          gradient={'yellow'}
          header="Yellow Header"
          content={
            <>
              <Title>Yellow Header</Title>
              <SecondaryText>
                "You can use the card compoennet like this. I hope you like it"
              </SecondaryText>
            </>
          }
        />
      </Grid>
      <Grid item xs={4} sx={{ marginBottom: 10 }}>
        <Card
          gradient={'pink'}
          header="Pink Header"
          content={
            <>
              <Title>Pink Header</Title>
              <SecondaryText>
                "You can use the card compoennet like this. I hope you like it"
              </SecondaryText>
            </>
          }
        />
      </Grid>
      <Grid item xs={4} sx={{ marginBottom: 10 }}>
        <Card
          gradient={'green'}
          header="Green Header"
          content={
            <>
              <Title>Green Header</Title>
              <SecondaryText>
                "You can use the card compoennet like this. I hope you like it"
              </SecondaryText>
            </>
          }
        />
      </Grid>
      <Grid item xs={4} sx={{ marginBottom: 10 }}>
        <Card
          gradient={'gray'}
          header="Gray Header"
          content={
            <>
              <Title>Gray Header</Title>
              <SecondaryText>
                "You can use the card compoennet like this. I hope you like it"
              </SecondaryText>
            </>
          }
        />
      </Grid>
      <Grid item xs={4} sx={{ marginBottom: 10 }}>
        <Card
          gradient={'purple'}
          header="Purple Header"
          content={
            <>
              <Title>Purple Header</Title>
              <SecondaryText>
                "You can use the card compoennet like this. I hope you like it"
              </SecondaryText>
            </>
          }
        />
      </Grid>
    </Grid>
  );
};

export default Layout(Cards);
