import React from 'react';

const HomePage = () => {
  return (
    <div className='home-page'>
      <section className='home-page__welcome'>
        <div className='home-page__favorite-media'></div>
        <div className='home-page__remaining-positions'></div>
        <button className='home-page__go-to-bottom'>W dół</button>
      </section>
      <section className='home-page__media-lists'>
        <div className='home-page__media-list-container'>
          <header>
            <h2>Media List Title</h2>
          </header>
          {[1, 2, 3, 4].map((val) => (
            <ul key={val} className='home-page__media-list'>
              <li className='home-page__media-item'></li>
            </ul>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
