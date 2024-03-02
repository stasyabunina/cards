import './App.css';
import Cards from './components/Cards'
import Card from './components/Card';
import cards from './data/data';

function App() {
  return (
    <Cards items={cards}>
      {items => items.map((item) =>
        <Card key={item.id}>
          {item}
        </Card>
      )}
    </Cards>
  );
}

export default App;
