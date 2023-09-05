import { Activity } from "../types/Activity";
import LoginForm from "../components/LoginForm";
import { UserRole } from "../types/User";

interface LoginPageProps{
onLogin:(username:string,role:UserRole,activities:Activity[],password:string) => void;
}

function LoginPage(props:LoginPageProps){
    const {onLogin} = props;
    return(
        <LoginForm onLogin={onLogin}/>
    )
}
export default LoginPage;