import Link from "next/link";
import styles from "./Promo.module.css";
import Image from "next/image";

export const Promo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.video}>
        <iframe
          src="https://www.youtube.com/embed/O_5gzXKnGYo?autoplay=1&mute=1&loop=1&playlist=O_5gzXKnGYo&controls=0&modestbranding=1&rel=0&playsinline=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.content}>
        <Image
          alt="pandaria-logo"
          width={480}
          height={220}
          src={
            "https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltffc20bbc4caf8c3b/679d43c9bf086a4164b3ec5a/kazoo-logo.png"
          }
        />
        <h2 className={styles.title}>Відкрийте пригоди знову</h2>
        <h3 className={styles.paragraph}>
          Додаток Mists of Pandaria Classic™ відкрився для гравців за стандартну
          передплату або ігровий час WoW!
        </h3>
        <div className={styles.wrapper}>
          <Link
            className={`${styles.button} ${styles.gold}`}
            href={
              "https://eu.shop.battle.net/en-gb/product/world-of-warcraft-mists-of-pandaria-classic-upgrades?p=1891542"
            }
          >
            Купити Розширення
          </Link>
          <Link
            className={`${styles.button} ${styles.emerald}`}
            href={
              "https://eu.shop.battle.net/en-gb/product/world-of-warcraft-subscription"
            }
          >
            Передплата
          </Link>
        </div>
      </div>
    </section>
  );
};
