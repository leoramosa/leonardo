import React from 'react';
import useForm from './../components/forms/useForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import FormHome from './../components/forms/Form'
import { Link } from 'react-scroll'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import './styles/Home.css';
import Container from '@material-ui/core/Container';
import web from '../images/web.jpg'
import gestion from '../images/gestion.jpg'
import desarrollo from '../images/desarrollo.jpg'
import ecommerce from '../images/ecommerce.jpg'
import analitica from '../images/analitica.jpg'
import mobile from '../images/mobile.jpg'
import hero from '../images/hero.svg'
import pencil from '../images/pencil.svg'
import code from '../images/code.svg'
import base from '../images/base.svg'
import web1 from '../images/project1.jpg'
import web2 from '../images/project2.jpg'
import web3 from '../images/project3.jpg'
import web4 from '../images/project4.jpg'
import web5 from '../images/project5.jpg'
import web6 from '../images/project6.jpg'

import { useTranslation } from 'react-i18next';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);


function Home() {
  const { handleChange } = useForm(
  );

const { t } = useTranslation();


  return (
    
    <React.Fragment>
      
      <Container className="HomeLayout">
        <React.Fragment>
          <div className="hero">
            <div className="content_information">
              <div className="title_img">
                <h1>{t('home.front-end')} {t('home.designer')}</h1>
                <p> {t('info.designer')}</p>
                
              </div>
              <div className="img_info">
                <img src={hero} alt=""/>
              </div>
            </div>
          </div>

          <div className="contact-project">
            <div className="start-project">
              Iniciar Un proyecto
            </div>
            <div className="start-project_info">
              <p>Interesado en trabajar juntos? Deberíamos hacer cola para charlar. Compraré el café.</p>
            </div>
            <div className="start-project_btn">
              <div className="start-project_btn_content">
                <Link
                to='price'
                smooth={true}
                duration={1000}
                className="link-scroll"
                >
                comenzar
                </Link>
              </div>
            </div>
          </div>
          <Swiper
            spaceBetween={50}
            loop={true}
            slidesPerView={3}
            autoplay={{ delay: 2500, disableOnInteraction: true }}
            navigation
            breakpoints={{
              1228: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
              <SwiperSlide >
                  <div className="svg-icon">
                    <div className="img">
                      <img className="svg-img" src={web} alt=""/>
                    </div>
                    <p className="info__title">
                    Auditorías de sitios web
                    </p>
                    <p className="info-icons">
                      ¿Busca mejorar el rendimiento de su página, el SEO o la experiencia del usuario? Solicite una auditoría gratuita del sitio.
                    </p>
                  </div>
              </SwiperSlide>
              <SwiperSlide >
                  <div className="svg-icon">
                    <div className="img">
                      <img className="svg-img" src={gestion} alt=""/>
                    </div>
                    <p className="info__title">
                    Gestión de contenido
                    </p>
                    <p className="info-icons">
                    Desarrollo personalizado de plugins y temas de WordPress. Actualice fácilmente el contenido sin saber cómo codificar.
                    </p>
                  </div>
              </SwiperSlide>
              <SwiperSlide >
                  <div className="svg-icon">
                    <div className="img">
                      <img className="svg-img" src={desarrollo} alt=""/>
                    </div>
                    <p className="info__title">
                    Diseño + Desarrollo
                    </p>
                    <p className="info-icons">
                    Integración de plataformas de comercio electrónico, pasarelas de pago, plantillas de productos personalizadas y más.
                    </p>
                  </div>
              </SwiperSlide>
              <SwiperSlide >
                  <div className="svg-icon">
                    <div className="img">
                      <img className="svg-img" src={ecommerce} alt=""/>
                    </div>
                    <p className="info__title">
                    Ecommerce
                    </p>
                    <p className="info-icons">
                    Integración de plataformas de comercio electrónico, pasarelas de pago, plantillas de productos personalizadas y más.
                    </p>
                  </div>
              </SwiperSlide>
              <SwiperSlide >
                  <div className="svg-icon">
                    <div className="img">
                      <img className="svg-img" src={analitica} alt=""/>
                    </div>
                    <p className="info__title">
                    Analítica
                    </p>
                    <p className="info-icons">
                    Obtenga información sobre quién está navegando en su sitio para que pueda tomar decisiones comerciales más inteligentes.
                    </p>
                  </div>
              </SwiperSlide>
              <SwiperSlide >
                  <div className="svg-icon">
                    <div className="img">
                      <img className="svg-img" src={mobile} alt=""/>
                    </div>
                    <p className="info__title">
                    Mobile-friendly
                    </p>
                    <p className="info-icons">
                    Un responsive design hace que su sitio web sea accesible para todos los usuarios, independientemente de su dispositivo.

                    </p>
                  </div>
              </SwiperSlide>
          </Swiper>
        </React.Fragment>
      </Container>
      <section className="section about" id="about" >
        <div className="content about__content">
          <div className="about_info">
          <h1 className="about__title">Hola, soy Leonardo, encantado de conocerte.</h1>
          <p>Soy Desarrollador Front-end y diseñador independiente hace casi 2 años, he trabajado a distancia para agencias y he colaborado con personas talentosas para crear productos digitales para uso comercial y de consumo. Tengo una confianza tranquila, una curiosidad natural y un trabajo constante para mejorar mis habilidades.</p>
          </div>
        </div>
      </section>
      <section className="section skills has-text-centered">
      
        <div className="container is-narrow">
          
          <div className="box">
            <div className="content is-centered">
              <div className="columns">
              <div className="column">
                <figure className="image">
                  <img src={pencil} alt=""/>
                </figure>
                <h1 className="tilte-skills">Diseñador</h1>
                <p>Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones reflexivas.</p>
                <p className="list-title">Cosas que disfruto diseñando:</p>
                <p>UX, UI, Web, Mobile, Apps, Logos</p>
                <p className="list-title">Herramientas de diseño:</p>
                <ul>
                  <li>Balsamiq Mockups</li>
                  <li>Figma</li>
                  <li>Invision</li>
                  <li>Marvel</li>
                  <li>Pen &amp; Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                  <li>Zeplin</li>
                </ul>
              </div>
              <div className="column">
                <figure className="image">
                  <img src={code} alt=""/>
                </figure>
                <h1 className="tilte-skills">Desarrollador front-end</h1>
                <p>Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador.</p>
                <p className="list-title">Lenguajes de programacion:</p>
                <p>HTML, Pug, CSS, Sass, Javascript, ReactJs, Angular, Svelte</p>
                <p className="list-title">Herramientas de desarrollo:</p>
                <ul>
                  <li>Atom</li>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>Material-ui</li>
                  <li>Materialize</li>
                  <li>Github</li>
                  <li>Terminal</li>
                </ul>
              </div>
              <div className="column">
                <figure className="image">
                  <img src={base} alt=""/>
                </figure>
                <h1 className="tilte-skills">Programador Back-end Jr.</h1>
                <p>Desarrollo aplicaciones web funcionales utilizando Python y Django, creo ApiRestFull con Djnago Rest Frameword o Express</p>
                <p className="list-title">Lenguajes de programacion:</p>
                <p>Python, Flash, Django, Next, Express, MongoDB, MySql</p>
                <p className="list-title">Herramientas de desarrollo:</p>
                <ul>
                  <li>Visual Studio Code</li>
                  <li>PyCharn</li>
                  <li>SqlLite 3</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project section" id="portafolio">
        <div className="content-project">
        <div className="skills-title">
            <h1>Mis trabajos recientes</h1>
          </div>
          <div className="project_init">
            <div className="column column-project">
              <div className="box-project">
                <div className="project_title">
                  <p>Petshop
                  </p>
                  <span>(Ecommerce)</span>
                </div>
                <div className="project_img">
                  <img src={web1} alt=""/>
                </div>
                <div className="project_button">
                  <a href="https://petshop-peru.netlify.app/" target="blank">
                  <div className="btn-home">
                    Ver Website
                    </div>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="column column-project">
              <div className="box-project">
                <div className="project_title">
                  <p>Ministerio Cultura
                  </p>
                  <span>(Website)</span>
                </div>
                <div className="project_img">
                  <img src={web2} alt=""/>
                </div>
                <div className="project_button">
                  <a href="https://tlk-cultura.netlify.app/" target="blank">
                  <div className="btn-home">
                    Ver Website
                    </div>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="column column-project">
              <div className="box-project">
                <div className="project_title">
                  <p>Fedepedi
                  </p>
                  <span>(ONG)</span>
                </div>
                <div className="project_img">
                  <img src={web3} alt=""/>
                </div>
                <div className="project_button">
                  <a href="https://fedepedi.netlify.app/" target="blank">
                  <div className="btn-home">
                    Ver Website
                    </div>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="column column-project">
              <div className="box-project">
                <div className="project_title">
                  <p>Pugstagram
                  </p>
                  <span>(Clon App)</span>
                </div>
                <div className="project_img">
                  <img src={web4} alt=""/>
                </div>
                <div className="project_button">
                  <a href="https://pugstagram-sapper.netlify.app/" target="blank">
                  <div className="btn-home">
                    Ver Website
                    </div>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="column column-project">
              <div className="box-project">
                <div className="project_title">
                  <p>CONF
                  </p>
                  <span>(Website)</span>
                </div>
                <div className="project_img">
                  <img src={web5} alt=""/>
                </div>
                <div className="project_button">
                  <a href="https://trusting-jones-33489a.netlify.app/" target="blank">
                  <div className="btn-home">
                    Ver Website
                    </div>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="column column-project">
              <div className="box-project">
                <div className="project_title">
                  <p>El Regreso
                  </p>
                  <span>(Landin page)</span>
                </div>
                <div className="project_img">
                  <img src={web6} alt=""/>
                </div>
                <div className="project_button">
                  <a href="https://el-regreso.netlify.app/" target="blank">
                  <div className="btn-home">
                    Ver Website
                    </div>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="price section" id="price">
        <div className="content-project">
        <div className="price-title">
            <h1>Precios por proyecto</h1>
          </div>
          <div className="project_init">
            <div className="column column-price">
              <div className="box-price">
                <div className="price_title">
                  <p>BÁSICO
                  </p>
                </div>
                <div className="project_img">
                  <ul className="list-titl">
                    <li>Auditoría del sitio web</li>
                    <li>Diseño</li>
                    <li>Desarrollo</li>
                  </ul>
                </div>
                <div className="project_button">
                  <Link to='contact'
              smooth={true}
              duration={1000}
              className="link-scroll"
              name="package" 
              value="basico" 
              onChange={handleChange}>
                
                  <div className="btn-home">
                  Solicitud de cotización
                    </div>
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="column column-price">
              <div className="box-price">
                <div className="price_title two">
                  <p>STANDARD </p>
                </div>
                <div className="project_img">
                  <ul className="list-titl">
                    <li>Auditoría del sitio web</li>
                    <li>Diseño</li>
                    <li>Desarrollo</li>
                    <li>Copias de seguridad</li>
                    <li>Analítica</li>
                    <li>Chat en vivo</li>
                    <li>Optimización de motores de búsqueda</li>
                    <li>Gestion de contenido</li>
                  </ul>
                </div>
                <div className="project_button">
                <Link to='contact'
              smooth={true}
              duration={1000}
              className="link-scroll">
                  <div className="btn-home">
                  Solicitud de cotización
                    </div>
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="column column-price">
              <div className="box-price">
                <div className="price_title three">
                  <p>PREMIUM
                  </p>
                </div>
                <div className="project_img">
                  <ul className="list-titl">
                  <li>Auditoría del sitio web</li>
                    <li>Diseño</li>
                    <li>Desarrollo</li>
                    <li>Copias de seguridad</li>
                    <li>Analítica</li>
                    <li>Chat en vivo</li>
                    <li>Optimización de motores de búsqueda</li>
                    <li>Gestion de contenido</li>
                    <li>mantenimiento</li>
                    <li>Ecommerce</li>
                    <li>configuración de correo electrónico</li>
                    <li>Hosting</li>
                  </ul>
                </div>
                <div className="project_button">
                <Link to='contact'
              smooth={true}
              duration={1000}
              className="link-scroll">
                  <div className="btn-home">
                  Solicitud de cotización
                    </div>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="content-contact">
        <div className="skills-title">
            <h1>Contáctame</h1>
          </div>
        <div className="form">
        <FormHome/>
        </div>
        </div>
      </section>
     
      </React.Fragment>
  );
}

export default Home;