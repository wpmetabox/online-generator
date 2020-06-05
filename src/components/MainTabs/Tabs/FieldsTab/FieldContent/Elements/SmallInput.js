import React from 'react';

const SmallInput = React.forwardRef(({ type, name, keyValue, placeholder }, ref) => {
    return (
        <input placeholder={placeholder} type={type} ref={ref} name={name} key={keyValue} />
    );
})

export default SmallInput;