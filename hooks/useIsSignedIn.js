
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";


export default function useIsSignedIn(props) {
  const [isSignedIn, setIsSignedIn] = useState(false);
    const router = useRouter();

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      setIsSignedIn(true)
    } else {
      setIsSignedIn(false)
    }
  });
  const goToSignUp = () =>{ 
    router.replace("/auth/login?next=" + router.pathname);
  }

 
  return {goToSignUp, isSignedIn}
}