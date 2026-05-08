import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"
import icon5 from "../../assets/icon5.png"
import icon6 from "../../assets/icon6.png"
export default function Why() {
  const features = [
    {
      img: icon1,
      title: "Better Sleep",
      desc: "Enjoy coffee flavor without disturbing your sleep cycle.",
    },
    {
      img: icon2,
      title: "Less Anxiety",
      desc: "Reduce caffeine jitters and stay calm throughout the day.",
    },
    {
      img: icon3,
      title: "Heart Friendly",
      desc: "Lower caffeine intake may support heart health.",
    },
    {
      img: icon4,
      title: "Anytime Coffee",
      desc: "Drink coffee during evenings without worry.",
    },
    {
      img: icon5,
      title: "Smooth Taste",
      desc: "Rich coffee flavor with a smoother experience.",
    },
    {
      img: icon6,
      title: "Healthy Habit",
      desc: "Perfect for people sensitive to caffeine.",
    },
  ];

  return (
    <div style={{ padding: "60px 40px" }} id="why-decaf">
      <div
        style={{
          textAlign: "center",
          fontSize: "72px",
          fontWeight: "700",
          fontFamily: "ui-sans-serif",
          marginBottom: "70px",
        }}
      >
        Why Decaf?
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
        }}
      >
        {features.map((item, index) => (
          <div className={`feature${index}`}
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "30px",
              border: "1px solid #e5e5e5",
              borderRadius: "20px",
              transition: "transform 0.3s ease"
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                marginBottom: "20px",
              }}
            />

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              {item.title}
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      </div>
  );
}