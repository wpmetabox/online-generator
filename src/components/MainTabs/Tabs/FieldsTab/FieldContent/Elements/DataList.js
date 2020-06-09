import React, { useState } from 'react';
import DataListItem from './DataListItem';

const DataList = ({ type, data, index, register }) => {
    console.log('props: ', data);
    const [valueLength, setValueLength] = useState(0);
    const [dataList, setDataList] = useState(data.datalist.items)
    console.log('dataList: ', dataList);
    const showDataItem = valueLength > 0;

    return (
        <div className="builder-options" >
            <h3>Datalist</h3>
            <div className="row_container">
                <div className="left">
                    <label for="text_1_datalist" className="label">Datalist ID</label>
                </div>
                <div className="right">
                    <input type="text" defaultValue="" className="input_filed" name placeholder="Set ID to begin creating datalist" ref={register} onChange={(value) => setValueLength(value.target.value.length) }/>
                </div>
            </div>
            {showDataItem && 
            <table>
                <tr>
                    <th id="title-datalist" >Datalist Items</th>
                </tr>
                <tbody>
                    {
                        dataList?.map( item => {
                            return <DataListItem ref={register} />
                        })
                    }
                </tbody>
            </table>}
            {showDataItem && <button type="button" className="og-button--small" onClick={() => setDataList(dataList.concat({item: ''}))}>+ Add Item</button>}
            <input type='hidden' name={`fields-${index}-options`} value={dataList.length} />
        </div>
    )
}

export default DataList;