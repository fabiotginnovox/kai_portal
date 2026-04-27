import React from 'react';
import { ContactCard } from "@/components/ui/contact-card";
import { Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 px-4 md:px-8 bg-kai-bg-page">
            <div className="mx-auto max-w-6xl">
                <ContactCard
                    title="Entre em contato"
                    description="Se você tiver alguma dúvida sobre nossos serviços ou precisar de ajuda, preencha o formulário abaixo. Fazemos o nosso melhor para responder em até 1 dia útil."
                    contactInfo={[
                        {
                            icon: Mail,
                            label: 'E-mail',
                            value: 'cesar.medina@innovox.com.br',
                        },
                        {
                            icon: Phone,
                            label: 'Telefone',
                            value: '+55 21 98898-0953',
                        },
                        {
                            icon: MapPin,
                            label: 'Endereço',
                            value: 'Rio de Janeiro - RJ - BR',
                            className: 'col-span-1 md:col-span-2 lg:col-span-1',
                        }
                    ]}
                    className="bg-kai-bg-surface border-kai-border-default text-kai-fg-primary rounded-2xl overflow-hidden shadow-xl"
                    formSectionClassName="bg-kai-bg-sunken/50 border-kai-border-default"
                >
                    <form action="" className="w-full space-y-6">
                        <div className="flex flex-col gap-2">
                            <Label className="t-label text-kai-fg-secondary">Nome</Label>
                            <Input 
                                type="text" 
                                className="bg-kai-bg-sunken border-kai-border-default focus-visible:ring-kai-accent-primary text-kai-fg-primary" 
                                placeholder="Seu Nome"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="t-label text-kai-fg-secondary">E-mail</Label>
                            <Input 
                                type="email" 
                                className="bg-kai-bg-sunken border-kai-border-default focus-visible:ring-kai-accent-primary text-kai-fg-primary" 
                                placeholder="seu@email.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="t-label text-kai-fg-secondary">Telefone</Label>
                            <Input 
                                type="phone" 
                                className="bg-kai-bg-sunken border-kai-border-default focus-visible:ring-kai-accent-primary text-kai-fg-primary" 
                                placeholder="+55 21 98898-0953"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="t-label text-kai-fg-secondary">Mensagem</Label>
                            <Textarea  
                                className="bg-kai-bg-sunken border-kai-border-default focus-visible:ring-kai-accent-primary text-kai-fg-primary min-h-[120px]" 
                                placeholder="Como podemos ajudar?"
                            />
                        </div>
                        <Button className="w-full bg-kai-forest-500 hover:bg-kai-forest-600 text-white font-bold py-6 text-lg uppercase tracking-wider transition-all active:scale-[0.98]" type="button">
                            Enviar Mensagem
                        </Button>
                    </form>
                </ContactCard>
            </div>
        </section>
    );
};

export default Contact;
