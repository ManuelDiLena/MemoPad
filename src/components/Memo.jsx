import React from 'react';

export default function Memo({item, onHandlePinned, onHandleSelectNote, index, actualIndex}) {

    function handlePinned(item, index) {
        onHandlePinned(item, index)
    }

    function handleClick(item, e) {
        onHandleSelectNote(item, e)
    }

    return (
        <div key={item.id} className={ (index === actualIndex) ? 'memo activeMemo' : 'memo' } onClick={ (e) => handleClick(item, e)}>
            <div>
                {item.title === '' ? '[No title]' : item.title.substring(0,20)}
            </div>
            <div>
                <button className='pinButton' onClick={ () => handlePinned(item, index)}>
                    {item.pinned ? 'Pinned': 'Pin'}
                </button>
            </div>
        </div>
    );
}