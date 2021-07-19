
import React, { useState, useEffect } from 'react';

export default function useIsSignedIn(props) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      setIsSignedIn(true)
    } else {
      setIsSignedIn(false)
    }
  });

  return isSignedIn
}