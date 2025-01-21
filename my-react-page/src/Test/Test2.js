import { useState } from 'react';
import { sculptureList } from './Test2_data.js';

import './Test2.css';


const Test2 = () => {

    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index + 1);
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
          <img
            src={sculpture.url}
            alt={sculpture.alt}
          />
          <p>
            {sculpture.description}
          </p>
        </>
      );

}

export default Test2;
