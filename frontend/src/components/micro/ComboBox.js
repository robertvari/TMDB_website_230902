import React, { useState } from 'react'

export default function ComboBox({items, selected_item}) {
    const [opened, set_opened] = useState(false)
    const [current_item, set_current_item] = useState(selected_item)

    return (
        <div className='combo-box'>
            <div className='combo-button' onClick={e => set_opened(!opened)}>
                {current_item}{opened? <i className="fa fa-chevron-down"/> : <i className="fa fa-chevron-left"/>}
            </div>

            {
                opened&& <div className='combo-items-container'>
                    {
                        items.map(item => 
                        <div key={item} className='combo-item' onClick={e => 
                                {
                                    set_opened(false)
                                    set_current_item(item)
                                }
                            }>
                            {item}
                        </div>
                        )
                    }
                </div>
            }
        </div>
    )
}
