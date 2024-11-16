import { testimonials } from '@/data';
import Layout from '@components/Layout';
import TestimonialsGrid from '@components/TestimonialsGrid';

function App() {
  return (
    <Layout>
      <TestimonialsGrid testimonials={testimonials} />
    </Layout>
  );
}

export default App;
