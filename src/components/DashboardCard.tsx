
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export function DashboardCard({ title, icon: Icon, onClick }: DashboardCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all gap-4 w-full"
    >
      <div className="p-3 rounded-full bg-primary/10">
        <Icon className="w-8 h-8 text-primary dark:text-gray-100" />
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
    </button>
  );
}
