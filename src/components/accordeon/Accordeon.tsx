"use client";
import React, { useCallback, useContext, useState } from "react";
import style from "./style.module.css";

interface MenuContextProps {
  activeGroup: string | undefined;
  switchGroup: (title: string) => void;
}

const MenuContext = React.createContext<MenuContextProps | undefined>(
  undefined
);

interface MenuAccordeonProps {
  children: React.ReactNode;
}

const MenuAccordeon: React.FC<MenuAccordeonProps> = ({ children }) => {
  const [activeGroup, setActiveGroup] = useState<string | undefined>();
  const switchGroup = useCallback((title: string) => {
    setActiveGroup((activeTitle) => {
      return activeTitle === title ? undefined : title;
    });
  }, []);

  return (
    <MenuContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </MenuContext.Provider>
  );
};

interface MenuGroupProps {
  title: string;
  children: React.ReactNode;
}

const MenuGroup: React.FC<MenuGroupProps> = ({ children, title }) => {
  const contextValue = useContext(MenuContext)!;
  const activeGroup = contextValue.activeGroup;
  const switchGroup = contextValue.switchGroup;

  return (
    <div className={style.form__box}>
      <h4 className={style.form__title} onClick={() => switchGroup(title)}>
        {title}
      </h4>

      {activeGroup === title && (
        <ul style={{ overflow: "hidden" }} className={style.form__list}>
          {children}
        </ul>
      )}
    </div>
  );
};

interface MenuItemProps {
  title: string;
  cost: string;
}

interface MenuItemProps {
  title: string;
  cost: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, cost }) => {
  const [quantity, setQuantity] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const [currentCost, setCurrentCost] = useState(parseInt(cost, 10));

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setShowControls(isChecked);
    if (!isChecked) {
      setQuantity(0);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setCurrentCost((prevCost) => prevCost + parseInt(cost, 10));
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setCurrentCost((prevCost) => prevCost - parseInt(cost, 10));
    }
  };

  return (
    <li className={style.form__item}>
      <div className={style.flex__group}>
        <input
          type="checkbox"
          id={title}
          name={title}
          onChange={handleCheckboxChange}
        />
        <label className={style.form__label} htmlFor={title}>
          {title}
        </label>
      </div>
      {showControls && (
        <div className={style.quantity__controls}>
          <button className={style.btn} type="button" onClick={handleIncrement}>
            +
          </button>
          <span className={style.item__quantity}>{quantity}</span>
          <button className={style.btn} type="button" onClick={handleDecrement}>
            -
          </button>
        </div>
      )}
      <span className={style.item__cost}>{currentCost} грн</span>
    </li>
  );
};

const Accordeon: React.FC = () => {
  return (
    <MenuAccordeon>
      <div className={style.box}>
        <MenuGroup title="Сир">
          <MenuItem title="Моцарелла" cost="27" />
          <MenuItem title="Пармезан" cost="14" />
          <MenuItem title="Королівський" cost="22" />
          <MenuItem title="Дорблю" cost="25" />
        </MenuGroup>
        <MenuGroup title="М’ясо">
          <MenuItem title="Моцарелла" cost="27" />
          <MenuItem title="Пармезан" cost="14" />
          <MenuItem title="Королівський" cost="22" />
          <MenuItem title="Дорблю" cost="25" />
        </MenuGroup>
      </div>
      <div className={style.box}>
        <MenuGroup title="Основа">
          <MenuItem title="Моцарелла" cost="27" />
          <MenuItem title="Пармезан" cost="14" />
          <MenuItem title="Королівський" cost="22" />
          <MenuItem title="Дорблю" cost="25" />
        </MenuGroup>
        <MenuGroup title="Овочі">
          <MenuItem title="Моцарелла" cost="27" />
          <MenuItem title="Пармезан" cost="14" />
          <MenuItem title="Королівський" cost="22" />
          <MenuItem title="Дорблю" cost="25" />
        </MenuGroup>
      </div>
      <div className={style.box}>
        <MenuGroup title="Соуси до піци">
          <MenuItem title="Моцарелла" cost="27" />
          <MenuItem title="Пармезан" cost="14" />
          <MenuItem title="Королівський" cost="22" />
          <MenuItem title="Дорблю" cost="25" />
        </MenuGroup>
        <MenuGroup title="Напої до піци">
          <MenuItem title="Моцарелла" cost="27" />
          <MenuItem title="Пармезан" cost="14" />
          <MenuItem title="Королівський" cost="22" />
          <MenuItem title="Дорблю" cost="25" />
        </MenuGroup>
      </div>
    </MenuAccordeon>
  );
};

export default Accordeon;
