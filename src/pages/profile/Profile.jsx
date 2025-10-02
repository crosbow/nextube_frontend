import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="bg-white font-sans mr-3">
      <div className=" h-32 bg-black/10 my-2 rounded-md">
        <img
          src="https://yt3.ggpht.com/HR5bTyedjHyoOd9h2zty2OAqZ3MFM6T7_R48jhdd2rQE2aSPHOD2B-ibdv-yLSTy4_AAF6XdoCk=w2560-fcrop64=1,00005a57ffffa5a8-nd-c0xffffffff-rj-k-no"
          alt=""
        />
      </div>
      <div className="-mt-1 bg-grey-lighter">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4 px-16">
            <div className="flex items-center">
              <img
                className="w-24 h-24 rounded-full"
                src="https://yt3.ggpht.com/-5ny40r8qe90/AAAAAAAAAAI/AAAAAAAAAAA/IrloZ_OeiYc/s288-c-k-no-mo-rj-c0xffffff/photo.jpg"
                alt="channel_logo"
              />
              <div className="ml-6">
                <div className="text-2xl font-normal flex items-center">
                  <span className="mr-2">Jubayer Ahmed</span>
                </div>
                <p className="text-gray-600">@jubayer123</p>
                <p className="mt-2 font-hairline text-sm">
                  126,014 subscribers
                </p>
              </div>
            </div>
          </div>
          <div className="px-16">
            <ul className="list-reset flex">
              <li className="text-center py-3 px-8 border-b-2 border-solid border-grey-dark">
                <Link to="home" className="text-black">
                  Home
                </Link>
              </li>
              <li className="text-center py-3 px-8">
                <a href="#" className="hover:text-black">
                  Videos
                </a>
              </li>
              <li className="text-center py-3 px-8">
                <a href="#" className="hover:text-black">
                  Playlists
                </a>
              </li>
              <li className="text-center py-3 px-8">
                <a href="#" className="hover:text-black">
                  Community
                </a>
              </li>
              <li className="text-center py-3 px-8">
                <a href="#" className="hover:text-black">
                  Channels
                </a>
              </li>
              <li className="text-center py-3 px-8">
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li className="text-center py-3 px-8">
                <i className="fa fa-search fa-lg text-grey-dark" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:px-6 px-1 w-[85%] mx-auto">
        <div className="flex flex-col pb-[12%] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Profile;
