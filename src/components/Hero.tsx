"use client";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiLinkedin, FiDownload, FiMapPin, FiCalendar, FiAward } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
    const stats = [
        { icon: <FiAward />, value: "3+ Anos", label: "Experiência" },
        { icon: <FiCalendar />, value: "2025", label: "Formação" },
        { icon: <FiMapPin />, value: "Matola", label: "Localização" }
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-16">
            {/* Efeitos de fundo */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/70 via-blue-900/40 to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

            {/* Partículas animadas */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{
                            opacity: [0, 1, 0],
                            y: [0, 100],
                            x: Math.sin(i) * 80
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                    {/* Avatar Redondo à Esquerda (Estilo GitHub) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1 flex justify-center lg:justify-start"
                    >
                        <div className="relative">
                            {/* Efeito de brilho atrás */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", delay: 0.3, duration: 1 }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30"></div>
                                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl shadow-blue-500/30">
                                    <Image
                                        src="/avatar2.png"
                                        alt="José Mboane"
                                        fill
                                        sizes="(max-width: 768px) 200px, 320px"
                                        className="object-cover"
                                    />
                                </div>
                                {/* Badge online */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute bottom-6 right-6 w-6 h-6 bg-green-500 border-4 border-gray-900 rounded-full"
                                >
                                    <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                                </motion.div>
                            </motion.div>

                            {/* Stats abaixo do avatar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-3 gap-4 mt-8"
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm"
                                    >
                                        <div className="text-blue-400 text-lg mb-1 flex justify-center">
                                            {stat.icon}
                                        </div>
                                        <div className="text-white font-semibold text-sm">{stat.value}</div>
                                        <div className="text-gray-400 text-xs">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Redes sociais - Mesmo espaçamento que os Stats */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4 }}
                                className="flex justify-center gap-4 mt-8"
                            >
                                {[
                                    {
                                        icon: <FiGithub />,
                                        link: "https://github.com/mboanejose4",
                                        label: "GitHub",
                                        color: "hover:text-gray-300",
                                        bg: "hover:bg-gray-500/20"
                                    },
                                    {
                                        icon: <FiLinkedin />,
                                        link: "https://www.linkedin.com/in/mboane-jos%C3%A9-96b425370/",
                                        label: "LinkedIn",
                                        color: "hover:text-blue-400",
                                        bg: "hover:bg-blue-500/20"
                                    },
                                    {
                                        icon: <FiMail />,
                                        link: "mailto:josemboane5@gmail.com",
                                        label: "Email",
                                        color: "hover:text-red-400",
                                        bg: "hover:bg-red-500/20"
                                    }
                                ].map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        whileHover={{ scale: 1.3, y: -5 }}
                                        className={`text-2xl text-gray-500 ${item.color} transition-all duration-300 p-3 rounded-2xl bg-white/5 ${item.bg} backdrop-blur-sm`}
                                        aria-label={item.label}
                                    >
                                        {item.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Informações à Direita */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2 text-center lg:text-left"
                    >
                        {/* Badge de status */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6"
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-sm font-medium">Disponível para novos projetos</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-blue-300 via-white to-cyan-300 text-transparent bg-clip-text drop-shadow-2xl">
                                José Mboane
                            </span>
                        </h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center justify-center lg:justify-start gap-2 text-blue-300 mb-6"
                        >
                            <FiMapPin className="text-xl" />
                            <span className="text-xl">Moçambique, Matola, Khongolote</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-2xl"
                        >
                            Desenvolvedor <span className="text-blue-400 font-semibold">Full-Stack</span> &
                            <span className="text-cyan-400 font-semibold"> Mobile</span> com formação em
                            <span className="text-green-400 font-semibold"> Licenciatura em Informática</span>
                        </motion.p>

                        {/* Descrição detalhada */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="text-gray-400 leading-relaxed mb-8 max-w-2xl"
                        >
                            <p className="mb-4">
                                Especializado em criar soluções modernas e escaláveis usando
                                <strong className="text-blue-400"> JavaScript/TypeScript, Vue.js, React.js, Node.js, Laravel</strong> e
                                <strong className="text-cyan-400"> React Native</strong>.
                            </p>
                            <p>
                                Apaixonado por explorar e criar soluções inovadoras usando práticas modernas de
                                <strong className="text-green-400"> DevOps, CI/CD e testes automatizados</strong>.
                            </p>
                        </motion.div>

                        {/* Informações de contato rápidas */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl"
                        >
                            <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                                <FiMail className="text-blue-400 text-xl" />
                                <div>
                                    <div className="text-gray-400 text-sm">Email</div>
                                    <div className="text-white font-semibold">josemboane5@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                                <FiMapPin className="text-cyan-400 text-xl" />
                                <div>
                                    <div className="text-gray-400 text-sm">Telefone</div>
                                    <div className="text-white font-semibold">+258 871 670 831</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Botões de ação - Mesma largura que as informações de contato */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-3 text-lg w-full"
                            >
                                <FiMail className="text-xl" />
                                Entrar em Contato
                            </motion.a>

                            <motion.a
                                href="/cv-jose-mboane.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-blue-400/50 text-blue-300 px-6 py-4 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center gap-3 text-lg w-full"
                            >
                                <FiDownload className="text-xl" />
                                Baixar CV
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-8"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-blue-400 text-2xl cursor-pointer"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        ↓
                    </motion.div>
                    <div className="text-blue-300 text-sm mt-2 text-center">Scroll</div>
                </motion.div>
            </div>
        </section>
    );
}