import { Sidebar } from "../components/Sidebar";
import NavBar from "../components/HistoryNavBar";
import HistoryMainContent from "../components/HistoryMainContent";

const HistoryLayout = () => {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
            <NavBar />
            <main className="p-6">
          <HistoryMainContent/>
        </main>
        </div>
      </div>
    );
  };
  export default HistoryLayout;