"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
    const services = [
        {
            image: "/layer.png",
            title: "Desenvolvimento Full-Stack",
            description: "Soluções completas com React, Vue.js, Node.js e Laravel para aplicações web modernas e escaláveis."
        },
        {
            image: "/mobile.png",
            title: "Desenvolvimento Mobile",
            description: "Aplicações mobile nativas e híbridas com React Native para iOS e Android."
        },
        {
            image: "/database1.png",
            title: "Base de Dados",
            description: "Design e otimização de base de dados relacionais e não-relacionais com MySQL e MongoDB."
        },
        {
            image: "/devopscloud.png",
            title: "DevOps & Cloud",
            description: "Implementação de CI/CD, Docker, Kubernetes e infraestrutura em nuvem."
        },
        {
            image: "/security.png",
            title: "Desenvolvimento Seguro",
            description: "Aplicações com foco em segurança seguindo práticas de DevSecOps."
        },
        {
            image: "/optimization.png",
            title: "Otimização & Performance",
            description: "Melhoria de performance, SEO e experiência do usuário em aplicações existentes."
        }
    ];

    return (
        <section className="py-20" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                            Serviços & Especialidades
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
                        Soluções completas em desenvolvimento de software
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-8"></div>
                </motion.div>

                {/* Timeline Layout para Desktop */}
                <div className="hidden lg:block relative max-w-6xl mx-auto">
                    {/* Linha central da timeline com gradiente */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
                        <div className="w-full h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 rounded-full"></div>
                    </div>

                    {/* Itens da Timeline */}
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                            >
                                {/* Card do serviço */}
                                <div className={`w-[45%] ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.03, y: -5 }}
                                        className="group relative bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-2xl p-8 border border-blue-500/20 shadow-2xl shadow-black/50 hover:shadow-blue-500/30 transition-all duration-500 backdrop-blur-sm"
                                    >
                                        {/* Efeito de brilho no hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative z-10 flex items-center gap-8">
                                            {/* Lado Esquerdo - Imagem/Ícone */}
                                            <div className="flex-shrink-0">
                                                <div className="relative">
                                                    {service.image ? (
                                                        <div className="w-20 h-20 relative">
                                                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                                                            <Image
                                                                src={service.image}
                                                                alt={service.title}
                                                                width={80}
                                                                height={80}
                                                                className="relative z-10 object-contain transform group-hover:scale-110 transition-transform duration-500"
                                                                onError={(e) => {
                                                                    console.error(`Erro ao carregar imagem: ${service.image}`);
                                                                    e.currentTarget.style.display = 'none';
                                                                }}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-3xl transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/25">
                                                            {service.image}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Lado Direito - Conteúdo */}
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-white transition-colors duration-300">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Ponto na linha da timeline */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                                    <motion.div
                                        whileHover={{ scale: 1.3 }}
                                        className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 shadow-2xl shadow-blue-500/50"
                                    >
                                        <div className="w-full h-full bg-white/20 rounded-full"></div>
                                    </motion.div>
                                </div>

                                {/* Espaço vazio do outro lado */}
                                <div className="w-[45%]"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Grid para Tablet e Mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="lg:hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -3 }}
                                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-blue-500/20 shadow-xl shadow-black/40 hover:shadow-blue-500/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-6">
                                    {/* Lado Esquerdo - Imagem/Ícone */}
                                    <div className="flex-shrink-0">
                                        {service.image ? (
                                            <div className="w-16 h-16 relative">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    width={64}
                                                    height={64}
                                                    className="relative z-10 object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/25">
                                                {service.image}
                                            </div>
                                        )}
                                    </div>

                                    {/* Lado Direito - Conteúdo */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-white transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}