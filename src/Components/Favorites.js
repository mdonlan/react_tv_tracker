import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { get_favorites } from '../API'

export function Favorites() {
    const favorites = useSelector(state => state.user_favorites);
    
    return (
        <div>
            <div>favorites</div>
            {favorites.length > 0 &&
                favorites.map(f => {
                    return (
                        <div>test</div>
                    )
                })
            }

            {favorites.length == 0 &&
                <div>You don't have any favorites, you should add some!</div>
            }
        </div>
    )
}