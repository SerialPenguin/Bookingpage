
export default function LoginPage():JSX.Element{
return(
    <form>
    <input  type="text" placeholder="Username" />
    <input type="password" placeholder="password" />
    <button type="submit">Log in!</button>
</form>
)
}