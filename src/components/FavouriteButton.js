import React, { useContext } from 'react';
import { Button } from "react-native-elements";
import { Context as FavouriteContext } from '../context/FavouriteContext';

const FavouriteButton = ({ movieItem }) => {
  const { state, addFavourite, removeFavourite } = useContext(FavouriteContext);

  const renderButton = (movieItem, favoriteList) => {
    var foundItem = false;
    for (var i = 0; i < favoriteList.length; i++) {
      if (favoriteList[i].id == movieItem.id) {
        foundItem = true;
        break;
      }
    }
    if (favoriteList.length == 0 || foundItem == false) {
      return (
        <Button
          title="Favourite"
          buttonStyle={{
            backgroundColor: "orange",
          }}
          onPress={() => addFavourite(movieItem)}
        />
      );
    } else {
      return (
        <Button
          title="Remove from favourite"
          buttonStyle={{
            backgroundColor: "orange",
          }}
          onPress={() => removeFavourite(movieItem.id)}
        />
      );
    }
  };

  return renderButton(movieItem, state);
};

export default FavouriteButton;