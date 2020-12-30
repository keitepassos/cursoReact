import React from 'react';

function EspecialidadeItem({item, onDelete}){

    return(
        <>
            <li>
                {item}
                <button type="button" onClick={onDelete}>X</button>
            </li>                       
        </>
    )
}

export default EspecialidadeItem;