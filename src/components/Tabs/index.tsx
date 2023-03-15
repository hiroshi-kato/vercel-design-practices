import React, { useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

type Props = {};

const items = ['Home', 'Resources', 'People', 'Careers'] as const;

export const Tabs: React.FC<Props> = () => {
  const [activeItem, setActiveItem] = useState<typeof items[number]>(items[0]);
  const [nextActive, setNextActive] = useState<
    typeof items[number] | undefined
  >(undefined);

  return (
    <nav className={styles.nav}>
      <div className={styles.ulContainer}>
        <div className={styles.stroke} aria-hidden={true} />
        <ul className={styles.ul}>
          {items.map((item) => (
            <Tab
              isActive={item === activeItem && !nextActive}
              isNextActive={item === nextActive}
              onClick={() => {
                setNextActive(item);
                setTimeout(() => {
                  setActiveItem(item);
                  setNextActive(undefined);
                }, 300);
              }}
            >
              {item}
            </Tab>
          ))}
        </ul>
      </div>
    </nav>
  );
};

type TabProps = {
  children: string;
  isActive: boolean;
  isNextActive: boolean;
  onClick: () => void;
};

export const Tab: React.FC<TabProps> = ({
  children,
  isActive,
  isNextActive,
  onClick,
}) => {
  return (
    <li className={styles.li}>
      <button
        className={clsx(styles.button, isActive && styles.active)}
        onClick={onClick}
      >
        {children}
        <div
          className={clsx(
            styles.buttonFloat,
            isActive && styles.buttonFloatActive,
            isNextActive && styles.buttonFloatNextActive
          )}
        ></div>
        <div
          className={clsx(
            styles.buttonFloatShadow,
            isActive && styles.buttonFloatActive,
            isNextActive && styles.buttonFloatShadowNextActive
          )}
        ></div>
      </button>
    </li>
  );
};
