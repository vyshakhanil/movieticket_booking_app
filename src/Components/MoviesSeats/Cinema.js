import React, {useState} from "react";
import clsx from "clsx";
import "../Styles.css";
import Notification from "../../Notification/Notification";
import {Link} from "react-router-dom";

const Cinema = (props) => {
  const {movie, selectedSeats, onSelectedSeatsChange} = props;

  const [seatsSelected, setSeatsSelected] = useState();

  const seats = Array.from({length: 8 * 8}, (_, i) => i);

  function handleSelectedState(seat) {
    // console.log(seat, "seatsss");
    const isSelected = selectedSeats.includes(seat);
    // console.log(isSelected, "isSelected");
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  const handleBooked = () => {
    movie.occupied.push(...selectedSeats);

    Notification("Success", "Seats Booked", "success");
  };

  return (
    <div>
      <div className="Cinema">
        <div className="screen" />

        <div className="seats">
          {seats.map((seat) => {
            const isSelected = selectedSeats.includes(seat);
            const isOccupied = movie.occupied.includes(seat);

            return (
              <span
                tabIndex={0}
                key={seat}
                className={clsx(
                  "seat",
                  isSelected && "selected",
                  isOccupied && "occupied"
                )}
                onClick={() => handleSelectedState(seat)}
                onKeyDown={(e) => {
                  if (e.key.toLowerCase() === "enter") {
                    handleSelectedState(seat);
                  }
                }}
              />
            );
          })}
        </div>
        <div>
          <Link to="/">
            <button onClick={() => handleBooked()}>ok</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cinema;
