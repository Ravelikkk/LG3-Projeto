import React from 'react';

export default function MainRating(props) {
    const { rating, numReviews = "", id } = props;

    return (
        <div className={`card-rating cardRatingId-${id}`} >    
            <span><i className={ rating >= 1 ?"fa fa-star"
                                : rating >= 0.5 ?"fa fa-star-half-o"
                                :"fa fa-star-o"} 
                    >
                    </i></span>
            <span><i className={ rating >= 2 ?"fa fa-star"
                                : rating >= 1.5 ?"fa fa-star-half-o"
                                :"fa fa-star-o"} 
                    >
                    </i></span>
            <span><i className={ rating >= 3 ?"fa fa-star"
                                : rating >= 2.5 ?"fa fa-star-half-o"
                                :"fa fa-star-o"} 
                    >
                    </i></span>
            <span><i className={ rating >= 4 ?"fa fa-star"
                                : rating >= 3.5 ?"fa fa-star-half-o"
                                :"fa fa-star-o"} 
                    >
                    </i></span>
            <span><i className={ rating >= 5 ?"fa fa-star"
                                : rating >= 4.5 ?"fa fa-star-half-o"
                                :"fa fa-star-o"} 
                    >
                    </i></span>
            <span>
                {numReviews + ( numReviews ?' reviews':"")}
            </span>
        </div>
    )
}