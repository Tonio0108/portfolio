import { Briefcase, Code2,Github, GraduationCap, Linkedin, Mail } from "lucide-react"
import image from './assets/image.png'
import { TypingAnimation } from "./components/ui/typing-animation"
import { AuroraText } from "./components/ui/aurora-text"
import tourisme from "./assets/tourisme.png"
import dashboard from "./assets/dashboard tourisme.png"
import factureo from "./assets/factureo.png"
import todo from "./assets/todo.png"
function App() {

  const projects = [
    {
      title: "Tour Mada Decouverte",
      description: "Landing page d'une agence touristique permettant de consulter des catalogues de circuits et réserver des tours avec système de paiement intégré.",
      tech: ["React","TypeScript", "NestJS", "Prisma", "MySQL"],
      image: tourisme,
    },
    {
      title: "Dashboard Tourisme",
      description: "Tableau de bord interactif pour la gestion des réservations, paiements et statistiques en temps réel avec rapports avancés.",
      tech: ["React", "TypeScript", "NestJS","Prisma", "MySQL"],
      image: dashboard,
    },
    {
      title: "Factureo",
      description: "Application de gestion de commandes avec génération automatique de factures A5 et système d'inventaire des produits.",
      tech: ["Vue.js", "NestJS", "MySQL", "TypeScript"],
      image: factureo
    },
    {
      title: "TODO App",
      description: "Application de gestion de tâches multi-utilisateurs avec authentification, deadlines et synchronisation en temps réel.",
      tech: ["Nuxt.js", "Supabase", "Pinia"],
      image: todo,
      github: "https://github.com/Tonio0108/Nuxt-TodoApp"
    }
  ]
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-700 text-white">
        {/* navbar */}
        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700/50 flex justify-between items-center p-4">
          <div className="flex gap-2 text-xl font-bold">
            <Code2 className="text-cyan-400" size={30} />
            <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Antonio</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-all duration-300">À propos</a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-all duration-300">Compétences</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-all duration-300">Projets</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-all duration-300">Contact</a>
          </div>
        </nav>

        <section className="pt-26 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <div className="relative border-2 border-cyan-400 p-1 rounded-full">
                  <img 
                    src={image} 
                    alt="Antonio ANDRIATSIAFORITRARIVO" 
                    width={200} 
                    height={200}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-slate-300">
                Antonio ANDRIATSIAFORITRARIVO
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 
                            bg-clip-text text-transparent mb-5">
                <AuroraText>
                  <TypingAnimation typeSpeed={80}>
                    Développeur Full Stack  
                  </TypingAnimation>
                </AuroraText>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Passionné par la création d'expériences web modernes et performantes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Me contacter
                </a>
                <a href="#projects" className="bg-slate-700/50 hover:bg-slate-600/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-slate-600/50 backdrop-blur-sm">
                  Voir mes projets
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-8">
              <a className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110" href="https://github.com/Tonio0108?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github size={28} />
              </a>
              <a className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110" href="https://www.linkedin.com/in/antonio-andriatsiaforitrarivo-5ab7b0384/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={28} />
              </a>
              <a className="text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110" href="mailto:tonioandria2@gmail.com">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </section>


        {/* A propos */}
        <section id="about" className="py-20 px-6 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                À propos de moi
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Développeur passionné avec une expertise en développement web moderne.
                  Je crée des applications performantes et intuitives en utilisant les dernières technologies.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Mon objectif est de transformer des idées complexes en solutions simples et élégantes,
                  tout en maintenant les meilleures pratiques de développement.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300">
                  <Briefcase className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-white">Expérience</h3>
                    <p className="text-slate-300">2+ années de développement web</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300">
                  <GraduationCap className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-white">Formation</h3>
                    <p className="text-slate-300">Licence en Informatique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* competences */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Compétences
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Frontend</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    React / Vue.js
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    TypeScript
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Shadcn UI
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Backend</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    NestJS / Express.js
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    PostgreSQL / MySQL
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    REST APIs
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Supabase
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Outils</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Git / GitHub
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Vite
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Figma
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    VS Code
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* projets */}
        <section id="projects" className="px-6 py-20 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projets récents
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={256}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                          <Github size={16} />
                          Code source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Contactez-moi
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Je suis toujours ouvert à de nouvelles opportunités et collaborations.
              N'hésitez pas à me contacter !
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:tonioandria2@gmail.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center gap-3"
              >
                <Mail size={20} />
                Envoyer un email
              </a>
              <a
                href="https://www.linkedin.com/in/antonio-andriatsiaforitrarivo-5ab7b0384/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/50 hover:bg-slate-600/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-slate-600/50 backdrop-blur-sm inline-flex items-center justify-center gap-3"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
