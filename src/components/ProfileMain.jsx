import { Link as Linklogo, Shield, ThumbsUp } from "react-feather";
import useAuth from "../hooks/useAuthContext";

function ProfileMain() {
  const authContext = useAuth();
  return (
    <div className="main-profile">
      <div className="url-short card">
        <h1 className="profile-h1">Paste the URL to be shortened</h1>
        <input placeholder="Enter URL here to be shortened..." type={"text"} />
        <button className="profile-btn">Shorten URL</button>
        <p className="text text-center">
          ShortURL is a free service to shorten URLs and create short links
          Create a premium account to shorten unlimited URLs with more features
          for your projects
        </p>
      </div>
      <div className="prmium-box card">
        <h1 className="profile-h1">Want More? Try Premium Features!</h1>
        <p className="text text-center">
          Custom short links, powerful dashboard, detailed analytics, API, UTM
          builder, QR codes, browser extension, 50+ app integrations and
          support.
        </p>
        <button
          onClick={() => {
            if (authContext.user?.guest) {
              authContext.logout();
            }
          }}
          className="profile-btn"
        >
          Create Account
        </button>
      </div>
      <div className="profile-info">
        <h1 className="">Simple and fast URL shortener!</h1>
        <p className="text text-discr">
          ShortURL allows to reduce long links from <a>Instagram</a>,{" "}
          <a>Facebook</a>, <a>YouTube</a>, <a>Twitter</a>, Linked In and sites
          with authority on the Internet. Just paste the long URL and click the
          Shorten URL button. On the next screen, copy the shortened URL and
          share it on websites, chat and emails. After shortening the URL,{" "}
          <a>check how many clicks it received.</a>
        </p>
      </div>
      <div className="profile-info">
        <h1 className="">Shorten, share and track</h1>
        <p className="text text-discr">
          Your shortened URLs can be used in publications, documents,
          advertisements, blogs, forums, instant messages, and other locations.
          Track statistics for your business and projects by monitoring the
          number of hits from your URL with the click counter.
        </p>
      </div>
      <div className="box">
        <div className="tile">
          <ThumbsUp size={60} />
          <p className="text text-center">
            ShortURL is easy and fast, enter the long link to get your shortened
            link
          </p>
        </div>
        <div className="tile">
          <Linklogo size={60} />
          <p className="text text-center">
            Use any link, no matter what size, ShortURL always shortens
          </p>
        </div>
        <div className="tile">
          <Shield size={60} />
          <p className="text text-center">
            Use any link, no matter what size, ShortURL always shortens
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProfileMain;
