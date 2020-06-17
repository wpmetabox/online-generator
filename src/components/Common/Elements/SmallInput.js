import React from 'react';

const SmallInput = React.forwardRef(({ defaultValue, type, name, keyValue, placeholder }, ref) => {
    return (
        <input placeholder={placeholder} type={type} ref={ref} name={name} key={keyValue} defaultValue={defaultValue} />
    );
})

export default SmallInput;