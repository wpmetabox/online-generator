import React from 'react';

const Input = React.forwardRef(({ defaultValue, type, name, keyValue }, ref) => {
    return (
        <>
            <input className="input_filed" defaultValue={defaultValue} type={type} ref={ref} name={name} key={keyValue} />
            {
                name.includes('step') && <span class="og-form__desc">Enter <code>any</code> to use float values</span>
            }
        </>
    );
})

export default Input;