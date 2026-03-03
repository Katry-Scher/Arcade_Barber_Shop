import "../styles/services.css"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect } from "react"

function Services() {
  //  Hook 
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  })

 
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      emblaApi.slideNodes().forEach((slide, index) => {
        slide.classList.toggle(
          "is-selected",
          index === emblaApi.selectedScrollSnap()
        )
      })
    }

    emblaApi.on("select", onSelect)
    onSelect()

    // cleanup 
    return () => emblaApi.off("select", onSelect)
  }, [emblaApi])


  return (
    <>
      <section className="services_container">
        <div className="txt">
          <h1>Services We Provide</h1>
          <p>
            We offer premium grooming services in a retro barbershop experience.
            From classic cuts to detailed beard care, enjoy professional service
            while relaxing, gaming, and feeling at home.
          </p>
        </div>
      </section>

      <section>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">

            <div className="embla__slide">
                <div>
                    <img src="../public/classic_haircurt.jpg" alt="" />
                </div>
                <div>
                    <h3>Classic Haircut</h3>
                    <p>Timeless cuts & modern style</p>
                </div>
            </div>

            <div className="embla__slide">
                <div>
                    <img src="../public/Beard.jpg" alt="" />
                </div>
                <div>
                    <h3>Beard Trim</h3>
                    <p>Sharp lines & clean finish</p>
                </div>
            </div>
            
            <div className="embla__slide">
                <div>
                    <img src="../public/navalha.jpg" alt="" />
                </div>
                <div>
                    <h3>Hot Towel Shave</h3>
                    <p>Classic comfort & premium care</p>
                </div>
            </div>

            <div className="embla__slide">
                <div>
                    <img src="../public/combo.jpg" alt="" />
                </div>
                <div>
                    <h3>Combo Service</h3>
                    <p>Hair + beard one session</p>
                </div>
            </div>

            <div className="embla__slide">
                <div>
                    <img src="../public/game.jpg" alt="" />
                </div>
                <div>
                    <h3>Gamer Lounge</h3>
                    <p>Play while you wait</p>
                </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Services