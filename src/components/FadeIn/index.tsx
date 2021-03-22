import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

const getTransform = (direction: FadeInProps['direction']) => {
  switch(direction) {
    case 'up':
      return ['Y', ''];
    case 'down':
      return ['Y', '-'];
    case 'left':
      return ['X', ''];
    case 'right':
      return ['X', '-'];
    default:
      return [null, null];
  }
}

interface FadeInProps {
  direction?: 'up' | 'down' | 'left' | 'right',
  offset?: CSSProperties['translate'];
  duration?: CSSProperties['transitionDuration'];
  easing?: CSSProperties['transitionTimingFunction'];
  delay?: CSSProperties['transitionDelay'];
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({
  direction='up',
  offset='15vh', 
  duration='1s',
  easing='ease-out',
  delay=`300ms`,
  className='',
  children
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if(!current) return;

    const [axis, sign] = getTransform(direction);
    if(axis===null) return;

    current.style.transform = `translate${axis}(${sign}${offset})`;
    current.style.transition = `opacity ${duration} ${easing} ${delay}, transform ${duration} ${easing} ${delay}`;

    
    const observer = new IntersectionObserver((entries) => {
      for(const entry of entries) {
        if(entry.isIntersecting) {
          setVisible(true);
          console.log(current.style.transition)
          current.style.transform = `none`;
          return;
        }
      }
    });
    observer.observe(current);
  }, []);

  return (
    <div
      className={clsx(styles.fadein, visible && styles.visible, className)}
      ref={ref}
    >
      {children}
    </div>
  )
}

export default FadeIn;