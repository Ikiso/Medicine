import React from 'react';



const Item = ({unit}) => {

    let tds;

    for (let key in unit) {
        tds += '<td>unit[key}</td>';
    }


    return (
        <tr>
            {tds}
        </tr>
    );
};

export default Item;