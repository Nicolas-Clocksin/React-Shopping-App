/*
  Title: HomePage
  Created By: Nicolas Clocksin

  Description: The homepage of the shopping application, where a item carousel
  of items is displayed to the user as well as category list of items.
*/
import ItemCarousel from "../components/ItemCarousel";
import CategoryList from "../components/CategoryList";
import { useAuth } from "../context/AuthContext.jsx";

function HomePage() {
  const { user } = useAuth();
  return (
    <>
      <ItemCarousel />
      <CategoryList />
    </>
  );
}

export default HomePage;
