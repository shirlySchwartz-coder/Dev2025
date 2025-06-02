import { useForm}  from 'react-hook-form';
import { UserReg } from '../models/UserReg';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { toast, Bounce } from 'react-toastify';

type RegisterForm = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({});
  
  const password= useRef({});
  password.current = watch("password", "");

  const fieldNeed = {
    required: true,
    minLength: 5,
    maxLength: 15,
  };

  const ErrRequired = 'This filed is required';
  const ErrMin = `This filed must contain more than ${fieldNeed.minLength} characters`;
  const ErrMax = `This filed cant contain more then ${fieldNeed.maxLength} characters`;
  const ErrEmail = 'This filed must contain a valid email';
  const ErrPhone = 'This filed must contain a valid phone number';
  const ErrConfirm = 'The passwords do not match';

  const navigate = useNavigate();

  const handleError = (errors: any) => {
    console.log(errors);
  };

  const onSend = (data: RegisterForm) => {
    const userReg: UserReg = {
      id: 0,
      userFirstName: data.firstName,
      userLastName: data.lastName,
      userPhone: data.phone,
      userEmail: data.email,
      userPassword: data.password,
      role: data.role,
     
    };
    console.log(userReg);
    fetch('http://localhost:8080/api/v1/login/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userReg),
    })
      .then((response) => {
        if (response.ok) {
          toast.success('You are register!', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });

          navigate('/login');
        } else {
          throw new Error('Registration failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
  }
  return (
    <div className='register'>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit(onSend, handleError)}
      >
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            {...register('firstName', { ...fieldNeed, required: true })}
          />
          {errors.firstName && (
            <p>{errors.firstName.type === 'required' ? ErrRequired : ErrMin}</p>
          )}
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            {...register('lastName', { ...fieldNeed, required: true })}
          />
          {errors.lastName && (
            <p>{errors.lastName.type === 'required' ? ErrRequired : ErrMin}</p>
          )}
        </div>
        <div>
          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            id='phone'
            {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })}
          />
          {errors.phone && <p>{ErrPhone}</p>}
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
          {errors.email && <p>{ErrEmail}</p>}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            {...register('password', { ...fieldNeed, required: true })}
          />
          {errors.password && (
            <p>{errors.password.type === 'required' ? ErrRequired : ErrMin}</p>
          )}
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            {...register('confirmPassword', { ...fieldNeed, required: true})} // Check if the password matches
          />
          {errors.confirmPassword && (
            <p>
              {errors.confirmPassword.type === 'required'
                ? ErrRequired
                : ErrMin}
            </p>
          )}
        </div>
        <div>
          <label htmlFor='role'>Role</label>
          <select id='role' {...register('role', { required: true })}>
            <option value=''>Select Role</option>
            <option value='student'>Student</option>
            <option value='teacher'>Teacher</option>
          </select>
          {errors.role && <p>{ErrRequired}</p>}
        </div>
        <button type='submit'>Register</button>
      </form>
      <div className='register__login'>
        <p>
          Already have an account? <a href='/login'>Login</a>
        </p>
      </div>
    </div>
  );
}
