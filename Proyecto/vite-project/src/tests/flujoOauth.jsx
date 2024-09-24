/*import {render, fireEvent} from '@testing-library/react';
import {expect, test, vi} from 'vitest';
import GoogleLoginButton from './LogTest';

global.google  ={
    acounts: {
        id: {
            initialize: vi.fn(),
            prompt: vi.fn(),
        },
    },
};


test('initialize google oauth', () =>{
    const handleClick = () =>{
        google.accounts.id.prompt();
    };
    render(<GoogleLoginButton onClick={handleClick}/>);
    expect(google.accounts.id.initialize).toHaveBeenCalled();
})*/