import React, { FC } from "react";
interface CardItem {
  id: number;
  name: string;

}

const Card = (props: CardItem) => {

    return (
      <>
        <a href="#card1" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No. {props.id} : {props.name ?? 'untitled'}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Description: here is a sample card.</p>
        </a>
      </>
    )
  }
  
  export default Card
  