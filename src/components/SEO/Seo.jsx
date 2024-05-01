/* eslint-disable react/prop-types */
"use client"
import { useEffect } from 'react';

export default function Seo({
  title = "Hiteshi",
  description = "Hiteshi Description",
}) {
  useEffect(() => {
    document.title = title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.content = description;
    }
  }, [title, description]);

  return null; 
}