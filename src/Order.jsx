// eslint-disable-next-line react/prop-types
const Order = ({ closeHour }) => (
  <div className="order">
    <p>
      We&apos;re currently open unitl {closeHour}:00. Come visit us or order
      online.
    </p>
    <button className="btn" type="button">
      Order
    </button>
  </div>
);
export default Order;
