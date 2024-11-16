import { TestimonialType } from '@/types';
import TestimonialCard from '@components/TestimonialCard';
import React from 'react';

interface TestimonialsGridProps {
  testimonials: TestimonialType[];
}

const getGridItemClassName = (index: number): string => {
  const baseClasses = '';

  const columnSpanClasses = {
    0: 'medium-lg:col-span-2 lg:col-span-2',
    2: 'medium-lg:col-span-2 lg:col-span-2 custom:col-span-1',
    3: 'medium-lg:col-span-3 lg:col-span-3 custom:col-span-2',
    4: 'md:col-span-2 medium-lg:col-span-1 lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-1',
  };

  return `${baseClasses} ${
    columnSpanClasses[index as keyof typeof columnSpanClasses] || ''
  }`.trim();
};

const TestimonialsGrid: React.FC<TestimonialsGridProps> = ({
  testimonials,
}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 medium-lg:grid-cols-3 lg:grid-cols-4 gap-[24px] lg:gap-[30px]'>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={getGridItemClassName(index)}>
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </div>
  );
};

export default TestimonialsGrid;
