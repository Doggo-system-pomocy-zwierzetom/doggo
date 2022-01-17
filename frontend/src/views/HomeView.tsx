import React, { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
// Importing the Login & Register Component
import LoginView from './LoginView';
// import Register from './RegisterView';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

const StyledHomeView = styled.main``;

export default function HomeView() {
  // const { rootState, logoutUser } = useContext(MyContext);
  // const { isAuth, theUser, showLogin } = rootState;
  // const profile: any = localStorage.getItem('profile');
  // const [user, setUser] = useState(JSON.parse(profile));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    // setUser(null);
  };
  // useEffect(() => {
  //   const token = user?.token;
  //   if (token) {
  //     const decodedToken: any = decode(token);
  //     if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  //   }
  //   let profile: any = localStorage.getItem('profile');
  //   setUser(JSON.parse(profile));
  // }, [location]);
  // If user Logged in
  // console.log(user);

  return (
      <div style={{width:"100%"}}><header></header>

<section id="hero" className="d-flex align-items-center justify-content-center">
  <div className="container" data-aos="fade-up">

    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
      <div className="col-xl-6 col-lg-8">
        <h1>Strona dla zwierząt</h1>
        <h2>Tu może wyświetlać się logo</h2>
      </div>
    </div>
  </div>
</section>

<main id="main">

  <section id="about" className="about">
    <div className="container" data-aos="fade-up">

      <div className="row">
        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
          <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
          <h3>Założenia aplikacji</h3>
          <p className="fst-italic">
            Naszym głównym celem jest pomoc zwierzątom, tym bezdomnym jak i zaginionym.
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i> Stworzenie przyjaznej aplikacji.</li>
            <li><i className="ri-check-double-line"></i> Funkcjonalność pomagająca szybko odnaleźć swojego zaginionego pupila.</li>
            <li><i className="ri-check-double-line"></i> Współpraca i wsparcie schronisk.</li>
          </ul>
          <p>
            Wszystkie te założenia udaje się nam spełnić, szczegóły możesz obejrzeć niżej.
          </p>
        </div>
      </div>

    </div>
  </section> 
  <section id="features" className="features">
    <div className="container" data-aos="fade-up">

      <div className="row">
        <div className="image col-lg-6" style={{backgroundImage: 'URL("assets/img/features.jpg")'}} data-aos="fade-right"></div>
        <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
          <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
            <i className="bx bx-receipt"></i>
            <h4>Adopcje</h4>
            <p>Na naszej stronie możesz przeglądac adopcje wszystkich zwierząt znajdujących się w naszej bazie danych w twojej okolicy.</p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
            <i className="bx bx-cube-alt"></i>
            <h4>Prostota</h4>
            <p>Nasza aplikacja jest łatwa w użyciu i działa na wielu urządzeniach, począwszy od urządzeń mobilnych po stacjonarne.</p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
            <i className="bx bx-images"></i>
            <h4>Dodawanie zaginięć</h4>
            <p>Na naszej stronie możesz w łatwy sposób dodać zaginięcie swojego pupila.</p>
          </div>
          <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
            <i className="bx bx-shield"></i>
            <h4>Ochrona zwierząt</h4>
            <p>Współpracujemy z wieloma schroniskami dzięki temu możemy pomagać wszystkim zwięrzętom, dzięki czemu dbamy o ich zdrowie.</p>
          </div>
        </div>
      </div>

    </div>
  </section> 
  <section id="counts" className="counts">
    <div className="container" data-aos="fade-up">

      <div className="row no-gutters">
        <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
        <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
          <div className="content d-flex flex-column justify-content-center">
            <h3>Licznik adopcji i szczęśliwych piesków</h3>
           
            <div className="row">
              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
                  <p><strong>Szczęśliwe pieski</strong> w  tym roku zostało adoptowanych tylu pmałych pupilów!</p>
                </div>
              </div>

              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" className="purecounter"></span>
                  <p><strong>Zagubieni</strong> tyle piesków udało się nam wspólnie odnaleźć!</p>
                </div>
              </div>

              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-clock"></i>
                  <span data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="4" className="purecounter"></span>
                  <p><strong>Lata działalności</strong> tyle lat już pomagamy!</p>
                </div>
              </div>

              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-award"></i>
                  <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="4" className="purecounter"></span>
                  <p><strong>Schroniska</strong> tyle schronisk z nami współpracuje!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  <section id="testimonials" className="testimonials">
    <div className="container" data-aos="zoom-in">

      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper-wrapper">

          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
              <h3>Imbir</h3>
              <h4>Adoptowany</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Czasem sikałem na wycieraczkę, ale już tego nie robię!
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
              <h3>Reksio</h3>
              <h4>Adoptowany</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Już nie jestem sam!
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div> 

          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
              <h3>Rexarrr</h3>
              <h4>Adoptowany</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Opuściłem schronisko po zaledwie tygodniu!
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div> 

          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
              <h3>Romeo i Julia</h3>
              <h4>Adoptowani</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Szczęśliwa parka z nowym domem!
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div> 

          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
              <h3>Sonia</h3>
              <h4>Adoptowana</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Znalazłam nowy dom!
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>

    </div>
  </section>
  <section id="team" className="team">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Drużyna</h2>
        <p>Sprawdź naszą drużynę</p>
      </div>
      <div className="row">

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-img">
              <img src="assets/img/team/Emilia.jpg" className="img-fluid" alt=""/>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Emilia Zamorowska</h4>
              <span>Dyrektor Generalny</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay="200">
            <div className="member-img">
              <img src="assets/img/team/Piotr.jpg" className="img-fluid" alt=""/>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Piotr Tyburczy</h4>
              <span>Główny programista</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="member" data-aos="fade-up" data-aos-delay="400">
            <div className="member-img">
              <img src="assets/img/team/Mateusz.jpg" className="img-fluid" alt=""/>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h4>Mateusz Głód</h4>
              <span>Assystent ds. Projektu</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section> 

</main> 

<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a></div>
    
  );
}
