
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { BarChart2, Moon, Settings, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";

const Index = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Relatórios e Indicadores</h1>
              <div className="flex items-center gap-4">
                <Toggle
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                  className="p-2"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Toggle>
                <SidebarTrigger />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DashboardCard
                title="Painéis"
                icon={BarChart2}
                onClick={() => window.location.href = '/paineis'}
              />
              <DashboardCard
                title="Relatórios Gerenciais"
                icon={BarChart2}
                onClick={() => window.location.href = '/relatorios'}
              />
              <DashboardCard
                title="Configurações"
                icon={Settings}
                onClick={() => window.location.href = '/configuracoes'}
              />
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  Favoritos
                </h2>
                <select className="text-sm text-gray-500 dark:text-gray-400 border dark:border-gray-700 rounded-md px-2 py-1 dark:bg-gray-800">
                  <option value="">Exibir favoritos por</option>
                  <option value="recent">Mais recentes</option>
                  <option value="name">Nome</option>
                </select>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Nenhum favorito adicionado</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
