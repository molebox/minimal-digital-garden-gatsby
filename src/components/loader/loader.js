import React from "react";
import { useProgress } from "@react-three/drei";
import { a, useTransition } from "react-spring";
import styles from "./loader.module.css";

export function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition.map(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className={styles.loading} style={{ opacity }}>
          <div className={styles.loadingBarContainer}>
            <a.div className={styles.loadingBar} style={{ width: progress }}>
              <a.span className={styles.loadingData}>
                {progress.to((p) => `${p.toFixed(2)}%`)}
              </a.span>
            </a.div>
          </div>
        </a.div>
      )
  );
}
