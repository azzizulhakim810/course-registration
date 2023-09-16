Questions-1:- Add three features of Projects.

ANS: The project features are given below:
1.Dynamic Course Display:-When anyone click select button then it displayed name , remaining hour and other information on the cart.
2.Credit limit management- It will not allow a course twice if it is it will show a toast .
3.Realtime update and Toast notification


Questions-2: How you managed the state in your assignment project?

Ans:How i managed the state explaind below:-

 firstly, 'State Inititalisation' i inititalised state variable by useState, 

 Then, after container styling I faced data from json-file using useEffect and show information in the card and  placed them in the state.

 Secondly, handleSelectCourse function is called when a user select course 'selectCourse' state array prevents duplicates.if the course is  not already selected, it calculates the new 'totalCost' and update the remaining value like credit and add to the 'selectCourse' array.
  
  thirdly, Rendering Courses-- The component renders a 'Cart' componenet passing item as props. this component likely displays the selected courses.

  additionally, i used toast notification by using 'react-toastify' library for certain events such as to add a duplicare course and exceeding the credit limit etc.
  
Thus, i managed state in this assignment project.