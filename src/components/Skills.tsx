"use client";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiSmartphone, FiCloud, FiShield } from "react-icons/fi";

export default function Skills() {
    const skillCategories = [
        {
            icon: <FiCode />,
            title: "Frontend",
            skills: ["JavaScript", "TypeScript", "React.js", "Vue.js", "Redux", "HTML5", "CSS3", "Bootstrap"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FiDatabase />,
            title: "Backend",
            skills: ["Node.js", "Laravel", "PHP", "REST APIs", "PHPUnit", "Jest"],
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <FiSmartphone />,
            title: "Mobile",
            skills: ["React Native", "Mobile UI/UX"],
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <FiCloud />,
            title: "DevOps & Cloud",
            skills: ["Docker", "Kubernetes", "CI/CD", "Git", "GitHub", "Linux"],
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <FiDatabase />,
            title: "Base de Dados",
            skills: ["MySQL", "MongoDB", "Database Design", "SQL"],
            color: "from-yellow-500 to-amber-500"
        },
        {
            icon: <FiShield />,
            title: "Conceitos & Outros",
            skills: ["DevSecOps", "Clean Architecture", "SOLID", "MVC", "WordPress", "Excel Avançado"],
            color: "from-indigo-500 to-blue-500"
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800" id="skills">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_#3b82f6_1px,_transparent_0)] bg-[length:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                            Stack Tecnológica
                        </span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Tecnologias e ferramentas que domino para criar soluções completas e modernas
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-8"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group"
                        >
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 shadow-2xl shadow-black/50 h-full transition-all duration-300">
                                {/* Category header */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-2xl text-white">
                                        {category.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-200 mb-4 group-hover:text-white transition-colors">
                                    {category.title}
                                </h3>

                                {/* Skills list */}
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.1 }}
                                            className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} text-white shadow-lg`}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
                        <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                            Sempre aprendendo e evoluindo
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Mantenho-me atualizado com as últimas tendências e melhores práticas
                            do desenvolvimento de software para entregar soluções modernas e eficientes.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}