import React, { useState } from 'react';
import RowContainer from './Elements/RowContainer';
import Input from './Elements/Input';

const AdvancedContent = (props) => {
  const [attributes, setAttributes] = useState([]);

  return (
    <div className="advanced_content">
      <RowContainer label="Before" >
        <Input name={`fields_${props.index}_before`} ref={props.register} type="text" />
      </RowContainer>
      <RowContainer label="After" >
        <Input name={`fields_${props.index}_after`} ref={props.register} type="text" />
      </RowContainer>
      <RowContainer label="Custom CSS class" >
        <Input name={`fields_${props.index}_class`} ref={props.register} type="text" />
      </RowContainer>
      <div className="custom_attributes">
        <h3><a href="https://docs.metabox.io/extensions/meta-box-builder/#custom-attributes" target="_blank">Custom attributes</a></h3>
        <table >
          <tbody>
            {
              attributes.map((item, index) => (
                <tr key={index}>
                  <td width="45%">
                    <input className="input_value" placeholder="Enter value" />
                  </td>
                  <td width="45%">
                    <input className="input_label" placeholder="Enter label" />
                  </td>
                  <td width="10%">
                    <button type="button" class="og-button--small">
                      <img src="./trash.png" />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <button type="button" class="og-button--small" onClick={() => setAttributes(attributes.concat(attributes.length))} >+ Attribute</button>
      </div>
    </div>
  );
}

export default AdvancedContent;