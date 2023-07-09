export default function Aboutpage() {
  return (
    <div className="about">
      <div className="aboutus">
        <div className="shortinfo">
          <p>
            Set in Tbilisi City, within 600 m from shopping centre City Mall, 6
            km of Tbilisi Zoo and 8 km of Rustaveli Theatre, Boutique Hotel MOJO
            offers accommodation with a terrace and free WiFi throughout the
            property as well as free private parking for guests who drive. The
            property is around 9 km from Tbilisi Opera and Ballet Theatre, 9 km
            from Freedom Square and 5 km from Tbilisi Sports Palace. The
            accommodation provides a 24-hour front desk, a concierge service and
            luggage storage for guests.
          </p>
        </div>
        <div className="details">
          <div className="contact">
            <p style={{ fontSize: "3em" }}>Contact Us</p>
            <address style={{ fontSize: "2em", color: "grey" }}>
              Phone: +995322440405{" "}
            </address>
            <address style={{ fontSize: "1.5em", color: "blue" }}>
              Email: hotelmojo@gmail.com{" "}
            </address>
            <address style={{ fontSize: "1.5em", color: "red" }}>
              Location: Petre Kavtaradze 1 turn #7, Tbilisi, Georgia{" "}
            </address>
          </div>
          <div className="map">
            <p>Location</p>
            <iframe
            title="title"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.009563660152!2d44.73104377532791!3d41.72031247527968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473452bec7521%3A0xc151a72c55ce9b6f!2sMojo%20Boutique%20Hotel%20Tbilisi!5e0!3m2!1sen!2sde!4v1684429086483!5m2!1sen!2sde"
              width="99%"
              height="90%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
