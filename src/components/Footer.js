import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='contenedor-footer'>
      <div className='contenido-footer'>
        <div className='footer-contacto-links'>
          <div className='metodos-contacto'>
            <h3>Contáctanos</h3>
            <i className="fa fa-envelope contacto-icono">
              <p>marketing@fiesac.com.pe</p>
            </i>
            <i className="fa fa-phone contacto-icono">
              <p>+51 995-622-557</p>
            </i>
          </div>
          <div className='links'>
            <h3>Información</h3>
            <a href='/'>Términos y condiciones</a>
            <a href='/'>Politicas de privacidad</a>
          </div>
        </div>
      </div>
      <div className='derechos-reservados'>
          <p>
            © 2024 Corporación FIESAC. Todos los derechos reservados <br />
            FIESAC S.A.C. Jr.Fitzcarrald 1276, Los Olivos, Perú
          </p>
        </div>
    </div>
  )
}

export default Footer
