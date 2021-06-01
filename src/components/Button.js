import {useState} from 'react'
export function Button ( props ) {
    // store number of clicks
    const [click,setclick] = useState( props.start )
    const update = () => {
        setclick( click + 1 )
    }
    return (
        <button className="button" onClick={update}>
            { "clicked " + click + " times"}
        </button>
    
    )
}
export default Button
