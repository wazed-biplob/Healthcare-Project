import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopRatedDoctors = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/doctor?page=1&limit=10"
  );
  const data = await res.json();

  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "lightgrey",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography>Our Top Rated Doctors</Typography>
      </Box>
      <Container>
        <Grid container spacing={2} className="justify-center">
          {data?.data?.map((doctor: any) => (
            <Grid item key={doctor?.id}>
              <Card sx={{ maxWidth: 320 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={doctor?.profilePhoto}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor?.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {doctor?.qualification} {doctor?.designation}
                  </Typography>
                  <Typography gutterBottom>
                    <LocationOnIcon /> {doctor?.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Book Now</Button>
                  <Button variant="outlined" size="small">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", my: "8px" }}>
          <Button variant="outlined">View All</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
