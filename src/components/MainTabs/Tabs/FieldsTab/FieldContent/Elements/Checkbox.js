import React from 'react';

const Checkbox = React.forwardRef(({ defaultValue, name, keyValue }, ref) => {
    return (
        <input type="checkbox" name={name} className="checkbox" ref={ref} key={keyValue} defaultChecked={defaultValue} />
    );
})

export default Checkbox;