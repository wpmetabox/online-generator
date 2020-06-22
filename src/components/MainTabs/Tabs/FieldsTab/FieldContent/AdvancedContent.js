import React, { memo, Suspense, lazy } from 'react';
import { getLabel } from '../../../../../utility/functions';

const AdvancedContent = (props) => {
  const getElement = (name) => {
    const advancedData = props.data;
    const elementName = `fields-${props.index}-${name}`;
    let defaultValue = advancedData[name];
    let componentName = name.charAt(0).toUpperCase() + name.slice(1);
    let Element = lazy(() => import(`../../../../Common/Elements/${componentName}`))

    return <Element
      name={elementName}
      label={name}
      register={props.register}
      defaultValue={defaultValue}
      data={advancedData}
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