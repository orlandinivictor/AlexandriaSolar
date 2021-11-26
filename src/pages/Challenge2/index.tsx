import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useHistory } from "react-router-dom";
import { CartesianGrid } from "recharts";
import { YAxis } from "recharts";
import { Tooltip } from "recharts";
import { XAxis } from "recharts";
import { Line, LineChart } from "recharts";

import { Container } from "../../components/Container";

import { api } from "../../services/api";

import { Button, Icon } from "./styles";

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

export function Challenge2() {
  const history = useHistory();

  const [sensors, setSensors] = useState<SensorProps[]>([]);

  const fetchData = async () => {
    const res = await api.get("/desafio_01");
    setSensors(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

          <LineChart
            width={800}
            height={340}
            data={sensors}
            margin={{ top: 5, right: 5, bottom: -20, left: -20 }}
            style={{
              backgroundColor: "rgba(0,0,0,0.35)",
            }}
          >
            <Line type="monotone" dataKey="temperatureA" stroke="darkblue" />
            <Line type="monotone" dataKey="temperatureB" stroke="darkred" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </>
      ) : (
        <ReactLoading type="bars" color="#eee" height="20%" width="20%" />
      )}
    </Container>
  );
}
