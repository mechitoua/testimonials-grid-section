import TestimonialCard from './componenets/TestimonialCard';
import { testimonials } from './data';

export default function App() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-light-grayish-blue px-6 py-20 h-screen'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4'>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
