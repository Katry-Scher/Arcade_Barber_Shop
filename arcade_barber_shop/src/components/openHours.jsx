import { MapPinAreaIcon, PhoneCallIcon, ClockIcon } from "@phosphor-icons/react";
import "../styles/openHours.css"

function OpenHours () {
    return (
        <section className="informations">
            <div className="infor_details">
                <div className="address">
                    <span><MapPinAreaIcon size={32} /></span>
                    <h1>Address</h1>
                    <p>362 Hight Street<br/>London, NW2 1PF</p>
                </div>

                <div className="Phone">
                    <span><PhoneCallIcon size={32} /></span>
                    <h1>Phone</h1>
                    <p>075145958</p>
                </div>

                <div className="Hours">
                    <span><ClockIcon size={32} /></span>
                    <h1>Hours</h1>
                    <p>Mon - Sat <br />9AM - 10PM</p>
                    
                </div>
            </div>

        </section> 
    )
}

export default OpenHours;