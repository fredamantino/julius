"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "sonner"

export function AuthForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [emailSent, setEmailSent] = useState(false)
    const [userEmail, setUserEmail] = useState("")

    const form = useForm()

    const handleSubmit = form.handleSubmit(async (data) => {
        try {
            setIsSubmitting(true)
            setUserEmail(data.email)

            const result = await signIn("nodemailer", {
                email: data.email,
                redirect: false
            })

            if (result?.error) {
                toast.error("Ocorreu um erro ao enviar o email. Tente novamente.")
                return
            }

            setEmailSent(true)
        } catch (error) {
            toast.error("Ocorreu um erro ao enviar o email. Tente novamente.")
        } finally {
            setIsSubmitting(false)
        }
    })

    const resetForm = () => {
        setEmailSent(false)
        form.reset()
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold tracking-tight">Sign in</CardTitle>
                    <CardDescription>
                        {emailSent ? "Verifique seu email para fazer login" : "Digite seu email para receber um magic link"}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {emailSent ? (
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="rounded-full bg-primary/10 p-3">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium">Verifique seu email</h3>
                                <p className="text-sm text-muted-foreground">
                                    Enviamos um magic link para <span className="font-medium">{userEmail}</span>
                                </p>
                            </div>
                            <Button variant="outline" className="mt-4" onClick={resetForm}>
                                Usar um email diferente
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="nome@exemplo.com"
                                    required
                                    disabled={isSubmitting}
                                    {...form.register('email')}
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Enviando..." : "Enviar magic link"}
                            </Button>
                        </form>
                    )}
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-center text-sm text-muted-foreground">
                        Ao continuar, você concorda com nossos{" "}
                        <a href="#" className="underline underline-offset-4 hover:text-primary">
                            Termos de Serviço
                        </a>{" "}
                        e{" "}
                        <a href="#" className="underline underline-offset-4 hover:text-primary">
                            Política de Privacidade
                        </a>
                        .
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}