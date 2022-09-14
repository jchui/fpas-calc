import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

import UoAData from '../data/2020uoa.json';
import UniData from '../data/2020medschools.json';

const IndexPage = () => {

  const [epmScore, setEpmScore] = useState(41);
  const [sjtScore, setSjtScore] = useState(0);

  const handleEpmChange = (e) => {
    setEpmScore(e.target.value);
  }
  const handleSjtChange = (e) => {
    setSjtScore(e.target.value);
  }

  return (
    <Layout>
      <h1>Hi</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>{epmScore}</p>
      <select onChange={(e) => handleEpmChange(e)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p>{sjtScore}</p>
      <select onChange={(e) => handleSjtChange(e)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>


    </Layout>
  );
};

export default IndexPage;
