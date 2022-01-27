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
  padding-top: 0;

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
  @font-face {
    font-family: swiper-icons;
    src: url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');
    font-weight: 400;
    font-style: normal;
  }
  :root {
    --swiper-theme-color: #007aff;
  }
  .swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
  .swiper-vertical > .swiper-wrapper {
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }
  .swiper-pointer-events {
    touch-action: pan-y;
  }
  .swiper-pointer-events.swiper-vertical {
    touch-action: pan-x;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
  .swiper-slide-invisible-blank {
    visibility: hidden;
  }
  .swiper-autoheight,
  .swiper-autoheight .swiper-slide {
    height: auto;
  }
  .swiper-autoheight .swiper-wrapper {
    align-items: flex-start;
    transition-property: transform, height;
  }
  .swiper-3d,
  .swiper-3d.swiper-css-mode .swiper-wrapper {
    perspective: 1200px;
  }
  .swiper-3d .swiper-cube-shadow,
  .swiper-3d .swiper-slide,
  .swiper-3d .swiper-slide-shadow,
  .swiper-3d .swiper-slide-shadow-bottom,
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right,
  .swiper-3d .swiper-slide-shadow-top,
  .swiper-3d .swiper-wrapper {
    transform-style: preserve-3d;
  }
  .swiper-3d .swiper-slide-shadow,
  .swiper-3d .swiper-slide-shadow-bottom,
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right,
  .swiper-3d .swiper-slide-shadow-top {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
  }
  .swiper-3d .swiper-slide-shadow {
    background: rgba(0, 0, 0, 0.15);
  }
  .swiper-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .swiper-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .swiper-3d .swiper-slide-shadow-top {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .swiper-3d .swiper-slide-shadow-bottom {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .swiper-css-mode > .swiper-wrapper {
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
    display: none;
  }
  .swiper-css-mode > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: start start;
  }
  .swiper-horizontal.swiper-css-mode > .swiper-wrapper {
    scroll-snap-type: x mandatory;
  }
  .swiper-vertical.swiper-css-mode > .swiper-wrapper {
    scroll-snap-type: y mandatory;
  }
  .swiper-centered > .swiper-wrapper::before {
    content: '';
    flex-shrink: 0;
    order: 9999;
  }
  .swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
    margin-inline-start: var(--swiper-centered-offset-before);
  }
  .swiper-centered.swiper-horizontal > .swiper-wrapper::before {
    height: 100%;
    min-height: 1px;
    width: var(--swiper-centered-offset-after);
  }
  .swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
    margin-block-start: var(--swiper-centered-offset-before);
  }
  .swiper-centered.swiper-vertical > .swiper-wrapper::before {
    width: 100%;
    min-width: 1px;
    height: var(--swiper-centered-offset-after);
  }
  .swiper-centered > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: center center;
  }
  .swiper-virtual.swiper-css-mode .swiper-wrapper::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }
  .swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {
    height: 1px;
    width: var(--swiper-virtual-size);
  }
  .swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {
    width: 1px;
    height: var(--swiper-virtual-size);
  }
  :root {
    --swiper-navigation-size: 44px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
  }
  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: 10px;
    right: auto;
  }
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    content: 'prev';
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    content: 'next';
  }
  .swiper-button-lock {
    display: none;
  }
  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 0.3s opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }
  .swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
  }
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  .swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0;
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transform: scale(0.33);
    position: relative;
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    transform: scale(1);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
    transform: scale(0.33);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
    transform: scale(0.66);
  }
  .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
    transform: scale(0.33);
  }
  .swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
    display: inline-block;
    border-radius: 50%;
    background: var(--swiper-pagination-bullet-inactive-color, #000);
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
  }
  button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -webkit-appearance: none;
    appearance: none;
  }
  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }
  .swiper-pagination-bullet:only-child {
    display: none !important;
  }
  .swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
  }
  .swiper-pagination-vertical.swiper-pagination-bullets,
  .swiper-vertical > .swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    transform: translate3d(0px, -50%, 0);
  }
  .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
    display: block;
  }
  .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
  .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
  }
  .swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet,
  .swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    display: inline-block;
    transition: 0.2s transform, 0.2s top;
  }
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
  }
  .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
  .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic
    .swiper-pagination-bullet {
    transition: 0.2s transform, 0.2s left;
  }
  .swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    transition: 0.2s transform, 0.2s right;
  }
  .swiper-pagination-progressbar {
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
  }
  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: var(--swiper-pagination-color, var(--swiper-theme-color));
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: left top;
  }
  .swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    transform-origin: right top;
  }
  .swiper-horizontal > .swiper-pagination-progressbar,
  .swiper-pagination-progressbar.swiper-pagination-horizontal,
  .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,
  .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0;
  }
  .swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
  .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,
  .swiper-pagination-progressbar.swiper-pagination-vertical,
  .swiper-vertical > .swiper-pagination-progressbar {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0;
  }
  .swiper-pagination-lock {
    display: none;
  }
  .swiper-scrollbar {
    border-radius: 10px;
    position: relative;
    -ms-touch-action: none;
    background: rgba(0, 0, 0, 0.1);
  }
  .swiper-horizontal > .swiper-scrollbar {
    position: absolute;
    left: 1%;
    bottom: 3px;
    z-index: 50;
    height: 5px;
    width: 98%;
  }
  .swiper-vertical > .swiper-scrollbar {
    position: absolute;
    right: 3px;
    top: 1%;
    z-index: 50;
    width: 5px;
    height: 98%;
  }
  .swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    left: 0;
    top: 0;
  }
  .swiper-scrollbar-cursor-drag {
    cursor: move;
  }
  .swiper-scrollbar-lock {
    display: none;
  }
  .swiper-zoom-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .swiper-zoom-container > canvas,
  .swiper-zoom-container > img,
  .swiper-zoom-container > svg {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  .swiper-slide-zoomed {
    cursor: move;
  }
  .swiper-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    transform-origin: 50%;
    animation: swiper-preloader-spin 1s infinite linear;
    box-sizing: border-box;
    border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
    border-radius: 50%;
    border-top-color: transparent;
  }
  .swiper-lazy-preloader-white {
    --swiper-preloader-color: #fff;
  }
  .swiper-lazy-preloader-black {
    --swiper-preloader-color: #000;
  }
  @keyframes swiper-preloader-spin {
    100% {
      transform: rotate(360deg);
    }
  }
  .swiper .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
  }
  .swiper-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-grid > .swiper-wrapper {
    flex-wrap: wrap;
  }
  .swiper-grid-column > .swiper-wrapper {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .swiper-fade.swiper-free-mode .swiper-slide {
    transition-timing-function: ease-out;
  }
  .swiper-fade .swiper-slide {
    pointer-events: none;
    transition-property: opacity;
  }
  .swiper-fade .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-fade .swiper-slide-active,
  .swiper-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-cube {
    overflow: visible;
  }
  .swiper-cube .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
    visibility: hidden;
    transform-origin: 0 0;
    width: 100%;
    height: 100%;
  }
  .swiper-cube .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-cube.swiper-rtl .swiper-slide {
    transform-origin: 100% 0;
  }
  .swiper-cube .swiper-slide-active,
  .swiper-cube .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-cube .swiper-slide-active,
  .swiper-cube .swiper-slide-next,
  .swiper-cube .swiper-slide-next + .swiper-slide,
  .swiper-cube .swiper-slide-prev {
    pointer-events: auto;
    visibility: visible;
  }
  .swiper-cube .swiper-slide-shadow-bottom,
  .swiper-cube .swiper-slide-shadow-left,
  .swiper-cube .swiper-slide-shadow-right,
  .swiper-cube .swiper-slide-shadow-top {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .swiper-cube .swiper-cube-shadow {
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    z-index: 0;
  }
  .swiper-cube .swiper-cube-shadow:before {
    content: '';
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    filter: blur(50px);
  }
  .swiper-flip {
    overflow: visible;
  }
  .swiper-flip .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
  }
  .swiper-flip .swiper-slide .swiper-slide {
    pointer-events: none;
  }
  .swiper-flip .swiper-slide-active,
  .swiper-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto;
  }
  .swiper-flip .swiper-slide-shadow-bottom,
  .swiper-flip .swiper-slide-shadow-left,
  .swiper-flip .swiper-slide-shadow-right,
  .swiper-flip .swiper-slide-shadow-top {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .swiper-creative .swiper-slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    transition-property: transform, opacity, height;
  }
  .swiper-cards {
    overflow: visible;
  }
  .swiper-cards .swiper-slide {
    transform-origin: center bottom;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
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
              <img src="assets/img/testimonials/testimonials-5.gif" width="150" height="150" />
              <h1>
                Doggo<span>.</span>
              </h1>
              <h2>Aplikacja poświęcona zwierzętom!</h2>
              <h2>Pod patronatem Colliego</h2>
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
                        >
                          15
                        </span>
                        <p>
                          <strong>Szczęśliwe pieski</strong> w tym roku zostało adoptowanych tylu małych
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
                        >
                          25
                        </span>
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
                        >
                          4
                        </span>
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
                        >
                          8
                        </span>
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

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src="assets/img/ekspertka.png" width="250" height="250" className="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="section-title">
                  <h2>Współpraca</h2>
                  <p>WSPÓŁPRACE</p>
                </div>
                <p className="fst-italic">Współpracujemy ze światowej klasy ekspertem ds. Marketingu!</p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> Sekcja poświęcona współpracy. Można tutaj
                    umieszczać firmy oraz schroniska które współpracują z aplikacją.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> cd...
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> cd...
                  </li>
                </ul>
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
