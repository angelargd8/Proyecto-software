/*import {render, fireEvent} from '@testing-library/react';
import { expect, test} from 'vitest';
import {GoogleLoginButton} from '../componentes/log/GoogleAuthProvider.component';

test('renders Google login button', () => {
    const {getByText} = render(<GoogleLoginButton onClick={() => {}} />);
    expect(getByText('Login with Google Login')).toBeInTheDocument();
});


test('calls onClick when button is clicked', () => {
    const onClick = vi.fn();
    const {getByText} = render(<GoogleLoginButton onClick={onClick} />);
    fireEvent.click(getByText('Login with Google Login'));
    expect(onClick).toHaveBeenCalledTimes(1);
})*/