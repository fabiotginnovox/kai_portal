import React from 'react';
import { ContactCard } from "@/components/ui/contact-card";
import { Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 px-4 md:px-8 bg-kai-black">
            <div className="mx-auto max-w-6xl">
                <ContactCard
                    title="Get in touch"
                    description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
                    contactInfo={[
                        {
                            icon: Mail,
                            label: 'Email',
                            value: 'contact@21st.dev',
                        },
                        {
                            icon: Phone,
                            label: 'Phone',
                            value: '+92 312 1234567',
                        },
                        {
                            icon: MapPin,
                            label: 'Address',
                            value: 'Faisalabad, Pakistan',
                            className: 'col-span-1 md:col-span-2 lg:col-span-1',
                        }
                    ]}
                    className="bg-black/50 border-kai-accent/20 text-white rounded-none"
                    formSectionClassName="bg-kai-accent/5 border-kai-accent/20"
                >
                    <form action="" className="w-full space-y-6">
                        <div className="flex flex-col gap-2">
                            <Label className="text-kai-text/80">Name</Label>
                            <Input 
                                type="text" 
                                className="bg-kai-black border-kai-accent/20 focus-visible:ring-kai-accent text-white" 
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="text-kai-text/80">Email</Label>
                            <Input 
                                type="email" 
                                className="bg-kai-black border-kai-accent/20 focus-visible:ring-kai-accent text-white" 
                                placeholder="your@email.com"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="text-kai-text/80">Phone</Label>
                            <Input 
                                type="phone" 
                                className="bg-kai-black border-kai-accent/20 focus-visible:ring-kai-accent text-white" 
                                placeholder="+1 234 567 890"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="text-kai-text/80">Message</Label>
                            <Textarea  
                                className="bg-kai-black border-kai-accent/20 focus-visible:ring-kai-accent text-white min-h-[120px]" 
                                placeholder="How can we help?"
                            />
                        </div>
                        <Button className="w-full bg-kai-accent hover:bg-kai-accent/90 text-kai-black font-bold py-6" type="button">
                            Submit
                        </Button>
                    </form>
                </ContactCard>
            </div>
        </section>
    );
};

export default Contact;
