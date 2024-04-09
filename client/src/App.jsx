import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { TweetProvider } from "./contexts/TweetContext";
import { UserProvider } from "./contexts/UserContext";
import ComposeTweet from "./pages/Compose-tweet/ComposeTweet";
import HomeFeed from "./pages/Home-feed/Home";
// import EditProfile from "/src/pages/user-profile/EditProfile.jsx";
// import UserProfile from "./pages/user-profile/UserProfile";
import LoginStep1 from "./pages/Login/LoginStep1";
import LoginStep2 from "./pages/Login/LoginStep2";
import LoginStep3 from "./pages/Login/LoginStep3";
import LoginStep4 from "./pages/Login/LoginStep4";
import { Base } from "./pages/Login/tempelate";
import { URLs } from "./constants";

const router = createBrowserRouter([
  {
    path: URLs.home,
    element: <Home />,
  },
  {
    path: URLs.signUp,
    element: <Base />,
    children: [
      {
        path: URLs.signUpStep1,
        element: <LoginStep1 />,
      },
      {
        path: URLs.signUpStep2,
        element: <LoginStep2 />,
      },
      {
        path: URLs.signUpStep3,
        element: <LoginStep3 />,
      },
      {
        path: URLs.signUpStep4,
        element: <LoginStep4 />,
      },
    ],
  },
  {
    path: URLs.signUpStep1,
    element: (
      <Base step="1">
        <LoginStep1 />
      </Base>
    ),
  },
  {
    path: URLs.signUpStep2,
    element: (
      <Base step="2">
        <LoginStep2 />
      </Base>
    ),
  },
  {
    path: URLs.signUpStep3,
    element: (
      <Base step="3">
        <LoginStep3 />
      </Base>
    ),
  },
  {
    path: URLs.signUpStep4,
    element: (
      <Base step="4">
        <LoginStep4 />
      </Base>
    ),
  },
  {
    path: URLs.feed,
    element: <HomeFeed />,
  },
  {
    path: URLs.compose,
    element: <ComposeTweet />,
  },
]);

function App() {
  return (
    <>
      <UserProvider>
        <TweetProvider>
          <div className="bg-neutral-1000 ">
            <RouterProvider router={router} />
          </div>
        </TweetProvider>
      </UserProvider>
    </>
  );
}

export default App;
