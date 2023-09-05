
import { UserRole } from "../types/User";
import { Activity } from "../types/Activity";

interface PageBannerProps{
    username:string;
    role:UserRole;
    activities:Activity[];
    password:string;

}
export default function PageBanner(props:PageBannerProps):JSX.Element{
    return(
        <>
        <h2>Pagebanner</h2>
        <p>Logged in as: {props.username}</p>
        <p>Your Role is: {props.role}</p>
        <p>Your booked activities:
            {/*här behövs mer när vi lagt in rätt under activity*/}
            <ul>
                {props.activities.map((activity) => (
                    <li key={activity.id}>

                    </li>
                ))}
            </ul>
        </p>


        </>
        
    )
}