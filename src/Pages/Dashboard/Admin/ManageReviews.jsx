import React, { useEffect, useState } from 'react';
import { AiFillLike, AiOutlineDislike } from 'react-icons/ai';
import StarRatings from 'react-star-ratings';
import UseAxiosSecure from '../../../CustomHooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import swal from 'sweetalert';

const ManageReviews = () => {

    const [allReviews, setallReviews] = useState();

    useEffect(()=> {
        fetch(`https://product-pulse-server-five.vercel.app/reviews`)
        .then(res=> res.json())
        .then(data=> setallReviews(data))
    },[]);

    const axiosSecure = UseAxiosSecure();
    const { refetch, data: reviews = [] } = useQuery({
      queryKey: ["reviews"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/reviews`);
        return res.data;
      },
    });
  
    const handleDelete = id => {
      console.log(id);
      swal({
          title: "Please Confirm!",
          text: "Are you sure to delete?",
          icon: "warning",
          dangerMode: true,
        })
        .then(isConfirmed => {
          if (isConfirmed) {
             axiosSecure.delete(`/reviews/${id}`)
             .then(res=> {
              if(res.data.deletedCount > 0){
                  refetch();
                  swal('Review Deleted')
              }
             })
           
          } else{
            swal("Not Removed");
  
          }
        });
  }
  


    return (
        <div>
              {/* Review Section */}
      <div className=" p-10">
        <h1 className="text-lg mx-auto mb-10 px-2 py-2 bg-gradient-to-r from-transparent via-[#C1DCDC] to-transparent text-black  text-center w-full">
          Manage Reviews
        </h1>
        
        <div className="grid grid-cols-3 gap-8 my-10">
            {allReviews?.map((theReview) => (
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
                <button className='btn btn-ghost mt-6' onClick={() => handleDelete(theReview?._id)}>Delete</button>
        <div className="mt-6 space-y-4">
        
      </div>
              </section>
            ))}
          </div>
      
      </div>
        </div>
    );
};

export default ManageReviews;