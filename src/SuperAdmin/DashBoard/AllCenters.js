import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Add.css';
import SuperSidebar from './SuperSidebar';
import { useCenterContext } from './CenterContext';

function AllCenters() {
  const { centers } = useCenterContext();
  const dropdownStyle = {
    width: '300%',
    marginleft: '0 10px', // Adjust the width as per your requirement
    // Center the dropdown horizontally
    // Add any additional styling as needed
  };

  // useEffect(() => {
  //   console.log('Centers updated:', centers());
  // }, [centers]);

  return (
    <div>
      <SuperSidebar />

      <div className="pt-4 pb-4">
        <div className='center-dropdown' style={dropdownStyle}>
          <label htmlFor='centerSelect'></label>
          <select id='centerSelect'>
            <option value=''>All Centers</option>
            {centers.map((center, index) => (
              <option key={index} value={center}>
                {center}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default AllCenters;







// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './Add.css';
// import SuperSidebar from './SuperSidebar';
// import {useCenterContext} from './CenterContext';


// function AllCenters() {
//   const {centers} = useCenterContext();
  

  
//   return(
//     <div>
//      <SuperSidebar />
     
//     <div className="pt-4 pb-4">
//       <div className='center-dropdown'>
//         <label htmlFor='centerSelect'></label>
//         <select id='centerSelect'>
//           <option value=''>All Centers</option>
//           {centers.map((center,index)=> (
//             <option key={index} value={center}>
//               {center}
//             </option>

//           ))}

//         </select>
//         </div>
//       </div>
//     </div>
//   ) 
// }

// export default AllCenters;

