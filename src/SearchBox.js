import React, { useState, useRef, useEffect } from 'react';
import styles from './HomePage.module.css'

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === '/') {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div>
        <div className={styles.searchContainer}>
            <input 
                ref={inputRef} 
                value={query} 
                type='text' 
                className={styles.searchBox} 
                placeholder='Seacrch'
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                
            />
            <span className={styles.shortcutHint}> Ctrl + /</span>
        </div>
    </div>
  );
};

export default SearchBox;
