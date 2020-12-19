import React from "react"
import "./App.css"

import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import foto1 from "./images/foto1.jpg"
import foto2 from "./images/foto2.jpg"
import foto3 from "./images/foto3.jpg"
import foto4 from "./images/foto4.jpg"
import foto5 from "./images/foto5.jpg"
import foto6 from "./images/foto6.jpg"
import guarnicion from "./images/guarnicion.jpeg"
import complementos1 from "./images/complementos1.jpeg"
import complementos2 from "./images/complementos2.jpeg"
import logo from "./images/justlogo.png"

const Cortes = () => (
  <>
    <h2 id="Cortes">Cortes</h2>
    <div className="note">Precios por kilogramo</div>

    <section className="simple-table-name-price">
      <div>Arrachera</div>
      <div className="price">$450</div>
      <div>
        Diezmillo <span className="details">(Chuck roll)</span>
      </div>
      <div className="price">$350</div>
      <div>Rib-eye</div>
      <div className="price">$590</div>
      <div>Rib-steak</div>
      <div className="price">$490</div>
      <div>Cabreria</div>
      <div className="price">$590</div>
      <div>New York</div>
      <div className="price">$490</div>
      <div>Top sirloin</div>
      <div className="price">$380</div>
      <div>T-bone</div>
      <div className="price">$590</div>
      <div>Tomahawk</div>
      <div className="price">$650</div>
      <div>Cowboy</div>
      <div className="price">$650</div>
      <div>Vacio</div>
      <div className="price">$690</div>
      <div>Costilla Sahuaro</div>
      <div className="price">$250</div>
      <div>Porter house</div>
      <div className="price">$590</div>
      <div>Picaña sahuaro</div>
      <div className="price">$490</div>
      <div>
        Chistorra <span className="details">(300 gramos)</span>
      </div>
      <div className="price">$70</div>
      <div>Carne para hamburguesa</div>
      <div className="price">$350</div>
      <div>
        Hamburguesa <span className="details">(200 gramos)</span>
      </div>
      <div className="price">$100</div>
      <div>
        Hamburguesa con papa <span className="details">(200 gramos)</span>
      </div>
      <div className="price">$130</div>
      <div>
        Tuetano <span className="details">(3 piezas)</span>
      </div>
      <div className="price">$100</div>
      <div>
        Chorizo sahuaro <span className="details">(1 pieza)</span>
      </div>
      <div className="price">$30</div>
      <div>
        Carne machaca <span className="details">(100 gramos)</span>
      </div>
      <div className="price">$100</div>
    </section>

    <Carousel
      plugins={[
        "centered",
        "infinite",
        "arrows",
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 6,
          },
        },
      ]}
    >
      <img alt="carne" src={foto1} />
      <img alt="carne" src={foto2} />
      <img alt="carne" src={foto3} />
      <img alt="carne" src={foto4} />
      <img alt="carne" src={foto5} />
      <img alt="carne" src={foto6} />
    </Carousel>
  </>
)

const Guarniciones = () => (
  <>
    <h2 id="Guarniciones">Guarniciones</h2>

    <section className="simple-table-name-price">
      <div>
        <div>Guarnición por persona para comer en Sahuaro Beef</div>
        <div className="details">
          Cebollitas cambray, nopales, salsa, frijol sahuaro y tortillas de maíz
        </div>
      </div>
      <div className="price">$40</div>

      <div>
        <div>Guarnición familiar para llevar</div>
        <div className="details">
          Orden de cebollitas, orde de nopales, vaso de salsa, medio litro de frijol sahuaro, vaso
          de guacamole y tortillas de maíz
        </div>
      </div>
      <div className="price">$100</div>
    </section>
    <img alt="guarnicion" src={guarnicion} />
  </>
)

