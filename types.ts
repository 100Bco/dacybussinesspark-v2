import React from 'react';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface FormState {
  fullName: string;
  email: string;
  mobile: string;
  role: string;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}