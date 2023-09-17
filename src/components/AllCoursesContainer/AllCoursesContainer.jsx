import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SingleCourse from '../SingleCourse/SingleCourse';

const AllCoursesContainer = ({handleSelectedCourse}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('fakeData.json')
    .then((res) => res.json())
    .then((data) => setCourses(data))
  },[])

  return (
    <div>
      <div className='grid grid-cols-3 gap-5'>
      {
        courses.map(course => <SingleCourse 
          key={course.id}
          course = {course}
          handleSelectedCourse = {handleSelectedCourse}
          >
          </SingleCourse>)
      }
      </div>
    </div>
  );
};

AllCoursesContainer.propTypes = {
  handleSelectedCourse: PropTypes.func.isRequired,
};

export default AllCoursesContainer;