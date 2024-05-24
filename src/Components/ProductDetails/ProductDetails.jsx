import React, { useContext, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useLoaderData } from "react-router-dom";
import { IoPricetagOutline } from "react-icons/io5";
import Rating from "react-rating";
import StarRatings from "react-star-ratings";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import surveyImg from "../../assets/communitysurvey-removebg-preview.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import Recaptcha from "react-recaptcha";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const currentDate = new Date().toISOString();
  const [disabled, setDisabled] = useState(true)

  const captchaRef = useRef(null)

  useEffect(()=> {
      loadCaptchaEnginge(6)
  },[])

  

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [reply, setReply] = useState('');

  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;
    
    if(validateCaptcha(userCaptchaValue)){
      
      setDisabled(false);
    }
    else{
      
      setDisabled(true)
    }
  }

  const handleLike = () => {
    setLiked(!liked); // Toggle liked state
    if (disliked) setDisliked(false); // If disliked, reset disliked state
  };

  const handleDislike = () => {
    setDisliked(!disliked); // Toggle disliked state
    if (liked) setLiked(false); // If liked, reset liked state
  };

  const thisProduct = useLoaderData();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [reviews, setReviews] = useState();
  const [rating, setRating] = useState(0); // State for storing the rating value

  useEffect(() => {
    fetch(`https://product-pulse-server-five.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const TargetedReview = reviews?.filter(
    (review) => review?.productId === thisProduct?._id
  );
  console.log(TargetedReview);
  

  const handleReview = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const review = form.get("review");
    const productId = thisProduct?._id;
    const email = user?.email;
    const photo = user?.photoURL;

    const addedReview = {
      review: review,
      productId: productId,
      email: email,
      photo: photo,
      date: currentDate,
      rating: rating, // Include the rating value
    };

    console.log(addedReview);

  

    fetch("https://product-pulse-server-five.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal({
          position: "top-center",
          icon: "success",
          title: "Review Added",
          showConfirmButton: false,
          showCancelButton: false,
          timer: 2000,
        });
      });
  };

  const handleChangeReply = (e) => {
    setReply(e.target.value);
  };

  const handleSubmitReply = () => {
    // Handle reply submission
    console.log(reply);
    setReply('');
  };

  return (
    <div className="my-10" data-aos="zoom-in" data-aos-duration="2000">
      <div className="card card-compact  bg-base-100 shadow-xl">
        <div className="flex justify-center gap-24 mb-6 items-center">
          {thisProduct?.images?.map((image) => (
            <img
              image={image}
              className="w-60 h-60"
              src={image}
              alt={thisProduct?.name}
            />
          ))}
        </div>

        <div className="card-body text-center">
          <h2 className="card-title mx-auto text-6xl">{thisProduct?.name} </h2>
          <span>
            <small className="text-base text-red-500">
              {thisProduct?.availability}
            </small>
          </span>
          <p className="text-base text-gray-700">{thisProduct?.description}</p>

          <div className=" flex text-start mx-auto gap-32 items-center justify-between">
            <div>
              <h2 className="mt-6 text-3xl font-semibold mb-4">
                Specification
              </h2>
              <p>
                <span className="font-semibold">Height</span> :{" "}
                {thisProduct?.specifications?.height}
              </p>
              <p>
                <span className="font-semibold">Light</span> :{" "}
                {thisProduct?.specifications?.light}
              </p>
              <p>
                <span className="font-semibold">Water</span> :{" "}
                {thisProduct?.specifications?.water}
              </p>
              <p>
                <span className="font-semibold">Soil</span> :{" "}
                {thisProduct?.specifications?.soil}
              </p>
            </div>
            <p className="flex items-center">
              <span>
                <IoPricetagOutline size={50} />
              </span>
              <span className="text-5xl ml-4">${thisProduct?.price}</span>
            </p>
          </div>
          <h2>
            <span className="text-xl">Ratings</span>
          </h2>
          <StarRatings
            rating={thisProduct?.average_rating}
            starRatedColor="orange"
            starDimension="40px"
            starSpacing="15px"
          />
          <div className="my-10 flex items-center">
            <div className="w-[80%]">
              <h1 className="my-6 text-start text-2xl">Your Opinion</h1>
              <form className="flex flex-col w-[50%]" onSubmit={handleReview}>
                <textarea
                  disabled={!user}
                  title={!user ? "Please login" : ""} // Show tooltip if disabled
                  name="review"
                  placeholder="Write Something"
                  className="textarea h-28 textarea-bordered textarea-success w-full max-w-lg"
                ></textarea>
                {/* rating */}
                <div className="my-4 flex justify-start items-center gap-4 mt-6">
                  <h2 className="text-lg ">Rate this product:</h2>
                  <StarRatings
                    rating={rating}
                    starRatedColor="green"
                    starHoverColor="green"
                    changeRating={(rate) => setRating(rate)}
                    numberOfStars={5}
                    name="rating"
                    starDimension="30px"
                    starSpacing="10px"
                  />
                </div>
                {/* reCAPTCHA */}
                <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="Type the captcha above" ref={captchaRef} placeholder="Captcha" name='captcha' className="input input-bordered" required />
          <button onClick={handleValidateCaptcha} className="btn btn-xs my-4">Validate</button>
        </div>
                <button disabled={disabled} className="bg-gradient-to-r pl-4 py-2 rounded-lg from-[#C1DCDC] to-transparent text-black text-start w-[50%] mt-4">
                  Submit
                </button>
              </form>
            </div>
            <div className="w-[30%]">
              <img className="" src={surveyImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Review Section */}
      <div className="mt-10">
        <h1 className="text-lg mx-auto mb-10 px-2 py-2 bg-gradient-to-r from-transparent via-[#C1DCDC] to-transparent text-black  text-center w-full">
          Reviews
        </h1>
        {TargetedReview?.length > 0 ? (
          <div className="grid grid-cols-3 gap-8 my-10">
            {TargetedReview?.map((theReview) => (
              <section className="bg-[#C1DCDC] p-10 rounded-lg text-center">
                <div className="flex items-center justify-center gap-4 ">
                  <img
                    className="avatar w-10 rounded-full"
                    src={theReview?.photo}
                    alt=""
                  />
                  <div>
                    <h1 className="text-xl">{theReview?.email.slice(0, 10)}</h1>
                    <small>
                      {theReview?.date ? theReview.date.slice(0, 10) : ""}
                    </small>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <h1>{theReview?.review}</h1>
                  <StarRatings
                    rating={theReview?.rating}
                    starEmptyColor="gray"
                    starRatedColor="orange"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="10px"
                  />
                </div>
                <div className="flex gap-20 items-center justify-between">
          <button
          className=""
            onClick={handleLike}
            style={{ color: liked ? "gray" : "gray" }}
          >
            {liked ? <AiFillLike size={40}/> : <AiFillLike size={40}/>}
          </button>
          <button
            onClick={handleDislike}
            style={{ color: disliked ? "gray" : "gray" }}
          >
            {disliked ? <AiOutlineDislike size={40} /> : <AiOutlineDislike size={40}/>}
          </button>
        </div>
        <div className="mt-6 space-y-4">
        <textarea
          value={reply}
          onChange={handleChangeReply}
          placeholder="Write a reply..."
          className="w-full h-20 resize-none border border-gray-300 rounded-md p-2"
        />
        <button onClick={handleSubmitReply} className="bg-slate-600 text-white px-4 py-2 rounded-md">
          Reply
        </button>
      </div>
              </section>
            ))}
          </div>
        ) : (
          <p className="mb-10">No Reviews yet.</p>
        )}

      
      </div>
    </div>
  );
};

export default ProductDetails;
