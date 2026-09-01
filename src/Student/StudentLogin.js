import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './SLogin.css';

export default function StudentLogin() {

  const [showPassword, setShowPassword] = useState(false);

  const [id,setId] = useState('');
  const [password,setPassword] = useState('');
  
  const [idError,setIdError] = useState('');
  const [passwordError,setPasswordError] = useState('');


  // const students=[
  //   {id:'Student@gmail.com',password:'112233'},
  //   {id:'Sneha@gmail.com',password:'114477'}
  // ]

  // const Student = 'Student@gmail.com';
  // const StudentPass = '112233';

  const navigate = useNavigate();

  const validateId = () => {
    setIdError('');
    if (!id) setIdError('Id is required');
  };

  const validatePassword = () => {
    setPasswordError('');
    if (!password) setPasswordError('Password is required');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateId();
    validatePassword();

    const storedPasswords = JSON.parse(localStorage.getItem('studentPasswords')) || {};

    if (id in storedPasswords && password === storedPasswords[id]) {
        navigate(`/StudentDashboard/${id}`);
    } else {
      console.log('Invalid credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };
   
    
  //   const navigateToDash = () =>
  //   {
  //     const student = students.find((student) => student.id === id && student.password === password);
  //   //   if(id===Student && password===StudentPass )
  //     if(student)
  //     {
  //       navigate('/StudentDashboard');
  //     } 
  //     else 
  //     {
  //     console.log('Can not navigate');
  //     }
  //   }

  //   const validateId = () => 
  //   {
  //       if(!id)
  //       {
  //           setIdError('Id is required');
  //       }
  //       // else if(id !==Student )
  //       else if(!students.some((student)=>student.id === id))
  //       {
  //           setIdError('Incorrect Id');
  //       }
  //       else
  //       {
  //           setIdError('');
  //       }
  //   }

  //   const validatePassword = () =>
  //   {
  //       if(!password)
  //       {
  //           setPasswordError('Password is required');

  //       }
  //       // else if(password !== StudentPass)
  //       else if(!students.some((student)=>student.password === password))
  //       {
  //           setPasswordError('Incorrect Password');
  //       }
  //       else
  //       {
  //           setPasswordError(''); 
  //       }
  //   };

  //   const handleSubmit = (e) => 
  //     {
  //       e.preventDefault();

  //       console.log(id,password);
        
    
  //         if ( id !== '' && password !== '' ) {
             
  //           setId('');
  //           setPassword('')
  //         }
  //           else 
  //           {
  //             console.log('Navigating to Student Dashboard');  
  //           }
            
  //       };
        
        return ( 
        <>
        <div>

          {/* Student Login  */}
            
        <div className='container Demo1 card' 
         style={{width: "32rem",
         marginLeft:"500px",
         backgroundColor:"#b4effa",
         color:"#676767", 
         marginTop:'100px',
         boxShadow:"3px 6px 12px rgba(0, 0, 0, 0.4)"}}
         >
            <div className="card-body"> 
               <form className="col g-3 mx-auto " onSubmit={handleSubmit}>
              <div>
                <p className='Heading1' style={{marginLeft:"90px",marginTop:"50px"}}>Student Login</p>
              </div>
             
            <div className="col-md-8 EachDiv1">
            
            <input
             className="form-control"
             id="validationDefault02"
             placeholder="Id"
             type="id"
             autoComplete="new-id"
             value={id}
            onChange={(e) => setId(e.target.value) }
            onBlur={validateId}
            required
           /> {idError && <p style={{color:"red"}}>{idError}</p>}
        
          </div>

          {/* Student Password  */}
          
          <div className="col-md-8 EachDiv1" style={{marginTop:"2px"}}>
              <div className="password-container">
           
            <input
             className="form-control"
             id="validationDefault03"
             placeholder="Password"
             type={showPassword ? "text" : "password"}
             autoComplete="new-password"
             value={password}
             maxLength={8}
             onChange={(e) => setPassword(e.target.value) }
             onBlur={validatePassword}

             required
            /> 

              <span
                className='password-toggle-icon'
                onClick={togglePasswordVisibility}
              >
                 {showPassword ?(
                   <i className='bi bi-eye'></i>
                   ) : (
                     <i className='bi bi-eye-slash'></i>
                   )}
              </span>

            {passwordError && <p style={{color:"red"}}>{passwordError}</p>}
          </div>
          </div>

          
            <div className= "Sub1"  >
            <button className='btn btn-dark'
             type="submit"
              onClick={handleSubmit}
              style={{
                height:"40px",
                 width:"40%",
                 backgroundColor:"#3b3838"
                }}
              >
               Login 
               </button>
          </div>
        </form>
        </div>
        </div>
        </div>
        
        </>  
          
        ) 
        
        }
        
