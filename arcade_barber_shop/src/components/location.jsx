import "../styles/location.css"

function Location() {
  return (
    <section id="location" className="location">
        <div className="location_txt">
            <h2>Our Location</h2>
            <p> We are located in the heart of the city, easily accessible by public transportation and with ample parking nearby.</p>
        </div>
        <div className="location_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4961.188313551108!2d-0.2907848872578421!3d51.55734050693578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487613d4bad82951%3A0x65cb22f51587b13!2s362%20High%20St%2C%20Wembley!5e0!3m2!1spt-BR!2suk!4v1780950206454!5m2!1spt-BR!2suk" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy">  referrerpolicy="no-referrer-when-downgrade"</iframe>        
        </div>

    </section> 
  )
}

export default Location
