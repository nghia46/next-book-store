"use client"
import React from 'react'
import { useParams } from "next/navigation";

export default function About() {
  const params = useParams();
  const { id } = params;
  return (
    <div>Book detail: {id}</div>
  )
}
