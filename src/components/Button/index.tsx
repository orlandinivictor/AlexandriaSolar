import { useHistory } from "react-router-dom";
import { Container } from "./styles";

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  title: string;
};

export function Button({ title }: ButtonProps) {
  const history = useHistory();

  return (
    <Container onClick={() => history.push(`/${title.toLowerCase()}`)}>
      <h2>{title}</h2>
    </Container>
  );
}
