export interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}