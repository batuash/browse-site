// @flow
import React from 'react';

export type ArchivesProps = {
  isShow: boolean
};

const Archives = ({isShow = true}: ArchivesProps) => {
  if (!isShow) {
    return null;
  }

  const archives = [
    {
      name: 'Game Of Thrones',
      src: require('../static/images/game_of_thrones.jpg')
    },
    {
      name: 'Breaking Bad',
      src: require('../static/images/breaking_bad.jpg')
    },
    {
      name: 'Black Mirror',
      src: require('../static/images/black_mirror.jpg')
    },
    {
      name: 'Star Trek',
      src: require('../static/images/star_trek.jpg')
    }
  ];

  return (
    <div className="archivesWrapper">
      <div className="listWrapper">
        <ul>
          {archives.map(({name, src}, index) => (
            <li key={`${name}_${index}`}>
              <img className="image" alt={name} src={src} />
              <span className="name">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Archives;
