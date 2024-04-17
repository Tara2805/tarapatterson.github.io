import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useEffect, useRef  } from 'react-router-dom';
import Splide from '@splidejs/splide';


$(function() {

    // Nice select
    $('.vg-select').niceSelect();
    
    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();
    
    // Page animation initialize
    new WOW().init();

    $('[data-toggle="selected"]').toggleSelected();
  });

  
  var $grid = $('.gridder').isotope({
    itemSelector: '.grid-item',
    percentPosition: true
  });

  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );
