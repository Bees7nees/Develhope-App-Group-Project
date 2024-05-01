import styles from "../Styles/BookingMenu.module.scss";
import CalendarComponent from "./CalendarBooking";
import { useState, useEffect, useContext, useRef } from "react";
import CounterHost from "./CounterHost";
import { GlobalContext } from "./GlobalVariable";
import BellHotel from "../Assets/Sounds/bell-hotel.mp3";
import useSound from "use-sound";
import { BsCalendarWeek } from "react-icons/bs";
import { BsArrowLeftRight } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { BsPersonAdd } from "react-icons/bs";
import { PiCallBellLight } from "react-icons/pi";
import { RiCoupon3Line } from "react-icons/ri";



export default function BookingMenu() {
  const [playSound] = useSound(BellHotel);
  const [firstDate, setFirstDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());
  const [nights, setNights] = useState(0);
  const [seeCounter, setSeeCounter] = useState(false);
  function updateNights() {
    const diferenciaEnMS = Math.abs(lastDate - firstDate);
    const unDiaEnMS = 1000 * 60 * 60 * 24;
    const diferenciaEnDias = Math.floor(diferenciaEnMS / unDiaEnMS);
    setNights(diferenciaEnDias);
  }
  useEffect(() => {
    updateNights();
  }, [firstDate, lastDate]);

  const handleCounter = () => {
    setSeeCounter(true); // Cambia el estado a su valor opuesto
  };
  const { textCoupon, setTextCoupon } = useContext(GlobalContext);
  const { numNight, setNumNight } = useContext(GlobalContext);
  const { numKids, setNumKids } = useContext(GlobalContext);
  const { numAdult, setNumAdult } = useContext(GlobalContext);
  const handleCoupon = (event) => {
    setTextCoupon(event.target.value);
  };
  setNumNight(nights);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setSeeCounter(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={styles.bookingMenuDiv}>
      <div className={styles.bookingArrive}>
        <BsCalendarWeek className={styles.iconCalendar} />
        <div className={styles.textDivBookingMenu}>
          <p className={styles.subtitle}>LLEGADA</p>
          <CalendarComponent setDate={setFirstDate} nextDate={lastDate} />
        </div>
      </div>
      <div className={styles.arrowBooking}>
        <BsArrowLeftRight className={styles.iconArrow} />
      </div>
      <div className={styles.bookingLeft}>
        <BsCalendarWeek className={styles.iconCalendar} />
        <div className={styles.textDivBookingMenu}>
          <p className={styles.subtitle}>SALIDA</p>
          <CalendarComponent setDate={setLastDate} prevDate={firstDate} />
        </div>
      </div>
      <div className={styles.divideLine}></div>
      <div className={styles.bookingNight}>
        <div className={styles.iconSleepDiv}>
          <BsMoonStars className={styles.iconMoon} />
        </div>
        <div>
          <div className={styles.textDivBookingMenu}>
            <p className={styles.subtitle}>NOCHES</p>
            <p className={styles.normalTextBooking}>{nights} NOCHE</p>
          </div>
        </div>
      </div>
      <div className={styles.divideLine}></div>
      <div className={styles.hosts} onClick={handleCounter} ref={menuRef}>
        <div className={styles.iconUserpDiv}>
          <BsPersonAdd className={styles.iconPerson} />
        </div>
        <div className={styles.textDivBookingMenu}>
          <p className={styles.subtitle}>HUÉSPEDES</p>
          <p className={styles.normalTextBooking}>
            {" "}
            {numAdult} ADULTOS + {numKids} NIÑOS
          </p>
          {seeCounter && <CounterHost />}
          {
            //Puedo hacer un menu oculto que este en oculto, el padre tenga un position relative y el menu un position relative
            //o un estado y un renderizado condicional (un estado que este en false y cuando le clicas este en true y cuando le clicas salga el componente (age>18 && age es el renderizado condicional))
            //en cupon hacer una alarma que nuestre que se ha aplicado correctamente y si no es undifined se haga un descuento base
            //Librery usesound https://www.educative.io/answers/how-to-play-sound-in-react importar el sonido mp3 con el sonido.
          }
        </div>
      </div>
      <div className={styles.divideLine}></div>
      <div className={styles.coupon}>
        <div className={styles.iconDiscountpDiv}>
          <RiCoupon3Line className={styles.iconCoupon} />
        </div>
        <div className={styles.textDivBookingMenu}>
          <p className={styles.subtitle}>CUPÓN</p>
          <input
            type="text"
            className={styles.inputCoupon}
            value={textCoupon}
            onChange={handleCoupon}
          />
        </div>
      </div>
      <div className={styles.checkButton} onClick={playSound}>
        <PiCallBellLight className={styles.iconBell} />
      </div>
    </div>
  );
}
