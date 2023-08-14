import pizzaData from '../public/data';
import Pizza from './Pizza';

const Menu = () => {
  const numPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We&apos;re still working on our menu. Please come back later🍕</p>
      )}
    </main>
  );
};
export default Menu;
