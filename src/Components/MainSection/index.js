import React from 'react';
import './styles.css';

function MainSection(){
    return(
      <div className= 'main-container'>
          <div className= 'main-data-container'>
              <h1>Rick and Morty</h1>
              <p>O brilhante cientista beberrão Rick sequestra Morty, seu neto aborrescente, para viver loucuras em outros mundos e dimensões alternativas.</p>
              <button type='submit'>Veja mais</button>
          </div>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F09%2F26%2F635472-Rick_and_Morty-Run_for_Jewels-vector_graphics-car-rainbows.jpg&f=1&nofb=1' 
          alt='rick-morty-img'/>
      </div>  
    );
}

export default MainSection;