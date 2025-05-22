import React from "react";

const LearnRatings = () => {
    const [ratings] = React.useState(3); // Current rating

  

  return (
    <div>
      <p className="text-6xl text-center delius-font">
        Lea=rn this ratings shit
      </p>
      <div className="rating">
  {[1,2,3,4,5].map((rating) => (
    <div 
      key={rating} 
      className={`mask mask-star ${rating <= ratings ? 'bg-yellow-400' : 'bg-gray-300'}` }
      aria-current={rating === ratings ? 'true' : 'false'}
      
    ></div>
  ))}
</div>

      
    </div>
  );
};

export default LearnRatings;
