import React from 'react';

const Checkbox = React.forwardRef(({ name, keyValue }, ref) => {
    return (
        <input type="checkbox" name={name} className="checkbox" ref={ref} key={keyValue} />
    );
})

export default Checkbox;