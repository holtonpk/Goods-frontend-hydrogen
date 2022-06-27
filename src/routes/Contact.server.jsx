import React from 'react';
import Layout from '../components/Layout.server';
import ContactForm from '../components/ContactForm.client';
const Contact = () => {
  return (
    <Layout>
      <>
        <div className="relative w-full pt-0 mx-auto bg-back-1 md:px-10 h-fit">
          <h1 className="mx-auto text-2xl font-bold text-center text-c2 md:text-5xl font-f1 w-fit ">
            How can we help you?
          </h1>
          <h1 className="px-4 mx-auto mt-6 text-sm text-center text-c2 w-fit md:text-xl font-f1 md:px-0 ">
            Fill out the form and the team will get back to you within 24 hours
          </h1>
          <div className="slide-in-bottom">
            <ContactForm />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Contact;
