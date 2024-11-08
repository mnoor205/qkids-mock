import Navigation from '@/components/navbar';
import Image from 'next/image';
import { fakeTestimonials } from '@/components/testimonials';
import Marquee from '@/components/ui/marquee';
import SparklesText from '@/components/ui/sparkles-text';
import CodingClassFeatures from '@/components/ui/codingclassfeatures';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/5 md:py-24">

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 space-y-12 md:space-y-0 md:space-x-12">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            HELPING YOUR KID BECOME A FUTURE{" "}
            <SparklesText className='text-primary mt-1' text='PROGRAMMER'/>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Join our fun and interactive program where your child can unlock the power of coding, robotics, and creativity.
          </p>
          <button className="bg-gradient-to-r from-primary to-purple-400 text-white py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-all duration-200">
            Get Started
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full h-64 md:h-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/007/400/886/non_2x/the-child-writes-the-program-code-children-robotics-programming-illustration-isolated-on-a-white-background-vector.jpg"
              alt="Child learning programming with robotics"
              layout="responsive"
              width={800}
              height={533}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className=''>
        <CodingClassFeatures/>
      </section>

      {/* Testimonials Marquee */}
      <section className="w-full h-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/5 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">What Parents Are Saying</h2>

          <Marquee className="bg-white rounded-lg shadow-lg p-4" reverse={true} pauseOnHover={true} repeat={5}>
            {fakeTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-md w-72"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full object-cover"
                  width={70}
                  height={70}
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.description}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

    </div>
  );
}