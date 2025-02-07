
import { Home, LayoutDashboard, Database, BarChart2, Settings, ExternalLink, Menu } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Página inicial", icon: Home, path: "/" },
  { title: "Categorias", icon: LayoutDashboard, path: "/categorias" },
  { title: "Workspaces", icon: LayoutDashboard, path: "/workspaces" },
  { title: "Fonte de Dados", icon: Database, path: "/fonte-dados" },
  { title: "Painéis", icon: BarChart2, path: "/paineis" },
  { title: "Links Externos", icon: ExternalLink, path: "/links-externos" },
  { title: "Relatórios Gerenciais", icon: BarChart2, path: "/relatorios" },
  { title: "Configurações", icon: Settings, path: "/configuracoes" },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <div className="flex items-center p-4 border-b">
          <span className="text-xl font-semibold text-primary">SAJ</span>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.path}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
