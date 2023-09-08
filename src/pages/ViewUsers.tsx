import Header from "../components/Header";
import { User } from "../types/User";

interface ViewUsersProps{
    users:User[]
}
function ViewUsers(props:ViewUsersProps):JSX.Element{

return(
<>
<Header/>
<h1>Users:</h1>
<ul>
{props.users.map((user) => (
    <li key={user.id}>
        <h4>{user.username} id:{user.id}</h4>
        <h5>{user.activities.map((activity => (
            <p>{activity.title} {activity.date.toLocaleString()}</p>
        )))}</h5>
    </li>
))}
   

</ul>
</>
)
}

export default ViewUsers;