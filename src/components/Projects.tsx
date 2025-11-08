"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Sistema de Gestão de Furo de água",
            description: "Web application para gerir funcionaários e clientes, bem como a emissão de facturas e pagamaento online.",
            technologies: ["React", "Node.js", "MySql", "Express", "JWT"],
            image: "/project-academic.png",
            github: "https://github.com/mboanejose4/RodAgua_React_Frontend",
            live: "https://academic-system.demo.com",
            featured: true
        },
        {
            id: 2,
            title: "ServiMoz - App Mobile",
            description: "Aplicativo para localizar estabelecimentos públicos que dispõem de vários serviços e agandar um determinado serviço.",
            technologies: ["React Native", "Laravel", "Stripe", "Redux"],
            image: "/project-ecommerce.png",
            github: "https://github.com/mboanejose4/ecommerce-app",
            featured: true
        },
        {
            id: 3,
            title: "API REST Laravel",
            description: "API robusta para gestão de conteúdos com autenticação, autorização e documentação completa.",
            technologies: ["Laravel", "MySQL", "PHPUnit", "Postman"],
            image: "/project-api.png",
            github: "https://github.com/mboanejose4/servimoz_api_backend",
            live: "https://api.demo.com/docs",
            featured: false
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden" id="projects">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                            Projetos em Destaque
                        </span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Soluções reais desenvolvidas com as melhores práticas e tecnologias modernas
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-8"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* Featured badge */}
                            {project.featured && (
                                <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                                    <FiStar className="text-sm" />
                                    Destaque
                                </div>
                            )}

                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 shadow-2xl shadow-black/50 h-full transition-all duration-300 group-hover:shadow-blue-500/20">
                                {/* Project image */}
                                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('/project-pattern.png')] opacity-10"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl text-blue-400/30">{"{}"}</div>
                                    </div>
                                </div>

                                {/* Project content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-200 mb-3 group-hover:text-white transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium border border-gray-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex gap-4">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-300 py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <FiGithub className="text-lg" />
                                            Código
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            target="_blank"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <FiExternalLink className="text-lg" />
                                            Demo
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
                        <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                            Interessado em trabalhar juntos?
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            Vamos transformar sua ideia em uma solução digital incrível.
                            Entre em contato para discutirmos seu projeto.
                        </p>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all duration-300"
                        >
                            Iniciar Projeto
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}