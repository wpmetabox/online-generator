import React, { lazy, Suspense, memo } from 'react';
import {getLabel, getElementControlName} from '../../../../../utility/functions';

const GeneralContent = (props) => {

  const getElement = (name) => {
    let componentName = getElementControlName(name, props.type);
    let Element = lazy(() => import(`../../../../Common/Elements/${componentName}`))
    return <Element
      name={`fields-${props.index}-${name}`}
      label={name}
      register={props.register}
      defaultValue={props.fieldData[name]}
      data={props.fieldData}
      type={props.type} />
  }

  return (
    <div className="og-item__content">
      {
        Object.keys(props.fieldData).map((keyName, keyIndex) =>
          <Suspense fallback={null} key={getLabel(keyName) + keyIndex}>
            {getElement(keyName, keyIndex)}
          </Suspense>
        )
      }
    </div>
  );
}

export default memo(GeneralContent);