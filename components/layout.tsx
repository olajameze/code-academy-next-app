import Header from "./header";
import Navbar from "./sidebar";
import footer from "./footer";
const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex">
        <Navbar />
        <div className="flex">
          <footer />
          <div className="items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
