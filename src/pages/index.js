import React from 'react';
import { Layout, SEO } from 'components/common';
import { Contact, Intro, MeDetail, Skills } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <MeDetail />
    <Contact />
  </Layout>
);
