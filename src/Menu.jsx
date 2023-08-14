import pizzaData from '../public/data';
import Pizza from './Pizza';

const Menu = () => (
  <main className="menu">
    <h2>Our menu</h2>

    <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizzaObject={pizza} key={pizza.name} />
      ))}
    </ul>
  </main>
);
export default Menu;
