import React from 'react';
import FormContact from '../components/FormContact';

export default function Contact() {
  return (
    <div className="py-20 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me ✉️</h2>
      <p class="text-lg text-center mb-12">
        I'd love to hear your thoughts! Feel free to contact me via the form below or via my email{' '}
        <a href="mailto:nabilferdana03@gmail.com" class="font-bold underline underline-offset-1">
          nabilferdana03@gmail.com
        </a>
      </p>
      <div className="max-w-xl mx-auto w-full">
        <FormContact />
      </div>
    </div>
  );
}
