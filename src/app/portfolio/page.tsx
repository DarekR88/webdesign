"use client";

import Link from "next/link";
import React, { useState } from "react";

export function Portfolio() {
  const [isActiveProfessional, setIsActiveProfessional] = useState(true);
  const [isActivePremium, setIsActivePremium] = useState(false);
  const [isActiveBasic, setIsActiveBasic] = useState(false);

  const handleClickBasic = () => {
    setIsActiveBasic(true);
    setIsActiveProfessional(false);
    setIsActivePremium(false)
  };

  const handleClickProfessional = () => {
    setIsActiveProfessional(true);
    setIsActiveBasic(false);
    setIsActivePremium(false)
  };

  const handleClickPremium = () => {
    setIsActiveProfessional(false);
    setIsActiveBasic(false);
    setIsActivePremium(true)
  };

  return (
    <>

    </>
  );
}
