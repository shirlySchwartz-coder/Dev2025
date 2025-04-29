import { error } from 'console';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

type userInputs = {
  email: string;
  password: string;
};

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const fieldNeed = {
    required: { value: true, message: 'This filed is required' },
    minLength: {
      value: 5,
      message: `This filed must be ${5} characters or more`,
    },
    maxLength: {
      value: 25,
      message: `This filed must be ${25} characters or less`,
    },
  };
  const LOGIN_URL = 'http://localhost:8080/api/v1/login/loginUser';

  const onError = (error: any) => {
    console.log(error);
  };
  const onSubmit: SubmitHandler<userInputs> = async (data) => {
    console.log(data);
    console.log(errors);
    const response = await axios.post('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className=' rounded-5'>
      <div className='text-center'>
        <h3>Login</h3>
      </div>
      <div className='w-100 p-4 d-flex justify-content-center pb-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-25'>
          <input
            {...register('email', fieldNeed)}
            type='email'
            placeholder='Email Address'
            className='form-control'
          />
          <br />
          {errors.email && (
            <span className='text-danger'>{errors.email?.message}</span>
          )}
          <input
            {...register('password', fieldNeed)}
            type='password'
            placeholder='password'
            className='form-control'
          />
          <br />
          {errors.password && (
            <span className='text-danger'>{errors.password?.message}</span>
          )}
          <br />
          <input
            type='submit'
            className='btn btn-primary btn-floating mx-1 text-bg-info'
          />
        </form>
      </div>
    </div>
  );
}
