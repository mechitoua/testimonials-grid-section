import React from 'react';

export interface TestimonialType {
  name: string;
  title: string;
  quote?: string;
  content?: string;
  avatarUrl?: string;
  className?: string;
}
export interface TestimonialProps {
  name: string;
  quote?: string;
  content?: string;
  avatarUrl?: string;
  className?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
