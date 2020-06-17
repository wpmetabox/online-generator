import React, { lazy, Suspense, memo } from 'react';
import { getLabel } from '../../../../../utility/functions';

const GeneralContent = (props) => {

  const getElement = (name) => {
    const fieldData = props.fieldData;
    const elementName = `fields-${props.index}-${name}`
    let defaultValue = fieldData[name];
    let componentName = name.charAt(0).toUpperCase() + name.slice(1);
    let Element = lazy(() => import(`../../../../Common/Elements/${componentName}`))
    return <Element
      name={elementName}
      label={name}
      register={props.register}
      defaultValue={defaultValue}
      data={props.fieldData}
      type={props.type} />
  }

  return (
    <div className="field_content">
      {
        Object.keys(props.fieldData).map((keyName, keyIndex) =>
          <Suspense fallback={null} key={getLabel(keyName) + keyIndex}>
            {
              getElement(keyName, keyIndex)
            }
          </Suspense>
        )
      }
    </div>
  );
}

export default memo(GeneralContent);