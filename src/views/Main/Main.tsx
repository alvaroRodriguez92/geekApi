import { OutlinedInput, Button } from "@mui/material";
import CardPlegada from "../../components/Cards/CardPlegada";
import { useCardContext } from "../../Context/cardContext";

export default function Main() {
  const { info } = useCardContext();

  let years: String[] = [];

  
  return (
    <main className="main-main">
      <h1>MI MAIN</h1>
      <OutlinedInput placeholder="Busca aqui..." />

      <CardPlegada info={info} />
    </main>
  );
}
