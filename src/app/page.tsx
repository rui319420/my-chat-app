'use client';

import styles from "./page.module.css";
import { useState } from "react";
import Header from "./header/header";


export default function Home() {
  

  return (
    <div className="container">
      <Header></Header>
      <div className="flex flex-col h-screen max-w-lg mx-auto p-4">
      </div>
    </div>
  );
}