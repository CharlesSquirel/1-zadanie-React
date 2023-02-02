import "./Tabel.css";
import { carsList } from "../data/data";

export default function Tabel() {
  return (
    <div className="tabel-container">
      <table className="tabel">
        <tr>
          <th>Name</th>
          <th>Car Model</th>
          <th>Color</th>
          <th>Year</th>
          <th>Price</th>
          <th>Availability</th>
        </tr>
        {carsList.map((car) => (
          <tr className={!car.availability ? "is-not-avaible" : "is-avaible"}>
            <td>{car.car}</td>
            <td>{car.car_model}</td>
            <td>{car.car_color}</td>
            <td>{car.car_model_year}</td>
            <td>{car.price}</td>
            <td>{car.availability.toString()}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
