import React from 'react';
import Logo from '../img/logoHenry.png';

export default function Footer(){
    return (
        <footer class="page-footer fixed-bottom font-small bg-light">
        <div class="footer-copyright text-center py-3">Made by 
          <a  className="text-dark" href="http://www.github.com/florenramirez"> Floren </a> for 
          <img src={Logo} width='20' height='20' alt=''/>
          <a className="text-dark" href="http://www.soyhenry.com"> Henry </a>
        </div>
      </footer>
    )
}