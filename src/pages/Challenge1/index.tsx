import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useHistory } from "react-router-dom";

import { Container } from "../../components/Container";

import { api } from "../../services/api";

import {
  Button,
  Grid,
  Item,
  Icon,
  Pagination,
  PageButton,
  Title,
} from "./styles";

type SensorProps = {
  statusA: number;
  statusB: number;
  statusC: number;
  statusD: number;
  statusE: number;
  statusF: number;
  temperatureA: number;
  temperatureB: number;
};

export function Challenge1() {
  const history = useHistory();

  const [sensors, setSensors] = useState<SensorProps[]>([]);
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    const res = await api.get("/desafio_01");
    setSensors(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBackwardPage = () => {
    if (page === 0) {
      setPage(sensors.length - 1);
    } else {
      setPage(page - 1);
    }
  };

  const handleForwardPage = () => {
    if (page === sensors.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  return (
    <Container>
      {sensors.length ? (
        <>
          <Button
            style={{ position: "absolute", top: 10, left: 10 }}
            onClick={() => history.push("/")}
          >
            <Icon style={{ fontSize: 24, padding: 5 }}>home</Icon>
          </Button>

          <Title>CLP {page + 1}</Title>
          <Grid>
            <Button style={{ left: "-50px" }} onClick={handleBackwardPage}>
              <Icon>arrow_left</Icon>
            </Button>
            <Item>
              <h2>TemperatureA</h2>
              <span>{sensors[page].temperatureA}ºC</span>
            </Item>
            <Item>
              <h2>TemperatureB</h2>
              <span>{sensors[page].temperatureB}ºC</span>
            </Item>
            <Item>
              <h2>StatusA</h2>
              <span>{sensors[page].statusA}</span>
            </Item>
            <Item>
              <h2>StatusB</h2>
              <span>{sensors[page].statusB}</span>
            </Item>
            <Item>
              <h2>StatusC</h2>
              <span>{sensors[page].statusC}</span>
            </Item>
            <Item>
              <h2>StatusD</h2>
              <span>{sensors[page].statusD}</span>
            </Item>
            <Item>
              <h2>StatusE</h2>
              <span>{sensors[page].statusE}</span>
            </Item>
            <Item>
              <h2>StatusF</h2>
              <span>{sensors[page].statusF}</span>
            </Item>
            <Button style={{ right: "-50px" }} onClick={handleForwardPage}>
              <Icon>arrow_right</Icon>
            </Button>
          </Grid>
          <Pagination>
            {sensors.map((sensor: SensorProps) => {
              const sensorIndex = sensors.indexOf(sensor);
              return (
                <PageButton onClick={() => handleChangePage(sensorIndex)}>
                  {sensorIndex + 1}
                </PageButton>
              );
            })}
          </Pagination>
        </>
      ) : (
        <ReactLoading type="bars" color="#eee" height="20%" width="20%" />
      )}
    </Container>
  );
}
