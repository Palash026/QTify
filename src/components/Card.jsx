import { Chip } from "@mui/material";
import React from "react";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title } = data;
        return (
          <Tooltip title={`${data.songs.length} Songs`} placement="top" >
            <div className="box">
              <div className="card">
                <img src={image} alt="album" />
                <div className="banner">
                  <Chip className="chip" label={`${follows} follows`} />
                </div>
              </div>
              <div className="titleWrapper">{title}</div>
            </div>
          </Tooltip>
        );
      }
      case "songs": {
        const { image, likes, title } = data;
        return (
          <div className="box">
            <div className="card">
              <img src={image} alt="song" />
              <div className="banner">
                <Chip className="chip" label={`${likes} Likes`} />
              </div>
            </div>
            <div className="titleWrapper">{title}</div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;
