interface BadgeProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ icon, children }) => {
  return (
    <span
      className="flex items-center gap-2 px-2 py-1 text-sm font-medium text-gray-50 bg-cornflower-blue rounded-full dark:bg-neutral-800 dark:text-neutral-50
    
    "
    >
      {icon}
      {children}
    </span>
  );
};

export default Badge;
