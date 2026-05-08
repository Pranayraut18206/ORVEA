import unique1 from "../../assets/unique1.png";
import unique2 from "../../assets/unique2.png";
import unique3 from "../../assets/unique3.png";
import unique4 from "../../assets/unique4.png";
import unique5 from "../../assets/unique5.png";
import unique6 from "../../assets/unique6.png";

export default function Unique() {

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "20px",
      }}
    >
      <div className="cardStyle">
        <img src={unique1} className="imageStyle" />
        <p className="textStyle">Premium Coffee Beans</p>
      </div>

      <div className="cardStyle">
        <img src={unique2} className="imageStyle" />
        <p className="textStyle">Freshly Roasted Beans</p>
      </div>

      <div className="cardStyle">
        <img src={unique3} className="imageStyle" />
        <p className="textStyle">Ethically and Sustainably Sourced</p>
      </div>

      <div className="cardStyle">
        <img src={unique4} className="imageStyle" />
        <p className="textStyle">Wide Variety of Flavours</p>
      </div>

      <div className="cardStyle">
        <img src={unique5} className="imageStyle" />
        <p className="textStyle">Fast & Fresh Delivery</p>
      </div>

      <div className="cardStyle">
        <img src={unique6} className="imageStyle" />
        <p className="textStyle">Expert Brewing Experience</p>
      </div>
    </div>
  );
}