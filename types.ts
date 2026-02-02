import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
  variant: 'standard' | 'pro' | 'plus';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum KaiVariant {
  STANDARD = 'KaiAssist',
  PRO = 'KaiAssist Pro'
}