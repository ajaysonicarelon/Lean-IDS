export interface NestedMenuItem {
  id: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  children?: NestedMenuItem[];
}

export interface NestedMenuOverlayProps {
  items: NestedMenuItem[];
  position: { top: number; left: number };
  onClose?: () => void;
  className?: string;
}
