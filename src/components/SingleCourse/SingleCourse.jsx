import PropTypes from "prop-types";
import { BsBook } from 'react-icons/bs';
import { LuDollarSign } from 'react-icons/lu';

const SingleCourse = ({ course, handleSelectedCourse }) => {
  const {image, name, details, price, credit} = course;
  return (
    <div>
      <div className="card w-full p-3 bg-white rounded-lg">
        <figure>
          <img 
            src={image}
            alt="courses"
            className="rounded-lg w-full"
          />
        </figure>
        <div className="card-body items-center text-left">
          <h2 className="card-title font-medium text-lg py-3">{name}</h2>
          <p className="text-sm text-gray-500 pb-3">{details}</p>
          <div className="flex justify-between align-middle items-center pb-4">
            <div className="flex justify-between  items-center">
              <div className="pe-1 text-gray-500 text-xl"><LuDollarSign /></div>
               <div className="text-gray-500 text-base">Price: {price}</div>
            </div>
            <div className="flex justify-between  items-center">
              <div className="pe-2 text-gray-500 text-xl"><BsBook /></div>
              <div className="text-gray-500 text-base">Credit: {credit}hr</div>
              </div>
          </div>
          <div className="card-actions">
            <button onClick={() => handleSelectedCourse(course)} className="btn transition ease-in-out delay-100 bg-blue-500 hover:scale-95 hover:bg-blue-800 duration-300 font-semibold text-white text-lg tracking-wider w-full p-2 rounded-lg">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleCourse.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectedCourse: PropTypes.func.isRequired,
};
<h1>Single Course</h1>;
export default SingleCourse;
<h1>Single Course</h1>;
