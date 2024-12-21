import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigation } from "react-router-dom";

function HomeLayout() {
  const navigate = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </div>
  );
}

export default HomeLayout;
