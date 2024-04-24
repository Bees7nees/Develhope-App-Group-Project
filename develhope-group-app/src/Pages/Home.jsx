import Banner from "../Components/Banner";
import DividingLines from "../Components/DividingLines";
import TitleDescription from "../Components/TitleDescription";
import ReviewCardCarousel from "../Components/ReviewCardCarousel";
import classes from "../Styles/Home.module.scss";

export function Home() {
  return (
    <section className={classes["home-container"]}>
      <div className={classes["home-title"]}>
        <h1>Villa del Sol</h1>
        <h2>En un lugar maravilloso</h2>
        <p>Hotel playa estupendo, divino y celestial</p>
        <a href="https://maps.app.goo.gl/5EUBziEqDPUunTNb9">UBICACIÓN</a>
      </div>
      <Banner fotomain={"Assets/Img/fotomain.png"} />
      <TitleDescription
        title={"Hospédese en uno de los mejores hoteles del mundo"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Facilisi nunc pellentesque ultricies morbi pellentesque facilisis nunc aliquam. Urna neque diam vitae odio purus auctor. Amet vel gravida nec volutpat interdum suspendisse vitae mauris. Ullamcorper sit neque quis ipsum nullam rutrum. Sed amet sit auctor mauris libero nulla arcu interdum. Donec tempus sit mauris ut placerat curabitur ac eu vitae. Mollis nibh sit eu nisi viverra dolor. Pharetra consequat lobortis eu justo massa nisi blandit nunc est. Consequat tempor libero sollicitudin lacus morbi nisi."
        }
      />
      <div className={classes["divisor"]}>
        <DividingLines color={"#213242"} length={"1rem"} />
        <DividingLines color={"#B08912"} length={"1rem"} />
      </div>
      {/* Aquí iría la imagen de una de las habitaciones con
            descripción y el botón para acceder a la galería, cambiando el url */}
      <div className={classes["divisor"]}>
        <DividingLines color={"#213242"} length={"1rem"} />
        <DividingLines color={"#B08912"} length={"1rem"} />
      </div>
      {/* Aquí va parecido a lo anterior pero para la página de cocina */}
      <div className={classes["divisor"]}>
        <DividingLines color={"#213242"} length={"1rem"} />
        <DividingLines color={"#B08912"} length={"1rem"} />
      </div>
      <section className={classes["opiniones-clientes"]}>
        <div className={classes["opiniones-wrapper"]}>
          <div className={classes["opiniones-content"]}>
            <h1>NUESTROS CLIENTES OPINAN</h1>
            <ReviewCardCarousel />
          </div>
        </div>
      </section>
      <div className={classes["divisor"]}>
        <DividingLines color={"#213242"} length={"1rem"} />
        <DividingLines color={"#B08912"} length={"1rem"} />
      </div>
    </section>
  );
}
