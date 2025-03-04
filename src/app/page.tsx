"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              J
            </div>
            <span>Julius</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Funcionalidades
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Depoimentos
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Planos
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contato
            </Link>
            <Link href="/auth">
              <Button>Entrar</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden container mx-auto py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Funcionalidades
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Planos
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <Link href="/auth" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Entrar</Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Controle suas finanças com o Julius
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Simule quanto você pode gastar por dia, gerencie suas receitas e despesas e alcance suas metas financeiras de forma simples e intuitiva.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/auth">
                    <Button size="lg" className="gap-1">
                      Comece Agora <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    Saiba Mais
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Visualização do painel do Julius"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Funcionalidades
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tudo para manter suas finanças em dia
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  O Julius oferece ferramentas práticas para você controlar seu dinheiro e atingir seus objetivos financeiros.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  O que nossos usuários dizem
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Veja como o Julius tem ajudado pessoas a transformar sua vida financeira.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-lg border p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      width={40}
                      height={40}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="mt-4">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Planos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Planos simples e transparentes
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Escolha o plano que melhor se adapta às suas necessidades financeiras.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`flex flex-col rounded-lg border p-6 shadow-sm ${plan.featured ? "border-primary" : ""}`}
                >
                  {plan.featured && (
                    <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                      Mais Popular
                    </div>
                  )}
                  <h3 className="mt-4 text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">R${plan.price}</span>
                    <span className="ml-1 text-muted-foreground">/mês</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/auth" className="mt-8">
                    <Button className="w-full" variant={plan.featured ? "default" : "outline"}>
                      Comece Agora
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pronto para começar?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Transforme sua vida financeira hoje
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Junte-se a milhares de usuários que já estão no controle de suas finanças.
                </p>
                <Link href="/auth">
                  <Button size="lg" className="gap-1">
                    Comece Agora <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border p-8 shadow-sm">
                <h3 className="text-xl font-bold">Fale com nossa equipe</h3>
                <p className="text-center text-muted-foreground">
                  Tem dúvidas? Nossa equipe está pronta para ajudar você a alcançar suas metas financeiras.
                </p>
                <Button variant="outline" size="lg" className="w-full">
                  Contato
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              J
            </div>
            <span>Julius</span>
          </div>
          <nav className="flex gap-4 md:gap-6 md:ml-auto">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Contato
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground md:ml-auto md:order-first">
            &copy; {new Date().getFullYear()} Julius. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

// Dados de exemplo
const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Simulação de Gastos",
    description: "Calcule quanto você pode gastar por dia com base em suas receitas, despesas e metas de economia.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Controle de Finanças",
    description: "Monitore suas entradas e saídas de forma prática e intuitiva.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Metas Personalizadas",
    description: "Defina seus objetivos financeiros e acompanhe seu progresso diariamente.",
  },
]

const testimonials = [
  {
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Ana Silva",
    title: "Empreendedora",
    content:
      "Com o Julius, consigo ver exatamente quanto posso gastar sem comprometer meu orçamento. Recomendo!",
  },
  {
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Carlos Souza",
    title: "Autônomo",
    content:
      "A simplicidade e eficiência do Julius me ajudaram a alcançar minhas metas financeiras. Excelente ferramenta!",
  },
]

const pricingPlans = [
  {
    name: "Básico",
    description: "Ideal para controle financeiro pessoal",
    price: 19,
    featured: false,
    features: [
      "Controle de receitas e despesas",
      "Simulação diária de gastos",
      "Relatórios simples",
      "Suporte via e-mail",
    ],
  },
  {
    name: "Pro",
    description: "Para um controle mais detalhado",
    price: 49,
    featured: true,
    features: [
      "Tudo do Básico",
      "Metas personalizadas",
      "Relatórios avançados",
      "Suporte prioritário",
      "Integração bancária",
    ],
  },
  {
    name: "Premium",
    description: "Para profissionais e empresas",
    price: 99,
    featured: false,
    features: [
      "Controle completo das finanças",
      "Relatórios detalhados",
      "Metas financeiras avançadas",
      "Suporte 24/7",
      "Integração com múltiplas contas",
      "Consultoria financeira",
    ],
  },
]
