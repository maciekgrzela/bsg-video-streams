import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import staticBg from '../../assets/images/static-bg.jpg';

const HomePage = () => {
  return (
    <div className='home-page'>
      <section className='home-page__welcome welcome'>
        <div className='welcome__favorite-media'>
          <img
            className='welcome__favorite-media-image'
            src={staticBg}
            alt='Favorite Movie'
          />
          <div className='welcome__favorite-media-content'>
            <h1 className='welcome__favorite-media-title'>Titanic (cz.1)</h1>
            <p className='welcome__favorite-media-desc'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis ullam ea, cum reiciendis deserunt laudantium
              temporibus eligendi et cumque dolores facilis, recusandae nihil
              architecto eaque ratione id deleniti quam similique?
            </p>
          </div>
          <div className='welcome__favorite-media-play-button play-button'>
            <FiPlay />
          </div>
        </div>
        <div className='welcome__remaining-positions remaining-positions'>
          <ul className='remaining-positions__list'>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
            <li className='remaining-positions__item remaining-item'>
              <img
                src={staticBg}
                className='remaining-item__image'
                alt='Movie Title'
              />
              <span className='remaining-item__title'>Item 1</span>
            </li>
          </ul>
        </div>
        <button className='welcome__go-further'>
          <IoIosArrowDown />
        </button>
      </section>
      <section className='home-page__media-lists media-lists'>
        <div className='media-lists__container media-element'>
          <header className='media-element__header'>
            <h2 className='media-element__title'>
              Filmy z kategorii: Kategoria 1
            </h2>
          </header>
          <ul className='media-element__list'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
              <li key={val} className='media-element__item media-item'>
                <div className='media-item__playback'>
                  <img
                    src={staticBg}
                    alt={'Some Media Item'}
                    className='media-item__image'
                  />
                  <div className='media-item__play play-button'>
                    <FiPlay />
                  </div>
                </div>

                <div className='media-item__content'>
                  <h3 className='media-item__title'>Titanic (cz.1)</h3>
                  <p className='media-item__desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus animi iure reiciendis, nesciunt, cumque suscipit
                    illum, ab quam laboriosam nulla natus perspiciatis!
                    Voluptatum reiciendis, cum corporis nostrum dolores
                    laboriosam dignissimos.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='media-lists__container media-element'>
          <header className='media-element__header'>
            <h2 className='media-element__title'>
              Filmy z kategorii: Kategoria 1
            </h2>
          </header>
          <ul className='media-element__list'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
              <li key={val} className='media-element__item media-item'>
                <div className='media-item__playback'>
                  <img
                    src={staticBg}
                    alt={'Some Media Item'}
                    className='media-item__image'
                  />
                  <div className='media-item__play play-button'>
                    <FiPlay />
                  </div>
                </div>

                <div className='media-item__content'>
                  <h3 className='media-item__title'>Titanic (cz.1)</h3>
                  <p className='media-item__desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus animi iure reiciendis, nesciunt, cumque suscipit
                    illum, ab quam laboriosam nulla natus perspiciatis!
                    Voluptatum reiciendis, cum corporis nostrum dolores
                    laboriosam dignissimos.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='media-lists__container media-element'>
          <header className='media-element__header'>
            <h2 className='media-element__title'>
              Filmy z kategorii: Kategoria 1
            </h2>
          </header>
          <ul className='media-element__list'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
              <li key={val} className='media-element__item media-item'>
                <div className='media-item__playback'>
                  <img
                    src={staticBg}
                    alt={'Some Media Item'}
                    className='media-item__image'
                  />
                  <div className='media-item__play play-button'>
                    <FiPlay />
                  </div>
                </div>

                <div className='media-item__content'>
                  <h3 className='media-item__title'>Titanic (cz.1)</h3>
                  <p className='media-item__desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus animi iure reiciendis, nesciunt, cumque suscipit
                    illum, ab quam laboriosam nulla natus perspiciatis!
                    Voluptatum reiciendis, cum corporis nostrum dolores
                    laboriosam dignissimos.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='media-lists__container media-element'>
          <header className='media-element__header'>
            <h2 className='media-element__title'>
              Filmy z kategorii: Kategoria 1
            </h2>
          </header>
          <ul className='media-element__list'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
              <li key={val} className='media-element__item media-item'>
                <div className='media-item__playback'>
                  <img
                    src={staticBg}
                    alt={'Some Media Item'}
                    className='media-item__image'
                  />
                  <div className='media-item__play play-button'>
                    <FiPlay />
                  </div>
                </div>

                <div className='media-item__content'>
                  <h3 className='media-item__title'>Titanic (cz.1)</h3>
                  <p className='media-item__desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus animi iure reiciendis, nesciunt, cumque suscipit
                    illum, ab quam laboriosam nulla natus perspiciatis!
                    Voluptatum reiciendis, cum corporis nostrum dolores
                    laboriosam dignissimos.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='media-lists__container media-element'>
          <header className='media-element__header'>
            <h2 className='media-element__title'>
              Filmy z kategorii: Kategoria 1
            </h2>
          </header>
          <ul className='media-element__list'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
              <li key={val} className='media-element__item media-item'>
                <div className='media-item__playback'>
                  <img
                    src={staticBg}
                    alt={'Some Media Item'}
                    className='media-item__image'
                  />
                  <div className='media-item__play play-button'>
                    <FiPlay />
                  </div>
                </div>

                <div className='media-item__content'>
                  <h3 className='media-item__title'>Titanic (cz.1)</h3>
                  <p className='media-item__desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus animi iure reiciendis, nesciunt, cumque suscipit
                    illum, ab quam laboriosam nulla natus perspiciatis!
                    Voluptatum reiciendis, cum corporis nostrum dolores
                    laboriosam dignissimos.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
