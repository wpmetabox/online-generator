import React from 'react';

const Input = React.forwardRef(({ defaultValue, type, name }, ref) => {
    return (
        <>
            <input className="input_filed" defaultValue={defaultValue} type={type} ref={ref} name={name} key={name} />
            {
                // notice for step input
                name.includes('step') && <span className="og-form__desc">Enter <code>any</code> to use float values</span>
            }
        </>
    );
})

export default Input;