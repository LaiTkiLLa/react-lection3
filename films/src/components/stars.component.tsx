import {StarsProp} from "../types/stars.type";
import {Star} from "./star.component";
import uuid from "react-uuid";


export const Stars = ({count}: StarsProp) => {
    const starValid = count > 5 || count < 1
    const stars = [...new Array(count).fill(0)]
    return starValid ? null : (
        <ul className='card-body-stars' style={{listStyleType: "none"}}>
            {stars.map(() => (
                <li key={uuid()}><Star /></li>
            ))}
        </ul>
    )
}