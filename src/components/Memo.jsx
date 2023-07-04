import React from 'react';

export default function Memo({item}) {
    return (
        <div key={item.id} className='memo'>
            <div>
                {item.title === '' ? '[No title]' : item.title.substring(0,20)}
            </div>
            <div>
                <button className='pinButton'>
                    {item.pinned ? 'Pinned': 'Pin'}
                </button>
            </div>
        </div>
    );
}