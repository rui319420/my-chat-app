'use client';

import { useState } from "react";
import Header from "./header/header";
import { Textarea } from "@/components/ui/textarea";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";



export default function Home({ children }: { children: React.ReactNode }) {
  

  return (
    <div className="container">
      <Header></Header>
      <div className="contents">
        <SidebarProvider>
          <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
        <Textarea placeholder="ここに文字を入力できます。" id="message" />
        </SidebarProvider>
      </div>
    </div>
  );
}