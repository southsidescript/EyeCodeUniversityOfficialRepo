"use client"

import { useState, useEffect } from "react"
import styles from "./Doc.module.css"
import { DownloadIcon, CheckCircleIcon } from "./icons"



export default function Doc(props) {


    const {
        title,
        fileType ,
        fileSize ,
        downloadUrl , 
      } = props;

  const [downloadState, setDownloadState] = useState("idle")
  const [progress, setProgress] = useState(0)
  const [glowIntensity, setGlowIntensity] = useState(1)

  // Subtle pulsing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity((prev) => 0.9 + Math.sin(Date.now() / 1000) * 0.1)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const handleDownload = () => {
    setDownloadState("downloading")
    setProgress(0)

    // Simulate download progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 5
        if (newProgress >= 100) {
          clearInterval(interval)
          setDownloadState("complete")
          return 100
        }
        return newProgress
      })
    }, 150)

    // Actual download using an anchor tag
    const link = document.createElement("a")
    link.href = downloadUrl
    link.download = title
    link.click()
  }

  return (
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>{title}</h3>
              <div className={styles.meta}>
                <span
                  className={styles.fileType}
                  style={{
                    textShadow: `0 0 ${4 * glowIntensity}px rgba(0, 195, 255, 0.8)`,
                  }}
                >
                  {fileType}
                </span>
                <span className={styles.fileSize}>{fileSize}</span>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            {downloadState === "idle" && (
              <button onClick={handleDownload} className={styles.downloadButton}>
                <div
                  className={styles.buttonGlow}
                  style={{
                    opacity: 0.1 * glowIntensity,
                    boxShadow: `0 0 ${15 * glowIntensity}px ${5 * glowIntensity}px rgba(0, 195, 255, 0.5)`,
                  }}
                ></div>
                <DownloadIcon className={styles.buttonIcon} />
              </button>
            )}

            {downloadState === "downloading" && (
              <div className={styles.downloadingContainer}>
                <div
                  className={styles.progressBar}
                  style={{
                    width: `${progress}%`,
                    boxShadow: `0 0 ${8 * glowIntensity}px rgba(0, 195, 255, 0.7)`,
                  }}
                ></div>
              </div>
            )}

            {downloadState === "complete" && (
              <div className={styles.completeContainer}>
                <CheckCircleIcon
                  className={styles.completeIcon}
                  style={{
                    filter: `drop-shadow(0 0 ${3 * glowIntensity}px rgba(0, 195, 255, 0.8))`,
                  }}
                />
              </div>
            )}
          </div>

          {/* Minimal neon accent line */}
          <div
            className={styles.accentLine}
            style={{
              boxShadow: `0 0 ${6 * glowIntensity}px rgba(0, 195, 255, 0.7)`,
            }}
          ></div>
        </div>
      </div>
  
  )
}

// Icons as React components