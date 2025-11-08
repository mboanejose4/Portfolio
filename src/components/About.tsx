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
        <section className="py-32 relative overflow-hidden" id="about">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                            Sobre Mim
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-semibold text-gray-200 mb-6">
                            Transformando ideias em soluções digitais
                        </h3>

                        <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
                            <p>
                                Desenvolvedor de software com formação em <strong className="text-blue-400">Licenciatura em Informática</strong>, na Universidade Eduardo Mondlane (UEM)
                                focado em desenvolvimento <strong className="text-cyan-400">full-stack</strong> e <strong className="text-cyan-400">mobile</strong>.
                                Apaixonado por explorar e criar soluções inovadoras usando práticas modernas.
                            </p>

                            <p>
                                Minha stack principal inclui <strong>JavaScript/TypeScript, Vue.js, React.js, Node.js, Laravel</strong> e
                                <strong> React Native</strong>. Especializado em criar aplicações escaláveis com foco em
                                <strong> performance, segurança e boas práticas de desenvolvimento</strong>.
                            </p>

                            <p>
                                Com conhecimentos sólidos em <strong>DevOps, CI/CD, testes automatizados</strong> e
                                arquitetura de software, busco sempre entregar soluções que agreguem valor real
                                e proporcionem excelente experiência ao usuário.
                            </p>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-3 gap-6 mt-12"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-blue-400 mb-2 flex items-center justify-center gap-2">
                                        {stat.icon}
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
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
                        className="grid grid-cols-2 gap-6"
                    >
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
                                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-blue-500/20 shadow-xl"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-gray-200 font-semibold">{skill.name}</span>
                                    <span className="text-blue-400 text-sm">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                                        viewport={{ once: true }}
                                        className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}