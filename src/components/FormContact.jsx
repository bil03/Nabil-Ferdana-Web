import React from 'react';
import { motion } from 'framer-motion';
import DescriptionAlerts from './Alerts'; // Pastikan path-nya sesuai

function FormContact() {
  //   const [showAlert, setShowAlert] = useState(false);

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.target);

  //     formData.append('_captcha', 'false');

  //     try {
  //       const res = await fetch('https://formsubmit.co/nabilferdana03@gmail.com', {
  //         method: 'POST',
  //         body: formData,
  //       });

  //       if (res.ok) {
  //         setShowAlert(true);
  //         e.target.reset();
  //         setTimeout(() => setShowAlert(false), 5000); // auto hilang 5 detik
  //       } else {
  //         alert('Failed to send message.');
  //       }
  //     } catch (err) {
  //       console.error(err);
  //       alert('Something went wrong.');
  //     }
  //   };

  return (
    <>
      {/* {showAlert && <DescriptionAlerts title="Success!" message="🎉 Your message has been sent successfully. Thank you for reaching out! We’ll get back to you soon." />} */}

      <motion.div initial={{ opacity: 0, y: 100, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1, ease: [0.17, 0.67, 0.83, 0.67] }}>
        <form action="https://formsubmit.co/nabilferdana03@gmail.com" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Your Name
            </label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500  bg-transparent" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Your Email
            </label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500  bg-transparent" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message"
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500  bg-transparent"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-3 bg-white text-gray-800 text-lg font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </>
  );
}

export default FormContact;
