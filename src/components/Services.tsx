"use client";
import { motion } from "framer-motion";

export default function Services() {
    const services = [
        {
            icon: "💻",
            title: "Desenvolvimento Full-Stack",
            description: "Soluções completas com React, Vue.js, Node.js e Laravel para aplicações web modernas e escaláveis."
        },
        {
            icon: "📱",
            title: "Desenvolvimento Mobile",
            description: "Aplicações mobile nativas e híbridas com React Native para iOS e Android."
        },
        {
            icon: "🗄️",
            title: "Base de Dados",
            description: "Design e otimização de base de dados relacionais e não-relacionais com MySQL e MongoDB."
        },
        {
            icon: "☁️",
            title: "DevOps & Cloud",
            description: "Implementação de CI/CD, Docker, Kubernetes e infraestrutura em nuvem."
        },
        {
            icon: "🛡️",
            title: "Desenvolvimento Seguro",
            description: "Aplicações com foco em segurança seguindo práticas de DevSecOps."
        },
        {
            icon: "⚡",
            title: "Otimização & Performance",
            description: "Melhoria de performance, SEO e experiência do usuário em aplicações existentes."
        }
    ];

    return (
        <section className="py-20" id="services">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">
                        Serviços & Especialidades
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Soluções completas em desenvolvimento de software
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-b from-[#071325] to-[#02070E] rounded-2xl p-6 border border-blue-500/30 shadow-[0_0_20px_#0a1a2f] hover:shadow-[0_0_30px_#0a2a4f] transition-all duration-300"
                        >
                            <div className="text-3xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-200 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}