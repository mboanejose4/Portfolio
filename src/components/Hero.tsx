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
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-20 pb-10">
            {/* Efeitos de fundo */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/70 via-blue-900/40 to-transparent"></div>

            <div className="max-w-7xl mx-auto mobile-container relative z-20 w-full">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                    {/* Avatar - Topo no Mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center sm:mx-0 lg:justify-start order-1 lg:order-1 lg:mt-24"
                    >
                        <div className="relative">
                            <div className="relative flex justify-center md:justify-start mt-4">
                                <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl sm:blur-2xl opacity-30"></div>
                                <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-lg sm:shadow-2xl shadow-blue-500/30">
                                    <Image
                                        src="/avatar2.png"
                                        alt="José Mboane"
                                        fill
                                        sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-3 gap-3 sm:gap-4 mt-6"
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm"
                                    >
                                        <div className="text-blue-400 text-sm sm:text-lg mb-1 flex justify-center">
                                            {stat.icon}
                                        </div>
                                        <div className="text-white font-semibold text-xs sm:text-sm">{stat.value}</div>
                                        <div className="text-gray-400 text-xs">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Redes sociais */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4 }}
                                className="flex justify-center gap-3 sm:gap-4 mt-6"
                            >
                                {[
                                    { icon: <FiGithub />, link: "https://github.com/mboanejose4", label: "GitHub" },
                                    { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/mboane-jos%C3%A9-96b425370/", label: "LinkedIn" },
                                    { icon: <FiMail />, link: "mailto:josemboane5@gmail.com", label: "Email" }
                                ].map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        className="text-xl sm:text-2xl text-gray-500 hover:text-blue-400 transition-all duration-300 p-2 sm:p-3 rounded-xl bg-white/5 hover:bg-blue-500/20 backdrop-blur-sm"
                                        aria-label={item.label}
                                    >
                                        {item.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Informações - Abaixo no Mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-left order-2 lg:order-2 flex-1"
                    >
                        {/* Badge de status */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4 sm:mb-6"
                        >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-xs sm:text-sm font-medium">Disponível para novos projetos</span>
                        </motion.div>

                        <h1 className="mobile-title font-black tracking-tight mb-4 sm:mb-6 md:text-7xl">
                            <span className="bg-gradient-to-r from-blue-300 via-white to-cyan-300 text-transparent bg-clip-text drop-shadow-2xl">
                                José Mboane
                            </span>
                        </h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center justify-center lg:justify-start gap-2 text-blue-300 mb-4 sm:mb-6"
                        >
                            <FiMapPin className="text-lg sm:text-xl" />
                            <span className="mobile-subtitle">Moçambique, Matola</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mobile-text text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl"
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
                            className="text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-2xl mobile-text"
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
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-2xl"
                        >
                            <div className="flex items-center gap-3 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                                <FiMail className="text-blue-400 text-lg sm:text-xl" />
                                <div>
                                    <div className="text-gray-400 text-xs sm:text-sm">Email</div>
                                    <div className="text-white font-semibold text-sm sm:text-base">josemboane5@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                                <FiMapPin className="text-cyan-400 text-lg sm:text-xl" />
                                <div>
                                    <div className="text-gray-400 text-xs sm:text-sm">Telefone</div>
                                    <div className="text-white font-semibold text-sm sm:text-base">+258 871 670 831</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Botões de ação */}
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
            </div>
        </section>
    );
}