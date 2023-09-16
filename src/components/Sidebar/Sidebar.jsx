import PropTypes from 'prop-types';

const Sidebar = ({selectedCourses, totalCredit, totalPrice, isRemaining}) => {
  
  // console.log(selectedCourses);
  return (
    <div className='relative p-6'>
      
      <h1 className='text-blue-600 font-bold text-lg py-2'>Credit Hour Ramaining {isRemaining} hr</h1>
      <hr />
      <h1 className='text-black font-bold text-lg py-3'>Course Name</h1>
      <div className=' text-gray-500 text-base pb-4'>
        {
        selectedCourses.map((addToSidebar, idx) => 
        <li className='list-decimal' key={idx}>{addToSidebar.name}</li>
        )
        } 
      </div>

      <hr />
        <p className='text-gray-800 text-base py-2'>Total Credit Hour : {totalCredit} </p>
      <hr />
        <p className='text-gray-800 text-base py-2 font-semibold'>Total Price : {totalPrice.toFixed(2)} USD</p>

   
    </div>
    
  );
};

Sidebar.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  totalPrice: PropTypes.number,
  totalCredit: PropTypes.number,
  isRemaining: PropTypes.number,

};

export default Sidebar;