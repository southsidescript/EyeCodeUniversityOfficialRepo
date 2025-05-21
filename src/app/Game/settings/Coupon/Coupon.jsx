"use client"

import { useState, useEffect } from "react"
import styles from "./style.module.css";
import Link from "next/link";

export default function CouponCard({
  discount = "10% OFF",
  maxAmount = "MAX $20.00",
  description = "Eyecode University:Summer Week Discount",
  code = "EYE10",
  expiryDate = "08/25"
}) {

 
  const [copied, setCopied] = useState(false)
    const phone = '79283526584';
    const message = encodeURIComponent('Здравствуйте, я хочу записаться на пробный урок.Промокод: EYE10');
   
    const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
  }

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  return (
    <div className={styles.couponWrapper}>
      <div className={styles.couponCard}>
        <div className={styles.shineEffect}></div>

        <div className={styles.content}>
          <div className={styles.header}>
            <div>
              <h2 className={styles.discount}>{discount}</h2>
              <p className={styles.maxAmount}>{maxAmount}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.codeContainer}>
              <span className={styles.code}>{code}</span>
              <div className={styles.copyText} onClick={handleCopy}>
                <svg
                  className={styles.copyIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>{copied ? "Copied!" : "Copy code"}</span>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <span className={styles.expiry}>Действителен до: {expiryDate}</span>
            <Link href={`https://wa.me/${phone}?text=${message}`}>
            <button onClick={()=>{
               
                handleCopy();
                
            }} className={styles.useButton}>
              {copied ? "COPIED!" : "USE COUPON"}
            </button>
            </Link>
          </div>
        </div>

        <div className={styles.topRightGlow}></div>
        <div className={styles.bottomLeftGlow}></div>
      </div>
    </div>
  )
}
