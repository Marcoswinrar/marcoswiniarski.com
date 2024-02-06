"use client"

import React from "react"
import { ThemeProvider } from "next-themes"

interface Props {
  children: React.ReactNode
}

export const Provider = ({ children }: Props) => {
  return <ThemeProvider defaultTheme="dark" attribute="class">{children}</ThemeProvider>;
}