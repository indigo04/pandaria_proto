"use client";
import Link from "next/link";
import styles from "./Promo.module.css";
import Image from "next/image";
import { Header } from "../Header/Header";
import logo from "../../../public/battle-net.png";
import poster from "../../../public/poster.jpg";
import { useRef, useState } from "react";

export const Promo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => console.log("Потрібна взаємодія користувача"));
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    videoRef.current.volume = videoRef.current.muted ? 0 : 0.5;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className={styles.section}>
      <Header />
      <div className={styles.video}>
        {!isVideoLoaded && (
          <Image src={poster} alt="poster" className={styles.image} />
        )}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={styles.bgVideo}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source
            src="https://res.cloudinary.com/dcfgaleph/video/upload/v1755076924/video_v0xqhe.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.content}>
        <button onClick={togglePlay} className={styles.playButton}>
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button onClick={toggleSound} className={styles.soundButton}>
          {isMuted ? "🔇" : "🔊"}
        </button>
        <Image
          alt="pandaria-logo"
          width={480}
          height={220}
          src="https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/bltffc20bbc4caf8c3b/679d43c9bf086a4164b3ec5a/kazoo-logo.png"
        />
        <h2 className={styles.title}>Rediscover Pure Adventure</h2>
        <h3 className={styles.paragraph}>
          Mists of Pandaria Classic™ is now available and is included with an
          active WoW Subscription or game time!
        </h3>
        <div className={styles.wrapper}>
          <Link
            className={`${styles.button} ${styles.gold}`}
            href="https://eu.shop.battle.net/en-gb/product/world-of-warcraft-mists-of-pandaria-classic-upgrades?p=1891542"
          >
            SHOP UPGRADES
          </Link>
          <Link
            className={`${styles.button} ${styles.emerald}`}
            href="https://eu.shop.battle.net/en-gb/product/world-of-warcraft-subscription"
          >
            SUBSCRIBE
          </Link>
        </div>
        <div className={styles.container}>
          <p className={styles.caption}>Available on Windows/Mac</p>
          <Image src={logo} width={200} height={100} alt="battle-net" />
        </div>
      </div>
    </section>
  );
};
