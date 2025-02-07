
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
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all gap-4 w-full"
    >
      <div className="p-3 rounded-full bg-primary/10">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </button>
  );
}