const Complementos = () => (
  <>
    <h2 id="Complementos">Complementos</h2>

    <section className="simple-table-name-price">
      <div>
        Tortillas de harina <span className="details">(10 piezas)</span>
      </div>
      <div className="price">$35</div>
      <div>
        Papa sahuaro <span className="details">(Crema, queso y tocino)</span>
      </div>
      <div className="price">$50</div>
      <div>
        Ensalada Sahuaro <span className="details">(lechuga, pepeino, aguacate, jitomate)</span>
      </div>
      <div className="price">$60</div>
      <div>
        Orden de nopales <span className="details">(3 piezas)</span>
      </div>
      <div className="price">$20</div>
      <div>
        Orden de cebollitas <span className="details">(6 piezas)</span>
      </div>
      <div className="price">$20</div>
      <div>
        Salsa sahuaro <span className="details">(medio litro)</span>
      </div>
      <div className="price">$55</div>
      <div>
        Salsa sahuaro <span className="details">(vaso)</span>
      </div>
      <div className="price">$25</div>
      <div>
        Guacamole <span className="details">(vaso) (aguacate, tomate y chile)</span>{" "}
      </div>
      <div className="price">$30</div>
      <div>
        Guacamole <span className="details">(medio litro) (aguacate, tomate y chile) </span>
      </div>
      <div className="price">$60</div>
      <div>
        Frijol sahuaro <span className="details">(medio litro)</span>
      </div>
      <div className="price">$35</div>
      <div>
        Frijol sahuaro <span className="details">(litro)</span>
      </div>
      <div className="price">$60</div>
      <div>
        Quesadilla de maiz <span className="details">(3 piezas)</span>
      </div>
      <div className="price">$20</div>
      <div>
        Quesadilla de harina <span className="details">(1 pieza)</span>
      </div>
      <div className="price">$15</div>
      <div>
        Queso fundido <span className="details">(200 gramos)</span>
      </div>
      <div className="price">$50</div>
      <div>Chistorra con queso</div>
      <div className="price">$130</div>
      <div>Chorizo sahuaro con queso</div>
      <div className="price">$100</div>
      <div>Chimichurri</div>
      <div className="price">$70</div>
      <div>Salsa de semillas</div>
      <div className="price">$100</div>
      <div>
        Carbon <span className="details">(1kg)</span>
      </div>
      <div className="price">$30</div>
      <div>
        Carbon <span className="details">(3kgs)</span>
      </div>
      <div className="price">$75</div>
    </section>

    <Carousel
      plugins={[
        "centered",
        "infinite",
        "arrows",
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 2,
          },
        },
      ]}
    >
      <img alt="carne" src={complementos1} />
      <img alt="carne" src={complementos2} />
    </Carousel>
  </>
)

const Bebidas = () => (
  <>
    <h2 id="Bebidas">Bebidas</h2>

    <h3>Refrescos</h3>

    <section className="simple-table-name-price">
      <div>
        Agua natural <span className="details">(600ml)</span>
      </div>
      <div className="price">$20</div>
      <div>
        Coca cola <span className="details">(600ml)</span>
      </div>
      <div className="price">$25</div>
      <div>
        Pepsi <span className="details">(600ml)</span>
      </div>
      <div className="price">$25</div>
      <div>
        Boing de frutas <span className="details">(350ml)</span>
      </div>
      <div className="price"> $20</div>
      <div>
        Aguas frescas{" "}
        <span className="details">(500ml): cebada, horchata, jamaica, y fresa con chía</span>
      </div>
      <div className="price">$25</div>
    </section>

    <h3>Cervezas (355ml)</h3>

    <section className="simple-table-name-price">
      <div>Corona</div>
      <div className="price">$35</div>
      <div>XX</div>
      <div className="price">$35</div>
      <div>Pacífico</div>
      <div className="price">$40</div>
      <div>Indio</div>
      <div className="price">$35</div>
      <div>Victoria</div>
      <div className="price">$35</div>
      <div>Modelo</div>
      <div className="price">$40</div>
    </section>

    <h3>Vinos de mesa</h3>
    <section className="simple-table-name-price">
      <div>
        Cabernet Sauvignon <span className="details">(187ml)</span>
      </div>
      <div className="price">$100</div>
      <div>
        Cabernet Sauvignon <span className="details">(375ml)</span>
      </div>
      <div className="price">$150</div>
      <div>
        Cabernet Sauvignon <span className="details">(750ml)</span>
      </div>
      <div className="price">$250</div>
      <div>
        Merlot <span className="details">(750ml)</span>
      </div>
      <div className="price">$250</div>

      <div>
        Clericot <span className="details">(copa)</span>
      </div>
      <div className="price">$100</div>
      <div>
        Clericot <span className="details">(Jarra de litro)</span>
      </div>
      <div className="price">$350</div>
    </section>
  </>
)

