'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hello, I&apos;m  <span className="text-blue-600 dark:text-blue-400">Danya Abdella</span>
            </h1>
            <h2 className="text-2xl md:text-3xl  mb-8">
              Junior Developer
            </h2>
            <p className="text-lg  mb-8">
              I create beautiful, functional, and user-centered digital experiences 
              that bring ideas to life. Let&apos;s build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link href="#projects" className="btn btn-secondary">
                View My Work
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/image.jpeg"
                alt="Your Name"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}