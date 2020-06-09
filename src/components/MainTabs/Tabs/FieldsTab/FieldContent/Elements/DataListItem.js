import React from 'react';
import SmallInput from './SmallInput';

const DataListItem = ({ ref }) => {
    return (
        <div>
             <SmallInput placeholder="Enter value" defaultValue='1' ref={ref} name='fields-0-datalist-options-0' />
        </div>
    )
} 

export default DataListItem;