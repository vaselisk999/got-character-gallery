import React from "react";
import Character from "./Character";
import data from './../data/characterData.json';

export default function CharacterGallery() {
    const characters = data.map((val, key) => <Character key={val._id} {...val} />)
    return (
        <div data-test="component-char-gallery">
            { characters }
        </div>
    )
}