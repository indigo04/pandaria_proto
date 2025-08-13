import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../../../public/Blizzard_Battle.net_logo.png";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Image src={logo} width={96} height={48} alt="blizzard-logo" />
          </li>
          <li>
            <Image
              alt="pandaria-icon"
              src={
                "https://blz-contentstack-images.akamaized.net/v3/assets/blt72f16e066f85e164/blt832a991c0f0b33ec/687806c49c5ca9b6991dcad6/game_icon_mists_classic.svg"
              }
              width={48}
              height={48}
            />
          </li>
          <li className={styles.item}>
            <p className={styles.link}>Overview</p>
          </li>
          <li className={styles.item}>
            <p className={styles.link}>Features</p>
          </li>
          <li className={styles.item}>
            <p className={styles.link}>Game Upgrades</p>
          </li>
          <li className={styles.item}>
            <p className={styles.link}>FAQ</p>
          </li>
        </ul>
      </nav>
      <div className={styles.wrapper}>
        <Link
          className={`${styles.button} ${styles.emerald}`}
          href={
            "https://eu.shop.battle.net/en-gb/product/world-of-warcraft-subscription"
          }
        >
          SUBSCRIBE
        </Link>
        <Link
          className={`${styles.button} ${styles.gold}`}
          href={
            "https://eu.shop.battle.net/en-gb/product/world-of-warcraft-mists-of-pandaria-classic-upgrades?p=1891542"
          }
        >
          SHOP UPGRADES
        </Link>
      </div>
    </header>
  );
};
