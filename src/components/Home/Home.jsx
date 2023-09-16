import { useState } from 'react';
import AllCoursesContainer from '../AllCoursesContainer/AllCoursesContainer';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isRemaining, setIsRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  
  
  const handleSelectedCourse = (course) => {
   const isExisting = selectedCourses.find(singleItem => singleItem.id == course.id);
   let initialHour = course.credit;
   let initialPrice = course.price;

   if(isExisting) {
    alert('Sorry. Already Added');
   }
   else{
    selectedCourses.forEach(i => {
      // console.log(i);
      initialHour = initialHour + i.credit;
      initialPrice = initialPrice + i.price;
      
    })

    const remaining = 20 - initialHour;

    if(initialHour > 20) {
      alert('Sorry. You exceed the hour limit');
    }
    else{
      setIsRemaining(remaining);
      setTotalCredit(initialHour);
      setTotalPrice(initialPrice);
      setSelectedCourses([...selectedCourses, course]);
    }

   
   }

  }
  // console.log(totalCredit, totalPrice, isRemaining);

  return (
    <div className='py-10 w-11/12 mx-auto'>
      <h1 className='font-bold text-4xl pt-2 pb-8 text-center'>Course Registration</h1>
      <div className='flex justify-center align-middle gap-5'>
      <div className='w-9/12'>
        <AllCoursesContainer handleSelectedCourse = {handleSelectedCourse} 
        ></AllCoursesContainer>
      </div>

      <div className='w-3/12 bg-white rounded-lg h-full sticky top-0'>
      <Sidebar 
        selectedCourses={selectedCourses}
        totalPrice = {totalPrice}
        totalCredit = {totalCredit}
        isRemaining = {isRemaining}
        ></Sidebar>
      </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  
};

export default Home;