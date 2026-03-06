import "../styles/testimonials.css";
import useEmblaCarousel from "embla-carousel-react"

function Testimonials() {

  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start"
  })


    return (
        <>
            <section className="testimonials_container">
                <h1>Why Choose Us</h1>                
            </section >
            
            <section className="testimonials_emojis"> 
                
                <div class="card">
                    <div class="emojis">
                        <button>Expert Barbers</button>
                        <button>💈</button>
                        <button>Unique Gamer Experience</button>
                        <button>🎮</button>
                        <button>Premium Atmosphere</button>
                        <button>🔥</button>
                        <button>Personalized Service</button>
                        <button>🧔</button>
                        <button>Trusted by Our Clients</button>
                    </div>

                    <div class="emojis">
                        <button> </button>
                        <button>&#128135; Expert Barbers</button>
                        <button>💈</button>
                        <button>Unique Gamer Experience</button>
                        <button>🎮</button>
                        <button>Premium Atmosphere</button>
                        <button>🔥</button>
                        <button>Personalized Service</button>
                        <button>🧔</button>
                        <button>Trusted by Our Clients</button>
                    </div>
                </div>
            </section>

            <section className="testimonials_reviews">

                <div className="testimonials_embla" ref={emblaRef}>
                    <div className="testimonials_embla__container">

                        <div className="testimonials_embla__slide">
                            <img src="/reviews_1.jpg" />
                            <h4>Michael T.</h4>
                            <p>"Great atmosphere and even better service. My fade and beard trim came out perfect. Definitely my new go-to barbershop."</p>
                        </div>

                        <div className="testimonials_embla__slide">
                            <img src="/reviews_2.jpg" />
                            <h4>Daniel K..</h4>
                            <p>"The barber understood exactly what I wanted. Clean cut, sharp beard line, and a super relaxed environment."</p>
                        </div>

                        <div className="testimonials_embla__slide">
                            <img src="/reviews_3.jpg" />
                            <h4>Ryan S.</h4>
                            <p>"Top-quality service from start to finish. The haircut was precise and the beard shaping made a huge difference."</p>
                        </div>

                        <div className="testimonials_embla__slide">
                            <img src="/reviews_4.jpg" />
                            <h4>Ryan S.</h4>
                            <p>"Amazing experience. The barber took his time and made sure everything was perfect. My hair and beard look incredible."</p>
                        </div>

                    </div>
                </div>

            </section>

            
        </>


         
    )
}


export default Testimonials