import React, { useState } from 'react';
import DataItem from './DataItem';

const Datalist = ({ type, data, index, register }) => {
    const [valueLength, setValueLength] = useState(data.datalist.id.length);
    const [dataItem, setDataItem] = useState(data.datalist.items)
    const idDataList = data.datalist.id;
    const showDataItem = valueLength > 0;
    const addDataItem = () => {
        setDataItem(dataItem.concat(''))
    }
    return (
        <div className="builder-options" >
            <h3>Datalist</h3>
            <div className="row_container">
                <div className="left">
                    <label htmlFor="text_1_datalist" className="label">Datalist ID</label>
                </div>
                <div className="right">
                    <input type="text" defaultValue={idDataList} className="input_filed" name={`fields-${index}-datalist-id`} placeholder="Set ID to begin creating datalist" ref={register} onChange={(value) => setValueLength(value.target.value.length) }/>
                </div>
            </div>
            {showDataItem && 
            <table>
                <tr>
                    <th id="title-datalist" >Datalist Items</th>
                </tr>
                <tbody>
                {dataItem?.map( value => <DataItem ref={register} index={index} dataItem={value} /> )}
                </tbody>
            </table>}
            {showDataItem && <button type="button" className="og-button--small" onClick={addDataItem}>+ Add Item</button>}
            <input type='hidden' name={`fields-${index}-datalist`} value={dataItem.length} />
        </div>
    )
}

export default Datalist;