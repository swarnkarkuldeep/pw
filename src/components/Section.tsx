import React, { forwardRef } from 'react';
import { SectionProps } from '../types';

const Section = forwardRef<HTMLElement, SectionProps>(({ id, className, children, ...props }, ref) => {
  return (
    <section 
      ref={ref}
      id={id} 
      className={`section ${className || ''}`}
      {...props}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;