import React from 'react';

const Checkbox = React.forwardRef(({ name, key }, ref) => {
    return (
        <input type="checkbox" name={name} className="checkbox" ref={ref} key={key} />
    );
})

export default Checkbox;