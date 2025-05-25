export interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}