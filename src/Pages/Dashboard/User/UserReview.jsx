import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import StarRatings from 'react-star-ratings';

const UserReview = () => {
    const { user } = useContext(AuthContext);
    const [allReviews, setAllReviews] = useState([]);
    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        fetch('https://product-pulse-server-five.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data));
    }, []);

    useEffect(() => {
        if (user && allReviews.length > 0) {
            const filteredReviews = allReviews.filter(review => review.email === user.email);
            setUserReviews(filteredReviews);
        }
    }, [user, allReviews]);

    return (
        <div className='mx-auto grid lg:grid-cols-3 h-[300px]'>
           
            {userReviews.length > 0 ? (
                userReviews?.map(review => (
                    <section key={review?._id} review={review} className="bg-[#C1DCDC] p-10 rounded-lg text-center">
                    <div className="flex items-center justify-center gap-4 ">
                      <img
                        className="avatar w-10 rounded-full"
                        src={review?.photo}
                        alt=""
                      />
                      <div>
                        <h1 className="text-xl">{review?.email}</h1>
                        <small>
                          {review?.date ? review.date.slice(0, 10) : ""}
                        </small>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      <h1>{review?.review}</h1>
                      <StarRatings
                        rating={review?.rating}
                        starEmptyColor="gray"
                        starRatedColor="orange"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="10px"
                      />
                    </div>
                  </section>
                ))
            ) : (
                <p>No reviews found for the current user.</p>
            )}
        </div>
    );
};

export default UserReview;
