import React from 'react';
import { LIST_FIELD_TYPE } from "../../../../../../constants/constants"

const RadioCheckbox = React.forwardRef(({ defaultValue, type, name, keyValue }, ref) => {
    const listFieldType = LIST_FIELD_TYPE[type];
    return (
        <div>
            {
                listFieldType.map( item => {
                    return (
                            <>
                                <input type="radio" name={name} key={keyValue} ref={ref} value={item.type} defaultChecked={item.type === defaultValue && "checked" } />
                                <label for={name}>{item.value}</label><br></br>
                            </>
                        )
                    }
                )
            }
        </div>
    )
})

export default RadioCheckbox;