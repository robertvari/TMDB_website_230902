import React, { useState } from 'react'

export default function ComboBox({items, selected_item}) {
    const [opened, set_opened] = useState(false)
    const [current_item, set_current_ite] = useState(selected_item)

    return (
        <div className='combo-box'>
            <div className='combo-button'>
                {current_item}{opened? <i className="fa fa-chevron-down"/> : <i className="fa fa-chevron-left"/>}
            </div>

            {
                opened&& <div className='combo-items-container'>
                    {
                        items.map(item => <div>{item}</div>)
                    }
                </div>
            }
        </div>
    )
}
