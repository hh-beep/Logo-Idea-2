//Import Area
import React from 'react';

import "./style/style.css"

//Info Component
function Info(  props  ) {

  const info = props.info

  //App View
  return(
    <main className='main'>

      {/*Item Area*/}
      <section className='container'>

        {/*Download selected image*/}
        <a 
          className='container__item' 
          href={  info.name  } 
          download={  info.img  } 
          title="Image Selecionada"
        >

          <section className='box'>
            
            <h1 className='box__tittle' >{  info.name  }</h1>

            
            <img className={'box__image ' + info.style} src={  info.img  } />
          </section>

        </a>

      </section>


      <form className='form'>
        {/*Back to homepage*/}
        <button 
            className='form__btn' 
            onClick={() => {  window.location.hash="#/"  }} 
          >
            Voltar
        </button>
      </form>

    </main>
  )
}

export default Info