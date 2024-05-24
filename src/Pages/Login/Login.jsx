import React, { useContext, useEffect, useState } from "react";
import { BiLowVision, BiShowAlt } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { HiLogin } from "react-icons/hi";
import bannerImg from '../../assets/Banner1-removebg-preview.png'

import swal from "sweetalert";

// import { Helmet } from "react-helmet-async";




import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import UseAxiosPublic from "../../CustomHooks/UseAxiosPublic";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState("");
    const axiosPublic = UseAxiosPublic();
  
    const { signInUser, signInWithGoogle, goToTop } = useContext(AuthContext);
  
    const location = useLocation();
    const navigate = useNavigate();
  
    const handleSignIn = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get("email");
      const password = form.get("password");
      console.log(email, password);
      setLoginError("");
  
      signInUser(email, password)
        .then(() => {
          swal({
            position: "top-center",
            icon: "success",
            title: "Successfully Signed In",
            showConfirmButton: false,
            showCancelButton: false,
            timer: 2000,
          });
          // navigate user
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 2000);
        })
        .catch(() => {
          setLoginError("Invalid User. Please Check Email or Password Again");
        });
    };
  
    const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then((result) => {
          // user data entry in database
          const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            swal({
              position: "top-center",
              icon: "success",
              title: "Successfully Signed In",
              showConfirmButton: false,
              showCancelButton: false,
              timer: 2000,
            });
            // navigate user
            setTimeout(() => {
              navigate(location?.state ? location.state : "/");
            }, 2000);
          });
        })
        .catch((error) => {
          setLoginError(error.message);
        });
    };
  
    return (
      <div>
        {/* <Helmet>
          <title>Reel Radar | SIGN IN</title>
        </Helmet> */}
        <div className="hero lg:p-10 font-Roboto">
          <div className="hero-content p-0 flex-col-reverse lg:flex-row-reverse lg:items-center lg:justify-around">
            <div
              className="text-center flex flex-col lg:justify-center items-end lg:text-right lg:pl-10 lg:w-[40%] p-10"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <img
                className="w-80"
                src={bannerImg}
                alt=""
              />
  
              <p className="py-2 font-Ephesis text-lg">
                Welcome back! We`re delighted to see you again. Sign in to your
                account and continue your journey with us. Your access to a world
                of opportunities and experiences awaits. Let`s get started!
              </p>
            </div>
            <div className="divider lg:divider-horizontal">
              <HiLogin size={50}></HiLogin>
            </div>
            <div
              className="card lg:w-[60%] flex-shrink-0 max-w-lg shadow-2xl bg-[#C1DCDC]"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <form onSubmit={handleSignIn} className="card-body mt-10 lg:mt-0">
                <h1 className="text-5xl font-bold text-center mb-10">
                  Sign in now!
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex items-center relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="input input-bordered w-full"
                      required
                    />
                    <div className="absolute right-4">
                      {!showPassword ? (
                        <BiLowVision
                          className="cursor-pointer"
                          size="20px"
                          onClick={() => setShowPassword(!showPassword)}
                        ></BiLowVision>
                      ) : (
                        <BiShowAlt
                          className="cursor-pointer"
                          size="20px"
                          onClick={() => setShowPassword(!showPassword)}
                        ></BiShowAlt>
                      )}
                    </div>
                  </div>
                </div>
  
                <div className="mx-auto mb-4 pt-4  w-full px-10 text-center">
                  {loginError && (
                    <p className="text-rose-800 italic text-bold">{loginError}</p>
                  )}
                </div>
  
                <div className="form-control mt-10">
                  <button className="h-14 hover:scale-110 transition-transform font-semibold w-full bg-gradient-to-r from-green-950 via-green-700 to-green-200 text-white">
                    Sign in
                  </button>
                </div>
  
                <div className="flex flex-col justify-between mt-10 mb-6 space-y-6 lg:space-y-0">
                  <button
                    onClick={handleGoogleSignIn}
                    className="text-black btn rounded-none shadow-2xl border-none bg-transparent hover:rounded-none capitalize"
                  >
                    <FcGoogle></FcGoogle>
                    Sign in with Google
                  </button>
                </div>
  
                <div className="text-center pt-6">
                  <small className="font-medium text-black">
                    New to this Website? Please
                    <Link to="/register" className="text-red-700 ml-1">
                      <button onClick={goToTop}>Register</button>
                    </Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Login;