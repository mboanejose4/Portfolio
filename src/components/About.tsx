"use client";
import { motion } from "framer-motion";
import { FiAward, FiTarget, FiUser } from "react-icons/fi";

export default function About() {
    const stats = [
        { number: "1+", label: "Anos de Experiência", icon: <FiUser /> },
        { number: "3+", label: "Projetos Concluídos", icon: <FiAward /> },
        { number: "5+", label: "Tecnologias Dominadas", icon: <FiTarget /> }
    ];

    return (
        <section className="mobile-section relative overflow-hidden" id="about">
            <div className="max-w-6xl mx-auto mobile-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-20"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                            Sobre Mim
                        </span>
                    </h2>
                    <div className="w-16 h-0.5 sm:w-24 sm:h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 sm:mb-8"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200 mb-4 sm:mb-6">
                            Transformando ideias em soluções digitais
                        </h3>

                        <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed mobile-text">
                            <p className="text-justify">
                                Desenvolvedor de software com formação em <strong className="text-blue-400">Licenciatura em Informática</strong>, 
                                na Universidade Eduardo Mondlane (UEM) focado em desenvolvimento 
                                <strong className="text-cyan-400"> full-stack</strong> e <strong className="text-cyan-400"> mobile</strong>.
                            </p>

                            <p className="text-justify">
                                Minha stack principal inclui <strong>JavaScript/TypeScript, Vue.js, React.js, Node.js, Laravel</strong> e
                                <strong> React Native</strong>. Especializado em criar aplicações escaláveis.
                            </p>

                            <p className="text-justify">
                                Com conhecimentos sólidos em <strong>DevOps, CI/CD, testes automatizados</strong> e
                                arquitetura de software.
                            </p>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400 mb-1 sm:mb-2 flex items-center justify-center gap-1 sm:gap-2">
                                        {stat.icon}
                                        {stat.number}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-400 leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Skills preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {[
                                { name: "Full-Stack", level: 80 },
                                { name: "Mobile", level: 65 },
                                { name: "DevOps", level: 25 },
                                { name: "UI/UX", level: 60 }
                            ].map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-500/20 shadow-lg sm:shadow-xl"
                                >
                                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                                        <span className="text-gray-200 font-semibold text-sm sm:text-base">{skill.name}</span>
                                        <span className="text-blue-400 text-xs sm:text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                                            viewport={{ once: true }}
                                            className="bg-gradient-to-r from-blue-400 to-cyan-400 h-1.5 sm:h-2 rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}