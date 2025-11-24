/*
  Title: NotFoundPage
  Created By: Nicolas Clocksin

  Description: Defaut when a router page is not found. Dispays error to the user.
*/
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>Not Found Page</h1>
      <Link to={"/"}>
        <button>Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
