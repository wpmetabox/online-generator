import React, { useState } from 'react';
import OptionItem from './OptionItem';
import { LIST_ADD_SELECT, LIST_NO_HEADING} from "../../../../../../constants/constants"

const Options = (props) => {
    console.log('props: ', props);
    const [options, setOptions] = useState(props.data.options);
    const checkHasSelect = () => {
        return LIST_ADD_SELECT.includes(props.data.type)
      }
      const checkHasHeading = () => {
          return !LIST_NO_HEADING.includes(props.data.type)
      }
    return (
        <div className="builder-options" >
            <h3>Options</h3>
            <table >
                <tbody>
                    {
                        options?.map((item, index) => (
                            <OptionItem data={item} index={index} register={props.register}  name={`fields-${props.index}`} hasSelect={checkHasSelect()} noHeading={checkHasHeading()} type={props.data.type} />
                        ))
                    }
                </tbody>
            </table>
            <button type="button" className="og-button--small" onClick={() => setOptions(options.concat({ key: '', label: '', selected: false }))} >+ Option</button>
            <input type='hidden' name={`fields-${props.index}-options`} value={options.length} />
        </div>
    );
}

export default Options;