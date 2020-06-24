import React, { memo, Suspense, lazy } from 'react';
import {getLabel, getElementControlName} from '../../../../../utility/functions';

const AdvancedContent = (props) => {
  const getElement = (name) => {
    let componentName = getElementControlName(name);
    let Element = lazy(() => import(`../../../../Common/Elements/${componentName}`))

    return <Element
      name={`fields-${props.index}-${name}`}
      label={name}
      register={props.register}
      defaultValue={props.data[name]}
      data={props.data}
      type={props.type}
      index={props.index}
    />
  }

  return (
    <div className="og-item__content">
      {
        Object.keys(props.data).map((keyName, keyIndex) =>
          <Suspense fallback={null} key={getLabel(keyName) + keyIndex}>
            {getElement(keyName, keyIndex)}
          </Suspense>)
      }
    </div>
  );
}

export default memo(AdvancedContent);