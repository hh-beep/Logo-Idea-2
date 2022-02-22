//Import Area
import React from 'react';
import { Link } from 'react-router-dom';

import data__logo from './data__logo';

import "./style/style.css"

//List component
function List(props) {

  //images data
  const images = data__logo()

  //props passthrough informations of selected image
  const info = props.info
  const setInfo = props.setInfo

  //function for select an image
  function selectImage(  item  ) {
    if(info.length != 0) {
      setInfo('')
      setInfo(item)
    }
    else {
      setInfo(item)
    }
    

    window.location.hash = "#/Image"
  }

  //App View
  return(
    <main className='main'>

      {/*List*/}
      <ul className='main__list'>

        {/*For each image item in images data*/}
        {images.map( (item, key) => {

          //return of an item from item info
          return(
            <li key={key} className='item' onClick={() => {  selectImage(  item  )  }} >
                
              <h1 className='item__tittle'>{  item.name  }</h1>


              <img className={'item__image ' + item.style} src={item.img} />
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default List;

