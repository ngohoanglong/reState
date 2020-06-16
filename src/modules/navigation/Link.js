import React, { forwardRef } from 'react'
import usePush from './usePush';
import useReplace from './useReplace';
const forwardRefShim = C => C;
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
const LinkAnchor = forwardRef(
    (
      {
        innerRef, // TODO: deprecate
        navigate,
        onClick,
        ...rest
      },
      forwardedRef
    ) => {
      const { target } = rest;
  
      let props = {
        ...rest,
        onClick: event => {
          try {
            if (onClick) onClick(event);
          } catch (ex) {
            event.preventDefault();
            throw ex;
          }
  
          if (
            !event.defaultPrevented && // onClick prevented default
            event.button === 0 && // ignore everything but left clicks
            (!target || target === "_self") && // let browser handle "target=_blank" etc.
            !isModifiedEvent(event) // ignore clicks with modifier keys
          ) {
            event.preventDefault();
            navigate();
          }
        }
      };
  
      // React 15 compat
      if (forwardRefShim !== forwardRef) {
        props.ref = forwardedRef || innerRef;
      } else {
        props.ref = innerRef;
      }
  
      /* eslint-disable-next-line jsx-a11y/anchor-has-content */
      return <a {...props} />;
    }
  );

const Link = forwardRef(
    (
      {
        component = LinkAnchor,
        replace,
        to,
        innerRef, // TODO: deprecate
        ...rest
      },
      forwardedRef
    ) => {
        const push = usePush()
        const doReplace = useReplace()
        const props = {
          ...rest,
          href:to,
          navigate() {
            const method = replace ? doReplace : push;
            method(to);
          }
        };

        // React 15 compat
        if (forwardRefShim !== forwardRef) {
          props.ref = forwardedRef || innerRef;
        } else {
          props.innerRef = innerRef;
        }
        return React.createElement(component, props);
    }
  );
  export default Link