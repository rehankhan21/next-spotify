"use client";

import AuthModal from "@/components/AuthModal";

import { useEffect, useState } from "react";

const ModalProvider = () => {
  // Modals can cause Hydration Errors
  // so inorder to prevent that, we never want to render a modal
  // if we are in severside rendering.

  // if this useEffect loads that means we are already on the client
  // so then we can load our modal and avoid Hydration error

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // we are currently still in serverside, so the below wont get rendered
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
