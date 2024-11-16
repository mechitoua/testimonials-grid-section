import TestimonialCard from './componenets/TestimonialCard';
import { testimonials } from './data';

function App() {
  return (
    <div className='min-h-screen bg-[#ECF2F8] flex items-center justify-center px-6 py-16 md:p-12 lg:px-24'>
      <div className='max-w-[1110px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[30px]'>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`${
                index === 0 ? 'lg:col-span-2' : ''} 
                ${index === 3 ? 'md:col-span-2' : ''}
                ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-1' : ''}
              `}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
