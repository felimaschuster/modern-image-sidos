
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { BarChart2, Settings } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">Relatórios e Indicadores</h1>
              <SidebarTrigger />
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
                <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                  Favoritos
                </h2>
                <select className="text-sm text-gray-500 border rounded-md px-2 py-1">
                  <option value="">Exibir favoritos por</option>
                  <option value="recent">Mais recentes</option>
                  <option value="name">Nome</option>
                </select>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <p className="text-gray-500 text-sm">Nenhum favorito adicionado</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
