import React, {useState} from 'react'

export default function FoldableCard({title}) {
    const [opened, set_opened] = useState(false)

    return (
        <div className='card' onClick={e => set_opened(!opened)}>
            <div className='header'>
                <h4>{title}</h4>
                {
                    opened? <i className="fa fa-chevron-down" aria-hidden="true"/> : <i className="fa fa-chevron-right" aria-hidden="true"/>
                }
            </div>
            

            <div>
                {
                    opened&& <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, ab.</p>
                }
            </div>    
        </div>
    )
}
