/*
  Title:
  Created By: Nicolas Clocksin

  Description: 
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
