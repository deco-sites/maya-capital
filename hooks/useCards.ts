import { useState } from "preact/hooks";
import { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface CardListProps {
  cards: Card[];
}

export interface Card {
  image?: LiveImage;
  label?: string;
  data?: string;
  link?: Link;
}

export interface Link {
  url?: string;
  label?: string;
  icon?: LiveImage;
}

export function useCards(initialCards: Card[], initialMaxVisibleCards: number) {
  const [activeCard, setActiveCard] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>(
    initialCards?.map(() => initialMaxVisibleCards) || [],
  );

  const handleDiscoverMore = () => {
    setVisibleCards((prevVisibleCards) => {
      const newVisibleCards = [...prevVisibleCards];
      newVisibleCards[activeCard] += initialMaxVisibleCards;
      return newVisibleCards;
    });
  };

  return {
    activeCard,
    setActiveCard,
    visibleCards,
    handleDiscoverMore,
  };
}
