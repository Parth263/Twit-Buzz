
import Landing from "./components/Landing";
import { UserProvider } from './contexts/UserContext';
import LoginStep1 from "./pages/Login/LoginStep1";
import LoginStep2 from "./pages/Login/LoginStep2";
import LoginStep3 from "./pages/Login/LoginStep3";
import LoginStep4 from "./pages/Login/LoginStep4";


function App() {
  return (
    <>
      {/* <Landing /> */}
      <UserProvider>
        {/* <LoginStep1 /> */}
        {/* <LoginStep2 /> */}
        {/* <LoginStep3 /> */}
        {/* <LoginStep4 /> */}
      </UserProvider>
    </>
  );
}

export default App;
