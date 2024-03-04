import React from 'react';

import Interview from './Interview';
import './styles.css';
import ShowOnDesktop from './ShowOnDesktop';

function InterviewExercise() {
  return (
    <main>
      <Interview />
      <ShowOnDesktop>
        <aside>
          <img
            src="/gwen-artist.png"
            alt="Portrait of the artist"
          />
          <h2>About the Artist</h2>
          <p>
            Gwen Altaria is a contemporary artist
            known for her unique blend of
            traditional oil painting techniques and
            pop culture references. Born and raised
            in London, England, Vivi had an early
            love for both the fine arts and the
            fantastical worlds of video games.
          </p>
        </aside>
      </ShowOnDesktop>
    </main>
  );
}

export default InterviewExercise;
