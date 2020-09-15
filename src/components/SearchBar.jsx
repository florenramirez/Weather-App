import React, { useState } from "react";
import styles from './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <div className={styles.container}>
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className = {styles.border}
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={` ${styles.btnAgregar} ${styles.border}`} type="submit" value="Agregar" />
    </form>
    </div>
  );
}


