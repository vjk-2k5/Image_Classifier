import { Sidebar } from "../components/Sidebar";
import NavBar from "../components/HistoryNavBar";

const HistoryLayout = () => {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
            <NavBar />
        </div>
      </div>
    );
  };
  export default HistoryLayout;