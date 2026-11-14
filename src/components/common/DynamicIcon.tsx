'use client';

import React from 'react';
import {
  Lightbulb,
  Palette,
  Code2,
  Compass,
  FileCheck2,
  ClipboardCheck,
  Workflow,
  Layout,
  Monitor,
  Smartphone,
  Layers,
  Sparkles,
  BookOpen,
  Megaphone,
  Boxes,
  Shapes,
  Type,
  RefreshCw,
  Zap,
  LayoutDashboard,
  Box,
  Wand2,
  Database,
  Server,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb,
  Palette,
  Code2,
  Compass,
  SearchCheck: FileCheck2,
  ClipboardCheck,
  Workflow,
  Layout,
  Monitor,
  Smartphone,
  Layers,
  Sparkles,
  BookOpen,
  Megaphone,
  Boxes,
  Shapes,
  Type,
  RefreshCw,
  Zap,
  LayoutDashboard,
  Move3d: Box,
  Wand2,
  Database,
  Server,
  ShieldCheck,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className = 'w-5 h-5' }: DynamicIconProps) {
  const IconComponent = ICON_MAP[name] || HelpCircle;
  return <IconComponent className={className} />;
}

