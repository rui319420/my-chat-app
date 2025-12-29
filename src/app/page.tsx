'use client';

import { useState } from "react";
import Header from "./header/header";
import { Textarea } from "@/components/ui/textarea";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";


export default function Home() {
  

  return (
    <div className="container">
      <Header></Header>
      <div className="contents">

          <SidebarProvider>
                  <Sidebar></Sidebar>
          </SidebarProvider>
        <Textarea placeholder="ここに文字を入力できます。" id="message" />
        <div></div>
      </div>
    </div>
  );
}