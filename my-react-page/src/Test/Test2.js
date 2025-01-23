import { useState } from 'react';
import { sculptureList } from './Test2_data.js';

import './Test2.css';


const Test2 = () => {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleClick() {

        console.log(index);

        if(sculptureList.length-1 === index ){
            alert('마지막 페이지 입니다.');
        }
        // setIndex(index + 1);

        if (sculptureList.length-1 > index) {
            setIndex(index + 1);
        }


    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];


    return (
        <>
          <button onClick={handleClick} className="Test2-cyan-btn" >
            Next
          </button>
          <h2>
            <i>{sculpture.name} </i>
            by {sculpture.artist}
          </h2>
          <h3>
            ({index + 1} of {sculptureList.length})
          </h3>
          <button className='Test2-cyan-btn' onClick={handleMoreClick}>
            {showMore ? 'Hide' : 'Show'} details
          </button>

          {showMore && <p>{sculpture.description}</p>}

          <img
            src={sculpture.url}
            alt={sculpture.alt}
          />

        </>
      );

}

export default Test2;
