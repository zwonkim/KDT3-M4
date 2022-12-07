import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button/Button';
import styles from './ProductDetail.module.css';
import { getProductDetail } from '../components/total-product/fetch';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const {
    state: { id },
  } = useLocation();

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const details = getProductDetail(id);
    details.then((data) => {
      console.log('fetching...');
      console.log('data:', data);
      setDetail(data);
    });
  }, [id]);

  const handleClick = (e) => {
    // 여기서 장바구니에 추가하면 됨!
  };
  return (
    <section className={styles.item}>
      <img className={styles.img} src={detail.photo} alt={detail.title} />
      <div className={styles.info}>
        <h2 className={styles.title}>{detail.title}</h2>
        <p className={styles.price}>{detail.price?.toLocaleString() || Number(detail.price).toLocaleString()}원</p>
        <p className={styles.description}>{detail.description}</p>
        <button className={styles.btn}>구매하기</button>
        <div className={styles.btns}>
          <Button text="장바구니" onClick={handleClick} />
          <Button text="찜하기" onClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
