"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiFolder, FiMail } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: "Início", href: "#home", icon: <FiHome /> },
        { name: "Sobre", href: "#about", icon: <FiUser /> },
        { name: "Skills", href: "#skills", icon: <FiCode /> },
        { name: "Projetos", href: "#projects", icon: <FiFolder /> },
        { name: "Contacto", href: "#contact", icon: <FiMail /> }
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Efeito de blur no scroll
            setIsScrolled(window.scrollY > 50);

            // Detecção de seção ativa
            const sections = navItems.map(item => item.href.substring(1));
            const scrollY = window.scrollY + 100;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollY >= offsetTop && scrollY < offsetBottom) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, );

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-700/50 shadow-2xl'
                    : 'bg-gray-900/70 backdrop-blur-sm border-b border-gray-700/30'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">JM</span>
                        </div>
                        <span className="text-white font-semibold text-lg">José Mboane</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.href.substring(1)
                                        ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                                        : "text-gray-300 hover:text-blue-400 hover:bg-white/5"
                                    }`}
                            >
                                {item.icon}
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden py-4 border-t border-gray-700/50"
                    >
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.href.substring(1)
                                            ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                                            : "text-gray-300 hover:text-blue-400 hover:bg-white/5"
                                        }`}
                                >
                                    {item.icon}
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}