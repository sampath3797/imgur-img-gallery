
import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Thumbnail } from './Thumbnail';

test('test dropdown default values is hot,vial and day',() => {
    render(<Thumbnail />) 
    expect(screen.getByRole("section")).toHaveDisplayValue("Hot");
    expect(screen.getByRole("sort")).toHaveDisplayValue("Viral");
    expect(screen.getByRole("wndow")).toHaveDisplayValue("Day");
    
});

test('after click on Load images button, button should disable', () => {
    const { getByText }  = render(<Thumbnail />) 
    expect(getByText(/LOAD IMAGES/i).closest('button')).toBeDisabled();
})
