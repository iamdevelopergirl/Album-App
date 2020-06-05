import React from 'react';
import './styles/Products.css';
import AlbumTile from './AlbumTile.js';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import img10 from './images/img10.png';
import img11 from './images/img11.png';
import img12 from './images/img12.png';
import img13 from './images/img13.png';
import img14 from './images/img14.png';
import img15 from './images/img15.png';

const items = [
    {"1" : 
     { "artName" : "lorem ipsum" , 
      "artistName" : "by random author", 
      "image": img1
     }
    },
    {"2" : 
        { "artName" : "lorem ipsum" , 
        "artistName" : "by random author", 
        "image": img2
        }
    },
    {"3" : 
        { "artName" : "lorem ipsum" , 
        "artistName" : "by random author", 
        "image": img3
        }
    },
    {"4" : 
        { "artName" : "lorem ipsum" , 
        "artistName" : "by random author", 
        "image": img4
        }
    },
    {"5" : 
        { "artName" : "lorem ipsum" , 
        "artistName" : "by random author", 
        "image": img5
        }
    },
    {"6" : 
        { "artName" : "lorem ipsum" , 
        "artistName" : "by random author", 
        "image": img6
        }
    },
    {"7" : 
        { "artName" : "lorem ipsum" , 
        "artistName" : "by random author", 
        "image": img7
        }
    },
    {"8" : 
        { "artName" : "lorem ipsum" , 
        "artistName" : "by random author", 
        "image": img8
        }
    },
    {"9" : 
        { "artName" : "lorem ipsum" , 
        "artistName" : "by random author", 
        "image": img9
        }
    },
    {"10" : 
        { "artName" : "lorem ipsum" , 
        "artistName" : "by random author", 
        "image": img10
        }
    },
    {"11" : 
     { "artName" : "lorem ipsum" , 
      "artistName" : "by random author", 
      "image": img11
     }
    },
    {"12" : 
     { "artName" : "lorem ipsum" , 
      "artistName" : "by random author", 
      "image": img12
     }
    },
    {"13" : 
     { "artName" : "lorem ipsum" , 
      "artistName" : "by random author", 
      "image": img13
     }
    },
    {"14" : 
     { "artName" : "lorem ipsum" , 
      "artistName" : "by random author", 
      "image": img14
     }
    },
    {"15" : 
     { "artName" : "lorem ipsum" , 
      "artistName" : "by random author", 
      "image": img15
     }
    },
]

function Products(){
    return(
        <div className="items-tile-view">
            {items.map((item, index) => 
                <AlbumTile key={Object.keys(item)[0]} itemKey={Object.keys(item)[0]} item={item[Object.keys(item)[0]]} itemIndex={index}/>
            )}
        </div>

    )
}

export default Products;