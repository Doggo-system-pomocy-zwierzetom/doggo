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
// import '../style/style.css';
import herobg from '../img/hero-bg.jpg';
import testimonials from '../img/testimonials-bg.jpg';
import counts from '../img/counts-img.jpg';
import team from 'https://i.ibb.co/gy897P8/tlo.png';

const StyledHomeView = styled.main`
  font-family: 'Open Sans', sans-serif;
  color: #444444;

  a {
    color: var(--second);
    /* color: var(--second); */
    text-decoration: none;
  }

  a:hover {
    color: var(--second-hover);
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway', sans-serif;
  }

  /*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
  .back-to-top {
    position: fixed;
    visibility: hidden;
    opacity: 0;
    right: 15px;
    bottom: 15px;
    z-index: 996;
    background: var(--second);
    width: 40px;
    height: 40px;
    border-radius: 4px;
    transition: all 0.4s;
  }
  .back-to-top i {
    font-size: 28px;
    color: #151515;
    line-height: 0;
  }
  .back-to-top:hover {
    background: #151515;
  }
  .back-to-top:hover i {
    color: var(--second);
  }
  .back-to-top.active {
    visibility: visible;
    opacity: 1;
  }

  /*--------------------------------------------------------------
# Disable aos animation delay on mobile devices
--------------------------------------------------------------*/
  @media screen and (max-width: 768px) {
    [data-aos-delay] {
      transition-delay: 0 !important;
    }
  }

  /*--------------------------------------------------------------
#  Get Startet Button
--------------------------------------------------------------*/
  .get-started-btn {
    color: #fff;
    border-radius: 4px;
    padding: 7px 25px 8px 25px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
    border: 2px solid var(--second);
  }
  .get-started-btn:hover {
    background: #ffbb38;
    color: #343a40;
  }
  @media (max-width: 992px) {
    .get-started-btn {
      padding: 7px 20px 8px 20px;
      margin-right: 15px;
    }
  }

  /*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
  #hero {
    width: 100%;
    height: 100vh;
    background: url(${herobg}) top center;
    background-size: cover;
    position: relative;
  }
  #hero:before {
    content: '';
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  #hero .container {
    position: relative;
    padding-top: 74px;
    text-align: center;
  }
  #hero h1 {
    margin: 0;
    font-size: 56px;
    font-weight: 700;
    line-height: 64px;
    color: #fff;
    font-family: 'Poppins', sans-serif;
  }
  #hero h1 span {
    color: var(--second);
  }
  #hero h2 {
    color: rgba(255, 255, 255, 0.9);
    margin: 10px 0 0 0;
    font-size: 24px;
  }
  #hero .icon-box {
    padding: 30px 20px;
    transition: ease-in-out 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.3);
    height: 100%;
    text-align: center;
  }
  #hero .icon-box i {
    font-size: 32px;
    line-height: 1;
    color: var(--second);
  }
  #hero .icon-box h3 {
    font-weight: 700;
    margin: 10px 0 0 0;
    padding: 0;
    line-height: 1;
    font-size: 20px;
    line-height: 26px;
  }
  #hero .icon-box h3 a {
    color: #fff;
    transition: ease-in-out 0.3s;
  }
  #hero .icon-box h3 a:hover {
    color: var(--second);
  }
  #hero .icon-box:hover {
    border-color: var(--second);
  }
  @media (min-width: 1024px) {
    #hero {
      background-attachment: fixed;
    }
  }
  @media (max-width: 768px) {
    #hero {
      height: auto;
    }
    #hero h1 {
      font-size: 28px;
      line-height: 36px;
    }
    #hero h2 {
      font-size: 20px;
      line-height: 24px;
    }
  }

  /*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
  section {
    padding: 60px 0;
    overflow: hidden;
  }

  .section-title {
    padding-bottom: 40px;
  }
  .section-title h2 {
    font-size: 14px;
    font-weight: 500;
    padding: 0;
    line-height: 1px;
    margin: 0 0 5px 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #aaaaaa;
    font-family: 'Poppins', sans-serif;
  }
  .section-title h2::after {
    content: '';
    width: 120px;
    height: 1px;
    display: inline-block;
    background: #ffde9e;
    margin: 4px 10px;
  }
  .section-title p {
    margin: 0;
    margin: 0;
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    color: #151515;
  }

  /*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
  .about .content h3 {
    font-weight: 700;
    font-size: 28px;
    font-family: 'Poppins', sans-serif;
  }
  .about .content ul {
    list-style: none;
    padding: 0;
  }
  .about .content ul li {
    padding: 0 0 8px 26px;
    position: relative;
  }
  .about .content ul i {
    position: absolute;
    font-size: 20px;
    left: 0;
    top: -3px;
    color: var(--second);
  }
  .about .content p:last-child {
    margin-bottom: 0;
  }

  /*--------------------------------------------------------------
# Clients
--------------------------------------------------------------*/
  .clients {
    padding-top: 20px;
  }
  .clients .swiper-slide img {
    opacity: 0.5;
    transition: 0.3s;
    filter: grayscale(100);
  }
  .clients .swiper-slide img:hover {
    filter: none;
    opacity: 1;
  }
  .clients .swiper-pagination {
    margin-top: 20px;
    position: relative;
  }
  .clients .swiper-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 1;
    background-color: #ddd;
  }
  .clients .swiper-pagination .swiper-pagination-bullet-active {
    background-color: var(--second);
  }

  /*--------------------------------------------------------------
# Features
--------------------------------------------------------------*/
  .features {
    padding-top: 20px;
  }
  .features .icon-box {
    padding-left: 15px;
  }
  .features .icon-box h4 {
    font-size: 20px;
    font-weight: 700;
    margin: 5px 0 10px 60px;
  }
  .features .icon-box i {
    font-size: 48px;
    float: left;
    color: var(--second);
  }
  .features .icon-box p {
    font-size: 15px;
    color: #848484;
    margin-left: 60px;
  }
  .features .image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 400px;
  }

  /*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
  .services .icon-box {
    text-align: center;
    border: 1px solid #ebebeb;
    padding: 80px 20px;
    transition: all ease-in-out 0.3s;
    background: #fff;
  }
  .services .icon-box .icon {
    margin: 0 auto;
    width: 64px;
    height: 64px;
    background: var(--second);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .services .icon-box .icon i {
    color: #151515;
    font-size: 28px;
    transition: ease-in-out 0.3s;
  }
  .services .icon-box h4 {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 24px;
  }
  .services .icon-box h4 a {
    color: #151515;
    transition: ease-in-out 0.3s;
  }
  .services .icon-box h4 a:hover {
    color: var(--second);
  }
  .services .icon-box p {
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
  }
  .services .icon-box:hover {
    border-color: #fff;
    box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
  }

  /*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
  .portfolio .portfolio-item {
    margin-bottom: 30px;
  }
  .portfolio #portfolio-flters {
    padding: 0;
    margin: 0 auto 20px auto;
    list-style: none;
    text-align: center;
  }
  .portfolio #portfolio-flters li {
    cursor: pointer;
    display: inline-block;
    padding: 8px 15px 10px 15px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    color: #444444;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
    border-radius: 3px;
  }
  .portfolio #portfolio-flters li:hover,
  .portfolio #portfolio-flters li.filter-active {
    color: #151515;
    background: var(--second);
  }
  .portfolio #portfolio-flters li:last-child {
    margin-right: 0;
  }
  .portfolio .portfolio-wrap {
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    background: rgba(21, 21, 21, 0.6);
  }
  .portfolio .portfolio-wrap::before {
    content: '';
    background: rgba(21, 21, 21, 0.6);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all ease-in-out 0.3s;
    z-index: 2;
    opacity: 0;
  }
  .portfolio .portfolio-wrap img {
    transition: all ease-in-out 0.3s;
  }
  .portfolio .portfolio-wrap .portfolio-info {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    transition: all ease-in-out 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 20px;
  }
  .portfolio .portfolio-wrap .portfolio-info h4 {
    font-size: 20px;
    color: #fff;
    font-weight: 600;
  }
  .portfolio .portfolio-wrap .portfolio-info p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    font-style: italic;
  }
  .portfolio .portfolio-wrap .portfolio-links {
    text-align: center;
    z-index: 4;
  }
  .portfolio .portfolio-wrap .portfolio-links a {
    color: #fff;
    margin: 0 5px 0 0;
    font-size: 28px;
    display: inline-block;
    transition: 0.3s;
  }
  .portfolio .portfolio-wrap .portfolio-links a:hover {
    color: var(--second);
  }
  .portfolio .portfolio-wrap:hover::before {
    opacity: 1;
  }
  .portfolio .portfolio-wrap:hover img {
    transform: scale(1.2);
  }
  .portfolio .portfolio-wrap:hover .portfolio-info {
    opacity: 1;
  }

  /*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
  .portfolio-details {
    padding-top: 40px;
  }
  .portfolio-details .portfolio-details-slider img {
    width: 100%;
  }
  .portfolio-details .portfolio-details-slider .swiper-pagination {
    margin-top: 20px;
    position: relative;
  }
  .portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 1;
    border: 1px solid var(--second);
  }
  .portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {
    background-color: var(--second);
  }
  .portfolio-details .portfolio-info {
    padding: 30px;
    box-shadow: 0px 0 30px rgba(21, 21, 21, 0.08);
  }
  .portfolio-details .portfolio-info h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .portfolio-details .portfolio-info ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
  }
  .portfolio-details .portfolio-info ul li + li {
    margin-top: 10px;
  }
  .portfolio-details .portfolio-description {
    padding-top: 30px;
  }
  .portfolio-details .portfolio-description h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .portfolio-details .portfolio-description p {
    padding: 0;
  }

  /*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/

  .counts .content {
    padding: 30px 0;
  }
  .counts .content h3 {
    font-weight: 700;
    font-size: 34px;
    color: #151515;
  }
  .counts .content p {
    margin-bottom: 0;
  }
  .counts .content .count-box {
    padding: 20px 0;
    width: 100%;
  }
  .counts .content .count-box i {
    display: block;
    font-size: 36px;
    color: var(--second);
    float: left;
  }
  .counts .content .count-box span {
    font-size: 36px;
    line-height: 30px;
    display: block;
    font-weight: 700;
    color: #151515;
    margin-left: 50px;
  }
  .counts .content .count-box p {
    padding: 15px 0 0 0;
    margin: 0 0 0 50px;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    color: #3b3b3b;
  }
  .counts .content .count-box a {
    font-weight: 600;
    display: block;
    margin-top: 20px;
    color: #3b3b3b;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    transition: ease-in-out 0.3s;
  }
  .counts .content .count-box a:hover {
    color: #626262;
  }
  .counts .image {
    background: url(${counts}) center center no-repeat;
    background-size: cover;
    min-height: 400px;
  }
  @media (max-width: 991px) {
    .counts .image {
      text-align: center;
    }
    .counts .image img {
      max-width: 80%;
    }
  }
  @media (max-width: 667px) {
    .counts .image img {
      max-width: 100%;
    }
  }

  /*--------------------------------------------------------------
# Testimonials
--------------------------------------------------------------*/
  .testimonials {
    padding: 80px 0;
    background: url(${testimonials}) no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
  }
  .testimonials::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
  }
  .testimonials .section-header {
    margin-bottom: 40px;
  }
  .testimonials .testimonials-carousel,
  .testimonials .testimonials-slider {
    overflow: hidden;
  }
  .testimonials .testimonial-item {
    text-align: center;
    color: #fff;
  }
  .testimonials .testimonial-item .testimonial-img {
    width: 100px;
    border-radius: 50%;
    border: 6px solid rgba(255, 255, 255, 0.15);
    margin: 0 auto;
  }
  .testimonials .testimonial-item h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #fff;
  }
  .testimonials .testimonial-item h4 {
    font-size: 14px;
    color: #ddd;
    margin: 0 0 15px 0;
  }
  .testimonials .testimonial-item .quote-icon-left,
  .testimonials .testimonial-item .quote-icon-right {
    color: rgba(255, 255, 255, 0.6);
    font-size: 26px;
  }
  .testimonials .testimonial-item .quote-icon-left {
    display: inline-block;
    left: -5px;
    position: relative;
  }
  .testimonials .testimonial-item .quote-icon-right {
    display: inline-block;
    right: -5px;
    position: relative;
    top: 10px;
  }
  .testimonials .testimonial-item p {
    font-style: italic;
    margin: 0 auto 15px auto;
    color: #eee;
  }
  .testimonials .swiper-pagination {
    margin-top: 20px;
    position: relative;
  }
  .testimonials .swiper-pagination .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.4);
    opacity: 0.5;
  }
  .testimonials .swiper-pagination .swiper-pagination-bullet-active {
    background-color: var(--second);
    opacity: 1;
  }
  @media (min-width: 1024px) {
    .testimonials {
      background-attachment: fixed;
    }
  }
  @media (min-width: 992px) {
    .testimonials .testimonial-item p {
      width: 80%;
    }
  }

  /*--------------------------------------------------------------
# Team
--------------------------------------------------------------*/
  .team {
    background: #fff;
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
      url('https://i.ibb.co/gy897P8/tlo.png');
    padding: 60px 0;
  }
  .team .member {
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  }
  .team .member .member-img {
    position: relative;
    overflow: hidden;
  }
  .team .member .social {
    position: absolute;
    left: 0;
    bottom: 30px;
    right: 0;
    opacity: 0;
    transition: ease-in-out 0.3s;
    text-align: center;
  }
  .team .member .social a {
    transition: color 0.3s;
    color: #151515;
    margin: 0 3px;
    border-radius: 4px;
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.8);
    transition: ease-in-out 0.3s;
    color: #484848;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .team .member .social a:hover {
    color: #151515;
    background: var(--second);
  }
  .team .member .social i {
    font-size: 18px;
    line-height: 0;
  }
  .team .member .member-info {
    padding: 25px 15px;
  }
  .team .member .member-info h4 {
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 18px;
    color: #151515;
  }
  .team .member .member-info span {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: #aaaaaa;
  }
  .team .member .member-info p {
    font-style: italic;
    font-size: 14px;
    line-height: 26px;
    color: #777777;
  }
  .team .member:hover .social {
    opacity: 1;
    bottom: 15px;
  }

  /*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
  .contact .info {
    width: 100%;
    background: #fff;
  }
  .contact .info i {
    font-size: 20px;
    background: var(--second);
    color: #151515;
    float: left;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
  }

  .contact .info h4 {
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #151515;
  }
  .contact .info p {
    padding: 0 0 0 60px;
    margin-bottom: 0;
    font-size: 14px;
    color: #484848;
  }
  .contact .info .email,
  .contact .info .phone {
    margin-top: 40px;
  }
  .contact .php-email-form {
    width: 100%;
    background: #fff;
  }
  .contact .php-email-form .form-group {
    padding-bottom: 8px;
  }
  .contact .php-email-form .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;
  }
  .contact .php-email-form .error-message br + br {
    margin-top: 25px;
  }
  .contact .php-email-form .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }
  .contact .php-email-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
  }
  .contact .php-email-form .loading:before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }
  .contact .php-email-form input,
  .contact .php-email-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    border-radius: 4px;
  }
  .contact .php-email-form input:focus,
  .contact .php-email-form textarea:focus {
    border-color: var(--second);
  }
  .contact .php-email-form input {
    height: 44px;
  }
  .contact .php-email-form textarea {
    padding: 10px 12px;
  }
  .contact .php-email-form button[type='submit'] {
    background: var(--second);
    border: 0;
    padding: 10px 24px;
    color: #151515;
    transition: 0.4s;
    border-radius: 4px;
  }
  .contact .php-email-form button[type='submit']:hover {
    background: #ffcd6b;
  }
  @-webkit-keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

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

  return (
    <StyledHomeView>
      <section id="hero" className="d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div className="col-xl-6 col-lg-8">
              <h1>
                Drużyna pierścienia<span>.</span>
              </h1>
              <h2>Nie wiemy co robimy</h2>
            </div>
          </div>

          <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
            <div className="col-xl-2 col-md-4">
              <h3>
                <img src="assets/img/testimonials/testimonials-5.jpg" />
              </h3>
            </div>

            <div className="col-xl-2 col-md-4">
              <h3>
                <img src="assets/img/testimonials/testimonials-5.jpg" />
              </h3>
            </div>

            <div className="col-xl-2 col-md-4">
              <h3>
                <img src="assets/img/testimonials/testimonials-5.jpg" />
              </h3>
            </div>

            <div className="col-xl-2 col-md-4">
              <h3>
                <img src="assets/img/testimonials/testimonials-5.jpg" />
              </h3>
            </div>

            <div className="col-xl-2 col-md-4">
              <h3>
                <img src="assets/img/testimonials/testimonials-5.jpg" />
              </h3>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h3>Założenia aplikacji</h3>
                <p className="fst-italic">
                  Naszym głównym celem jest pomoc zwierzątom, tym bezdomnym jak i zaginionym.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> Stworzenie przyjaznej aplikacji.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Funkcjonalność pomagająca szybko odnaleźć swojego
                    zaginionego pupila.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Współpraca i wsparcie schronisk.
                  </li>
                </ul>
                <p>Wszystkie te założenia udaje się nam spełnić, szczegóły możesz obejrzeć niżej.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="image col-lg-6"
                style={{ backgroundImage: 'URL("assets/img/features.jpg")' }}
                data-aos="fade-right"
              ></div>
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
                <div className="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-receipt"></i>
                  <h4>Adopcje</h4>
                  <p>
                    Na naszej stronie możesz przeglądac adopcje wszystkich zwierząt znajdujących się w naszej
                    bazie danych w twojej okolicy.
                  </p>
                </div>
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Prostota</h4>
                  <p>
                    Nasza aplikacja jest łatwa w użyciu i działa na wielu urządzeniach, począwszy od urządzeń
                    mobilnych po stacjonarne.
                  </p>
                </div>
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-images"></i>
                  <h4>Dodawanie zaginięć</h4>
                  <p>Na naszej stronie możesz w łatwy sposób dodać zaginięcie swojego pupila.</p>
                </div>
                <div className="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
                  <i className="bx bx-shield"></i>
                  <h4>Ochrona zwierząt</h4>
                  <p>
                    Współpracujemy z wieloma schroniskami dzięki temu możemy pomagać wszystkim zwięrzętom,
                    dzięki czemu dbamy o ich zdrowie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row no-gutters">
              <div
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
                data-aos="fade-right"
                data-aos-delay="100"
              ></div>
              <div
                className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="content d-flex flex-column justify-content-center">
                  <h3>Licznik adopcji i szczęśliwych piesków</h3>

                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-emoji-smile"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="65"
                          data-purecounter-duration="2"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Szczęśliwe pieski</strong> w tym roku zostało adoptowanych tylu pmałych
                          pupilów!
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="85"
                          data-purecounter-duration="2"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Zagubieni</strong> tyle piesków udało się nam wspólnie odnaleźć!
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-clock"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="4"
                          data-purecounter-duration="4"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Lata działalności</strong> tyle lat już pomagamy!
                        </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-award"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="20"
                          data-purecounter-duration="4"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Schroniska</strong> tyle schronisk z nami współpracuje!
                        </p>
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
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
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
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
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
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
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
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
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
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
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
                    <img src="assets/img/team/Emilia.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
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
                    <img src="assets/img/team/Piotr.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
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
                    <img src="assets/img/team/Mateusz.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
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

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </StyledHomeView>
  );
}
