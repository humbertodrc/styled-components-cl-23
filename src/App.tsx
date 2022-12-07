import "./App.css";
import { Button, ButtonOutLine } from './components/Button/styled';
import { FaArrowCircleLeft } from "react-icons/fa";

function App() {
	return (
		<div className="App">
      <h1>React TypeScript</h1>
      <Button>Button</Button>
      <Button primary>Button2</Button>

      <Button>
        <FaArrowCircleLeft />
        Button2
      </Button>
      
      <ButtonOutLine>Button3</ButtonOutLine>
      <ButtonOutLine primary>Button4</ButtonOutLine>

      <ButtonOutLine>
        <FaArrowCircleLeft />
        Button5
      </ButtonOutLine>
		</div>
	);
}

export default App;
