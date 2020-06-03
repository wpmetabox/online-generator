import React from 'react';

const Input = React.forwardRef(({ defaultValue, type, name, key }, ref) => {
    console.log('iii',defaultValue)
    return (
        <input className="input_filed" defaultValue={defaultValue} type={type} ref={ref} name={name} key={key} />
    );
})

export default Input;