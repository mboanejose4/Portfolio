"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMessageCircle, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const contactMethods = [
        {
            icon: <FiMail />,
            title: "Email",
            value: "josemboane5@gmail.com",
            link: "mailto:josemboane5@gmail.com",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FiPhone />,
            title: "Telefone",
            value: "+258 871 670 831",
            link: "tel:+258871670831",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <FiMessageCircle />,
            title: "WhatsApp",
            value: "+258 842 419 653",
            link: "https://wa.me/258842419653?text=Olá%20José,%20vim%20do%20seu%20portfólio!",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <FiMapPin />,
            title: "Localização",
            value: "Matola, Moçambique",
            link: "https://maps.google.com/?q=Matola,Mozambique",
            color: "from-orange-500 to-red-500"
        }
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            // ⚠️ SUBSTITUA "YOUR_FORM_ID" PELO SEU ID REAL DO FORMSPREE ⚠️
            const response = await fetch("https://formspree.io/f/xjkjbrjo", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
                (e.target as HTMLFormElement).reset();
            } else {
                alert("Erro ao enviar mensagem. Tente novamente.");
            }
        } catch (error) {
            alert("Erro de conexão. Tente novamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800" id="contact">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_#3b82f6_1px,_transparent_0)] bg-[length:50px_50px]"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                            Vamos Trabalhar Juntos
                        </span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Pronto para iniciar seu próximo projeto? Entre em contato e vamos conversar!
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-8"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-semibold text-gray-200 mb-8">
                            Entre em Contato
                        </h3>

                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                target={method.title === "WhatsApp" ? "_blank" : "_self"}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-6 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                                    {method.icon}
                                </div>
                                <div>
                                    <div className="text-gray-400 text-sm font-medium">{method.title}</div>
                                    <div className="text-gray-200 text-lg font-semibold">{method.value}</div>
                                    {method.title === "WhatsApp" && (
                                        <div className="text-green-400 text-xs mt-1 flex items-center gap-1">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            Online • Resposta rápida
                                        </div>
                                    )}
                                </div>
                            </motion.a>
                        ))}

                        {/* WhatsApp Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20"
                        >
                            <h4 className="text-lg font-semibold text-gray-200 mb-2 flex items-center gap-2">
                                <FiMessageCircle className="text-green-400" />
                                Prefere WhatsApp?
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Clique no card do WhatsApp para iniciar uma conversa direta.
                                Respondo rapidamente durante o horário comercial.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl shadow-black/50"
                    >
                        <h3 className="text-2xl font-semibold text-gray-200 mb-6">Envie uma Mensagem</h3>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FiCheck className="text-white text-2xl" />
                                </div>
                                <h4 className="text-2xl font-semibold text-gray-200 mb-4">Mensagem Enviada!</h4>
                                <p className="text-gray-400 mb-6">
                                    Obrigado pelo seu contato. Responderei em breve!
                                </p>
                                <motion.button
                                    onClick={() => setIsSubmitted(false)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold"
                                >
                                    Enviar Nova Mensagem
                                </motion.button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                                            Nome *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                            placeholder="Seu nome completo"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                                        Assunto *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                        placeholder="Qual é o assunto?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                                        Mensagem *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                                        placeholder="Descreva seu projeto ou dúvida..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className="text-lg" />
                                            Enviar Mensagem
                                        </>
                                    )}
                                </motion.button>

                                {/* WhatsApp Alternative */}
                                <div className="text-center pt-4 border-t border-gray-700">
                                    <p className="text-gray-400 text-sm mb-3">Ou se preferir:</p>
                                    <motion.a
                                        href="https://wa.me/258842419653?text=Olá%20José,%20vim%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
                                        target="_blank"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg shadow-green-500/30 hover:shadow-emerald-500/40 transition-all duration-300"
                                    >
                                        <FiMessageCircle className="text-lg" />
                                        Conversar no WhatsApp
                                    </motion.a>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}