import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';

export function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSubmit(
    values: { email: string; password: string },
    event: SyntheticEvent
  ) {
    event.preventDefault();
    try {
      await auth.authenticate(values.email, values.password);
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form method="post">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <button onClick={(e) => handleSubmit({ email, password }, e)}>
          Sign in
        </button>
      </form>
    </div>
  );
}
