"use client";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_#3b82f6_1px,_transparent_0)] bg-[length:30px_30px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Main footer content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            José Mboane
                        </h3>
                        <p className="text-gray-400 leading-relaxed max-w-md text-justify">
                            Desenvolvedor Full-Stack & Mobile especializado em criar soluções modernas,
                            escaláveis e de alta performance usando as melhores tecnologias e práticas do mercado.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-4 mt-6">
                            {[
                                { icon: <FiGithub />, link: "https://github.com/mboanejose4", label: "GitHub" },
                                { icon: <FiLinkedin />, link: "https://linkedin.com/in/jose-mboane", label: "LinkedIn" },
                                { icon: <FiMail />, link: "mailto:josemboane5@gmail.com", label: "Email" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 bg-gray-800 hover:bg-blue-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-blue-500"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">Navegação</h4>
                        <ul className="space-y-3">
                            {["Início", "Sobre", "Skills", "Projetos", "Contacto"].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
                        <ul className="space-y-3">
                            {[
                                "Desenvolvimento Web",
                                "Apps Mobile",
                                "APIs REST",
                                "DevOps & CI/CD",
                                "Consultoria Tech"
                            ].map((service, index) => (
                                <li key={index}>
                                    <span className="text-gray-400">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <div className="text-gray-400 text-sm flex items-center gap-2">
                        © {currentYear} José Mboane. Todos os direitos reservados.
                    </div>

                    <div className="text-gray-400 text-sm flex items-center gap-2">
                        Made with <FiHeart className="text-red-500" /> and lots of coffee
                    </div>

                    <div className="text-gray-400 text-sm">
                        <a
                            href="mailto:josemboane5@gmail.com"
                            className="hover:text-blue-400 transition-colors"
                        >
                            josemboane5@gmail.com
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}