import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Show from "./Show";
import ShowCards from "./ShowCards";

function CompanyHome() {
  const [data, setData] = React.useState<any>([]);

  const navigate = useNavigate();

  function getAndNavigate() {
    navigate("/add");

    React.useEffect(() => {
      axios
        .get("https://63e225d4109336b6cb00a67d.mockapi.io/companiesDB")
        .then((res) => {
          setData(res.data);
          console.log(data);
        });
    }, []);
  }

  return (
    <>
      <Box mx={""} width="100px" display="block" justifyContent={"start"}>
        <Button
          flex={1}
          bg={"green.200"}
          color="#fff"
          onClick={() => getAndNavigate()}
        >
          Add New
        </Button>
      </Box>

      {/* this how */}
      <Show />
    </>
  );
}

export default CompanyHome;
