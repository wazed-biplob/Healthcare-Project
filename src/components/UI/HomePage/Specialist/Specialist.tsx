import { Button, Container, Stack, Typography } from "@mui/material";
import next from "next";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialities");
  const { data: specialities } = await res.json();

  // const [specialities, setSpecialities] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:5000/api/v1/specialities");
  //     const data = await res.json();

  //     setSpecialities(data?.data);
  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);
  return (
    <Container
      sx={{ margin: "40px 0px", textAlign: "center" }}
      className="mx-auto"
    >
      {specialities?.map((single: any) => (
        <Stack
          key={single.id}
          sx={{
            display: "flex",
            direction: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px 8px",
            gap: "4px",
            width: "150px",
            backgroundColor: "lightgrey",
            border: "1px solid grey",
            borderRadius: "10px",
            "& img": {
              width: "50px",
            },
            "&:hover": {
              border: "2px solid red",
            },
          }}
          className="border border-rounded"
        >
          <Image width={40} height={40} src={single.icon} alt="icon" />
          <Typography>{single.title}</Typography>
        </Stack>
      ))}
      <Button className="mx-auto" variant="outlined">
        View All
      </Button>
    </Container>
  );
};

export default Specialist;
