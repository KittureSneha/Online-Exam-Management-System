import React,{useState} from 'react'
import { Navigate,useNavigate } from 'react-router-dom';
import './Login.css';

export default function SuperLogin() {

   const [showPassword, setShowPassword] = useState(false);

   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');

    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const navigatetoDash = () =>
    {
      if(email === SuperEmail && password === SuperPass)
      {
      navigate('/AllCenters')
      }
      else if(email === AdminEmail && password === AdminPass)
      {
        navigate('/AdminDash')
      }
      else{
        console.log("Cannot Navigate");
      }
    }

    const handleLogin = () =>
    {
      navigate('/StudentLogin');
    }
    
    const SuperEmail = 'SuperAdmin@gmail.com';
    const SuperPass = '123123';

    const AdminEmail = 'Admin@gmail.com';
    const AdminPass = '123456';

    

    const validateEmail = () => {
        if(!email)
        {
            setEmailError('Email is required');
        }
        else if(email !== SuperEmail && email !== AdminEmail)
        {
            setEmailError('Incorrect Email Id');
        }
        else
        {
            setEmailError('');
        }
    }

    
    const validatePassword = () =>{
        if(!password)
        {
            setPasswordError('Password is required');

        }
        else if(password !== SuperPass && password !== AdminPass)
        {
            setPasswordError('Incorrect Password');
        }
        else
        {
            setPasswordError('');
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email ,password);
    
          if ( email !== '' && password !== '' ) {
             
            setEmail('');
            setPassword('');
          }
          
          
    
        };
        return (  
            <>
              <body >
              <div>
        
            <div className='container Demo card' style={{width: "32rem",backgroundColor:"#d6b8f2",marginLeft:"500px",boxShadow:"3px 6px 12px rgba(180, 186, 186, 0.7)"}}>
            <div class="card-body" > 
               <form className="col g-3 mx-auto " role='form' onSubmit={handleSubmit}>
              <div>
                <p className='Heading' style={{marginLeft:"160px",marginTop:"50px"}}>Login</p>
              </div>
             
          <div className="col-md-8 EachDiv">
            <label for="validationDefault02" className="form-label">Email</label>
            <input
             className="form-control"
             id="validationDefault02"
             placeholder="Email"
             type="email"
             autoComplete="new-email"
             value={email}
            onChange={(e) => setEmail(e.target.value) }
            onBlur={validateEmail}
            required
           /> {emailError && <p style={{color:"red"}}>{emailError}</p>}
        
          </div>
          
          <div className="col-md-8 EachDiv">
            <div className="password-container">
              
            <label for="validationDefault03" className="form-label">
             Password
             </label>

             <div className="password-input-container">

            <input
             className="form-control"
             id="validationDefault03"
             placeholder="Password"
             type={showPassword ? 'text' : 'password'}
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
            </div>
            {passwordError && <p style={{color:"red"}}>{passwordError}</p>}
            </div>
          </div>
            <div className="col-12 Sub" >
            <button className='btn btn-dark' 
            onClick={navigatetoDash}
            style={{backgroundColor:"black",
            height: "40px",
            width: "20%"}} 
            type="submit">
              Login 
              </button>
          </div>
        </form>
        </div>
        </div>
        <div className="col-12 Sub" >
            <button className='btn btn-dark' 
            onClick={handleLogin}
            style={{
              backgroundColor:"black",
              height: "40px",
              width: "15%",
              marginLeft:"460px",
              justifyContent:"center",
              marginTop:"-30px"}} 
              type="submit">

              Login as Student

              </button>
          </div>
        </div> 
        </body>  
          
              
            </>
          )
        }
        

