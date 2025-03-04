import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  BarChart3,
  Calendar,
  ChevronRight,
  CreditCard,
  DollarSign,
  PiggyBank,
  Wallet,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              J
            </div>
            <span>Julius</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Recursos
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              Como Funciona
            </Link>
            <Link href="#dashboard" className="text-sm font-medium hover:text-primary">
              Dashboard
            </Link>
          </nav>
          <Button asChild>
            <Link href="/auth">Entrar</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Saiba exatamente quanto pode gastar todos os dias
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transforme sua gestão financeira com uma abordagem diária simples e eficaz. Economize mais e gaste
                    com consciência.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/auth">
                      Experimente Grátis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#how-it-works">Como Funciona</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md overflow-hidden rounded-xl border bg-background shadow-xl">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">R$ 127,50</h3>
                        <p className="text-sm text-muted-foreground">Disponível hoje</p>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Receita Mensal:</span>
                        <span className="font-medium">R$ 5.000,00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Despesas Fixas:</span>
                        <span className="font-medium">R$ 2.500,00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Meta de Economia:</span>
                        <span className="font-medium">R$ 500,00</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold pt-2 border-t">
                        <span>Disponível por dia:</span>
                        <span>R$ 66,67</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recursos Principais</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simplifique sua gestão financeira com ferramentas intuitivas e eficazes
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-muted">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Orçamento Diário</h3>
                <p className="text-center text-muted-foreground">
                  Saiba exatamente quanto pode gastar a cada dia com base em sua receita e metas
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-muted">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <PiggyBank className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Metas de Economia</h3>
                <p className="text-center text-muted-foreground">
                  Defina quanto deseja economizar mensalmente e acompanhe seu progresso
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-muted">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Análise Visual</h3>
                <p className="text-center text-muted-foreground">
                  Visualize seus gastos e economias com gráficos intuitivos e relatórios detalhados
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Como Funciona</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Três passos simples para transformar sua gestão financeira
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-8">
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Cadastre seus dados</h3>
                <p className="text-center text-muted-foreground">
                  Informe sua receita mensal, despesas fixas e quanto deseja economizar
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Receba seu orçamento diário</h3>
                <p className="text-center text-muted-foreground">
                  O app calcula automaticamente quanto você pode gastar por dia
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Acompanhe seus gastos</h3>
                <p className="text-center text-muted-foreground">
                  Registre seus gastos diários e veja como está seu orçamento em tempo real
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section id="dashboard" className="w-full py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visualize Seus Dados</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dashboards intuitivos para acompanhar sua jornada financeira
                </p>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-5xl">
              <Tabs defaultValue="daily" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="daily">Visão Diária</TabsTrigger>
                  <TabsTrigger value="weekly">Visão Semanal</TabsTrigger>
                  <TabsTrigger value="monthly">Visão Mensal</TabsTrigger>
                </TabsList>
                <TabsContent value="daily" className="border rounded-lg p-4 mt-4">
                  <div className="aspect-video overflow-hidden rounded-lg border bg-background shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Hoje: 15 de Março</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card className="p-4">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-primary" />
                            <h4 className="font-medium">Disponível</h4>
                          </div>
                          <p className="text-2xl font-bold mt-2">R$ 127,50</p>
                          <p className="text-xs text-muted-foreground">+R$ 60,83 acumulado</p>
                        </Card>
                        <Card className="p-4">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5 text-yellow-500" />
                            <h4 className="font-medium">Gastos Hoje</h4>
                          </div>
                          <p className="text-2xl font-bold mt-2">R$ 0,00</p>
                          <p className="text-xs text-muted-foreground">Limite: R$ 66,67</p>
                        </Card>
                        <Card className="p-4">
                          <div className="flex items-center gap-2">
                            <PiggyBank className="h-5 w-5 text-green-500" />
                            <h4 className="font-medium">Economia</h4>
                          </div>
                          <p className="text-2xl font-bold mt-2">R$ 250,00</p>
                          <p className="text-xs text-muted-foreground">Meta: R$ 500,00</p>
                        </Card>
                      </div>
                      <div className="mt-6">
                        <h4 className="font-medium mb-2">Transações Recentes</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                                <CreditCard className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="font-medium">Supermercado</p>
                                <p className="text-xs text-muted-foreground">Ontem, 18:30</p>
                              </div>
                            </div>
                            <p className="font-medium text-red-500">-R$ 45,75</p>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                                <CreditCard className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="font-medium">Restaurante</p>
                                <p className="text-xs text-muted-foreground">Ontem, 12:15</p>
                              </div>
                            </div>
                            <p className="font-medium text-red-500">-R$ 32,90</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="weekly" className="border rounded-lg p-4 mt-4">
                  <div className="aspect-video overflow-hidden rounded-lg border bg-background shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Semana: 11 a 17 de Março</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">Gastos Diários</h4>
                          <div className="h-[200px] w-full bg-muted rounded-md flex items-end justify-between p-4">
                            {[65, 45, 78, 32, 55, 0, 0].map((value, index) => (
                              <div key={index} className="flex flex-col items-center gap-1">
                                <div
                                  className="w-8 bg-primary rounded-t-sm"
                                  style={{ height: `${value * 1.5}px` }}
                                ></div>
                                <span className="text-xs">
                                  {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][index]}
                                </span>
                              </div>
                            ))}
                          </div>
                        </Card>
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">Resumo da Semana</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span>Orçamento Semanal:</span>
                              <span className="font-bold">R$ 466,69</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Gasto até agora:</span>
                              <span className="font-bold text-red-500">R$ 275,00</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Disponível:</span>
                              <span className="font-bold text-green-500">R$ 191,69</span>
                            </div>
                            <div className="pt-2 border-t">
                              <div className="flex justify-between">
                                <span>Economia projetada:</span>
                                <span className="font-bold">+ R$ 25,02</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="monthly" className="border rounded-lg p-4 mt-4">
                  <div className="aspect-video overflow-hidden rounded-lg border bg-background shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-4">Março 2024</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">Distribuição de Gastos</h4>
                          <div className="h-[200px] w-full bg-muted rounded-md flex items-center justify-center">
                            <div className="relative h-32 w-32 rounded-full border-8 border-primary">
                              <div
                                className="absolute top-0 right-0 bottom-0 left-0 border-8 border-yellow-500 rounded-full"
                                style={{ clipPath: "polygon(50% 50%, 100% 50%, 100% 0, 50% 0)" }}
                              ></div>
                              <div
                                className="absolute top-0 right-0 bottom-0 left-0 border-8 border-green-500 rounded-full"
                                style={{ clipPath: "polygon(50% 50%, 50% 0, 0 0, 0 100%, 50% 100%)" }}
                              ></div>
                            </div>
                          </div>
                          <div className="flex justify-between mt-4">
                            <div className="flex items-center gap-1">
                              <div className="h-3 w-3 bg-primary rounded-full"></div>
                              <span className="text-xs">Essenciais</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                              <span className="text-xs">Lazer</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                              <span className="text-xs">Outros</span>
                            </div>
                          </div>
                        </Card>
                        <Card className="p-4">
                          <h4 className="font-medium mb-2">Progresso Mensal</h4>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Gastos</span>
                                <span>45%</span>
                              </div>
                              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-500 w-[45%]"></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Economia</span>
                                <span>50%</span>
                              </div>
                              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[50%]"></div>
                              </div>
                            </div>
                            <div className="pt-4 border-t mt-4">
                              <div className="flex justify-between">
                                <span>Dias restantes:</span>
                                <span className="font-bold">16</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Disponível por dia:</span>
                                <span className="font-bold">R$ 66,67</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="try-now" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comece a controlar suas finanças hoje
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experimente gratuitamente e transforme sua relação com o dinheiro
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/auth">
                    Começar agora
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              J
            </div>
            <span>Julius</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Julius. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
