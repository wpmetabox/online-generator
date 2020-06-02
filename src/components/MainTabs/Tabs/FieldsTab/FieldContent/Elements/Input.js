import React from 'react';

const Input = React.forwardRef(({ defaultValue, type, name }, ref) => {
    console.log('kkk', ref)
    return (
        <input className="input_filed" defaultValue={defaultValue} type={type} ref={ref} name={name} />
    );
})

export default Input;