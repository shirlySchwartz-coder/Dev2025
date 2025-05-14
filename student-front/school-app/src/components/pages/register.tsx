import { useForm } from 'react-hook-form';
import { UserReg } from '../models/UserReg';
import { useNavigate } from 'react-router-dom';

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

export default function register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({});

  const fieldNeed = {
    required: true,
    minLength: 5,
    maxLength: 15,
  };

  const ErrRequired = 'This filed is required';
  const ErrMin = `This filed must contain more than ${fieldNeed.minLength}characters`;
  const ErrMax = `This filed cant contain more then ${fieldNeed.maxLength}characters`;
  const ErrEmail = 'This filed must contain a valid email';
  const ErrPhone = 'This filed must contain a valid phone number';

  const navigate = useNavigate();
  return (
    <div className='register'>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit((data) => {
          const user = new UserReg(
            data.id,
            data.firstName,
            data.lastName,
            data.email,
            data.password,
            data.role
          );
          console.log(user);
          navigate('/login');
        })}
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
            {...register('confirmPassword', { ...fieldNeed, required: true })}
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