const Postres = () => (
  <>
    <h2 id="Postres">Postres</h2>
    <section className="simple-table-name-price">
      <div>Coyota Individual</div>
      <div className="price">$30</div>
      <div>Coyota con helado</div>
      <div className="price">$50</div>
      <div>Cheese Cake</div>
      <div className="price">$50</div>
      <div>Cheese Cake con helado</div>
      <div className="price">$75</div>
      <div>Brownies</div>
      <div className="price">$50</div>
      <div>Brownies con helado</div>
      <div className="price">$75</div>
      <div>Helado</div>
      <div className="price">$50</div>
      <div>Alfajore</div>
      <div className="price">$30</div>
      <div>Alfajore con helado</div>
      <div className="price">$50</div>
    </section>
  </>
)

const Paquetes = () => (
  <>
    <h2 id="Paquetes">Paquetes</h2>

    <section className="simple-table-name-price">
      <div>
        <div>Paquete de arrachera</div>
        <div className="details">
          Incluye: 1 kg de arrachera, Guarnición familiar, 1 papa sahuaro, chorizo sahuaro o
          chistorra
        </div>
      </div>

      <div className="price">$600</div>
      <div>
        <div>Paquete de diezmillo</div>
        <div className="details">
          Incluye: 1 kg de diezmillo, Guarnición familiar, 1 papa sahuaro, chorizo sahuaro o
          chistorra
        </div>
      </div>

      <div className="price">$500</div>
      <div>
        <div>Paquete de New York</div>
        <div className="details">
          Incluye: 1 kg de New York, Guarnición familiar, 1 papa sahuaro, chorizo sahuaro o
          chistorra
        </div>
      </div>

      <div className="price">$640</div>
      <div>
        <div>Paquete de Rib-eye</div>
        <div className="details">
          Incluye: 1 kg de Rib-eye, Guarnición familiar, 1 papa sahuaro, chorizo sahuaro o chistorra
        </div>
      </div>

      <div className="price">$740</div>
      <div>
        <div>Paquete de sirloin</div>
        <div className="details">
          Incluye: 1 kg de top sirloin, Guarnición familiar, 1 papa sahuaro, chorizo sahuaro o
          chistorra
        </div>
      </div>

      <div className="price">$550</div>

      <div>
        <div>Paquete de Cabreria</div>
        <div className="details">
          Incluye: 1 kg de cabreria, Guarnición familiar, 1 papa sahuaro, chorizo sahuaro o
          chistorra
        </div>
      </div>

      <div className="price">$780</div>

      <div>
        <div>Paquete de cowboy</div>
        <div className="details">
          Incluye: 1 pieza de cowboy, Guarnición familiar, 1 papa sahuaro, chorizo sahuaro o
          chistorra
        </div>
      </div>

      <div className="price">$850</div>

      <div>
        <div>Paquete de Vacio</div>
        <div className="details">
          Incluye: 1 kg de vacio, Guarnición familiar, 1 papa sahuaro, chorizo sahuaro o chistorra
        </div>
      </div>

      <div className="price">$880</div>

      <div>
        <div>Paquete de costilla sahuaro</div>
        <div className="details">
          Incluye: 1 kg de costilla sahuaro, Guarnición familiar, 1 papa sahuaro, chorizo sahuaro o
          chistorra
        </div>
      </div>

      <div className="price">$500</div>
    </section>
  </>
)

const navigateTo = (element: HTMLElement | null) => {
  if (!element) return

  const currentPosition = element.style.position
  const currentTop = element.style.top

  element.style.position = "relative"
  element.style.top = "-2rem"

  element.scrollIntoView({ behavior: "smooth", block: "start" })

  element.style.top = currentTop
  element.style.position = currentPosition
}

const Menus = () => (
  <section className="menus">
    <button onClick={() => navigateTo(document.getElementById("Cortes"))}>Cortes</button>
    <button onClick={() => navigateTo(document.getElementById("Guarniciones"))}>
      Guarniciones
    </button>
    <button onClick={() => navigateTo(document.getElementById("Complementos"))}>
      Complementos
    </button>
    <button onClick={() => navigateTo(document.getElementById("Bebidas"))}>Bebidas</button>
    <button onClick={() => navigateTo(document.getElementById("Postres"))}>Postres</button>
    <button onClick={() => navigateTo(document.getElementById("Paquetes"))}>Paquetes</button>
  </section>
)

const App = () => {
  return (
    <>
      <header>
        <img alt="logo" className="logo" src={logo} />
      </header>
      <main>
        <Menus />
        <Cortes />
        <Guarniciones />
        <Complementos />
        <Bebidas />
        <Postres />
        <Paquetes />
      </main>
      <footer></footer>
    </>
  )
}

export default App
