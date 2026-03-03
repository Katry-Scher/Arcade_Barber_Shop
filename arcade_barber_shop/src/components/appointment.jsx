import "../styles/appointment.css"
import { useMemo, useState } from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"

const BARBERS = [
  { id: "any", name: "Any barber" },
  { id: "alex", name: "Alex" },
  { id: "mike", name: "Mike" },
  { id: "john", name: "John" },
]

function Appointment() {
  const [selectedDate, setSelectedDate] = useState(undefined)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedBarber, setSelectedBarber] = useState(null)

  // Modal + Form (iniciante)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  // Toast simples
  const [toast, setToast] = useState({ show: false, message: "", type: "success" })

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const timeSlots = useMemo(() => {
    if (!selectedDate) return []
    return ["10:00", "11:00", "13:00", "14:00", "16:00", "18:00", "19:00", "20:00"]
  }, [selectedDate])

  const canBook = Boolean(selectedDate && selectedTime && selectedBarber)

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type })
    window.setTimeout(() => {
      setToast({ show: false, message: "", type: "success" })
    }, 3500)
  }

  const handleBookNow = () => {
    if (!canBook) return
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim() || !phone.trim()) {
      showToast("Please fill in your name and phone.", "error")
      return
    }

    closeModal()
    showToast("Appointment booked successfully!", "success")

    // opcional: limpar form
    setName("")
    setPhone("")
  }

  return (
    <section className="appointment_container">
      <div className="appointment_txt">
        <h2>Book your appointment</h2>
        <p>Select a date, then choose a time and your barber.</p>
      </div>

      <div className="appointment_layout">
        <div className="appointment_calendar">
          <DayPicker
            mode="single"
            navLayout="around"
            ISOWeek
            selected={selectedDate}
            onSelect={(d) => {
              setSelectedDate(d)
              setSelectedTime(null)
              setSelectedBarber(null)
            }}
            disabled={[{ before: today }, { dayOfWeek: [0, 1] }]}
            animate
          />
        </div>

        <div className="appointment_panel">
          {/* Times */}
          {selectedDate && (
            <div className="step step--reveal step--delay-1">
              <h3>Available times</h3>
              <div className="times">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`pill ${selectedTime === t ? "pill--selected" : ""}`}
                    onClick={() => {
                      setSelectedTime(t)
                      setSelectedBarber(null)
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Barbers */}
          {selectedTime && (
            <div className="step step--reveal step--delay-2">
              <h3>Choose your barber</h3>
              <div className="barbers">
                {BARBERS.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className={`barber ${selectedBarber === b.name ? "barber--selected" : ""}`}
                    onClick={() => setSelectedBarber(b.name)}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Confirm + CTA */}
          {selectedBarber && (
            <div className="step step--reveal step--delay-3">
              <h3>Confirm</h3>
              <div className="summary">
                <div><span>Date:</span> {selectedDate?.toLocaleDateString()}</div>
                <div><span>Time:</span> {selectedTime}</div>
                <div><span>Barber:</span> {selectedBarber}</div>
              </div>

              <button className="bookNow" type="button" onClick={handleBookNow}>
                Book now
              </button>
            </div>
          )}
        </div>
      </div>

      {/* TOAST */}
      {toast.show && (
        <div className={`toast ${toast.type === "error" ? "toast--error" : "toast--success"}`}>
          {toast.message}
        </div>
      )}

      {/* MODAL */}
      {isModalOpen && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <h3>Complete your booking</h3>
              <button className="modalClose" onClick={closeModal} aria-label="Close">
                ✕
              </button>
            </div>

            <p className="modalSub">
              {selectedDate?.toLocaleDateString()} • {selectedTime} • {selectedBarber}
            </p>

            <form className="modalForm" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </label>

              <label>
                Phone
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="00000-0000"
                  limitLength={9}
                />
              </label>

              <button className="modalSubmit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Appointment