import React, { useState, useRef } from "react";
import {
  CarouselActions,
  CarouselButton,
  CarouselButtons,
  CarouselContent,
  CarouselDots,
  CarouselDot,
  CarouselImage,
  CarouselItem,
  Wrapper,
} from "./style";
import data from "../../database";

const Carousel = () => {
  const [active, setActive] = useState(1);
  const Content = useRef();
  const Item = useRef();

  const changeActiveButtons = (active, action) => {
    if (action === "next") {
      active === 6
        ? Content.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        : Content.current.scrollBy({
            top: 0,
            left: Item.current.offsetWidth,
            behavior: "smooth",
          });
      return active === data.length ? 1 : active + 1;
    } else {
      active === 1
        ? Content.current.scrollTo({
            top: 0,
            left: Item.current.offsetWidth * data.length,
            behavior: "smooth",
          })
        : Content.current.scrollBy({
            top: 0,
            left: -Item.current.offsetWidth,
            behavior: "smooth",
          });
      return active === 1 ? data.length : active - 1;
    }
  };

  const changeActiveDots = (id) => {
    setActive(id);
    console.log(Item.current.offsetWidth * id);
    Content.current.scrollTo({
      top: 0,
      left: Item.current.offsetWidth * (id - 1),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Wrapper>
        <CarouselContent ref={Content}>
          {data.map((item) => {
            return (
              <CarouselItem
                ref={active !== item.id ? Item : null}
                key={item.id}
                isActive={active === item.id ? true : false}
              >
                <CarouselImage src={item.src} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselActions>
          <CarouselDots>
            {data.map((item) => {
              return (
                <CarouselDot
                  onClick={() => changeActiveDots(item.id)}
                  key={item.id}
                  isActive={active === item.id ? true : false}
                ></CarouselDot>
              );
            })}
          </CarouselDots>
          <CarouselButtons>
            <CarouselButton
              onClick={() => {
                setActive(changeActiveButtons(active, "prev"));
              }}
            >
              Prev
            </CarouselButton>
            <CarouselButton
              onClick={() => {
                setActive(changeActiveButtons(active, "next"));
              }}
            >
              Next
            </CarouselButton>
          </CarouselButtons>
        </CarouselActions>
      </Wrapper>
    </div>
  );
};

export default Carousel;
