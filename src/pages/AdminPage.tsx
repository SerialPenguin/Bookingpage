import AddActivityForm from "../components/AddActivityForm";
import PageBanner from "../components/PageBanner";
import BookingPage from "./BookingPage";
import { Activity } from "../types/Activity";
import { Link } from "react-router-dom";

interface AdminPageProps {
  activities: Activity[];
  
}

function AdminPage(props: AdminPageProps): JSX.Element {
  return (
    <>
      <h1>AdminPage</h1>
      <Link to="/add">Add new Activity</Link>
      <p></p>
      <BookingPage activities={props.activities} />
    </>
  );
}

export default AdminPage;
