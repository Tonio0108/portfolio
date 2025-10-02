import { Briefcase, Code2, ExternalLink, Github, GraduationCap, Linkedin, Mail } from "lucide-react"
import image from './assets/image.png'
import { TypingAnimation } from "./components/ui/typing-animation"
import { AuroraText } from "./components/ui/aurora-text"
function App() {

  const projects = [
              {
                title: "Plateforme E-commerce",
                description: "Application complète de commerce électronique avec panier, paiement et gestion des commandes.",
                tech: ["React", "Node.js", "PostgreSQL"],
                image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
                url: "https://www.google.com"
              },
              {
                title: "Dashboard Analytique",
                description: "Tableau de bord interactif avec visualisation de données en temps réel et rapports personnalisés.",
                tech: ["TypeScript", "React", "Supabase"],
                image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
                url: 'facebook.com'
              },
              {
                title: "Application Mobile",
                description: "Application de gestion de tâches avec synchronisation cloud et notifications push.",
                tech: ["React Native", "Firebase"],
                image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
                url: "github.com"
              },
              {
                title: "API REST",
                description: "API robuste et scalable avec authentification JWT et documentation Swagger.",
                tech: ["Node.js", "Express", "MongoDB"],
                image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
                url: "github.com"
              }
            ]

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-700 text-white">
        {/* navbar */}
        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop:blur-sm z-50 border-b border-slate-700 flex justify-between items-center p-4">
          <div className="flex gap-2 text-xl font-bold">
            <Code2 className="text-cyan-400" size={30} />
            <h1>Antonio </h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-cyan-400 transition">A propos</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Compétences</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projets</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </nav>

        <section className="pt-32 pb-20 px-6">
          <div className="md:max-w-6xl mx-auto">
            <div className="text-center">
              <div className="border-2 border-cyan-400 p-1 mx-auto rounded-full mb-5 w-fit">
                <img 
                  src={image} 
                  alt="image" 
                  width={200} 
                  className="rounded-full"
                />
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-3xl">
                Antonio ANDRIATSIAFORITRARIVO
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-br from-cyan-400 to-blue-500 
                            bg-clip-text text-transparent mb-5">
                <AuroraText>
                  <TypingAnimation typeSpeed={80}>
                    Développeur Full Stack  
                  </TypingAnimation>
                </AuroraText>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-5">
                Passioné par la création d'expériences web modernes et performantes
              </p>
              <div className="flex gap-4 justify-center">
                <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Me contacter
                </a>
                <a href="#projects" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                  Voir mes projets
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-8 mt-8">
              <a className="text-slate-400 hover:text-cyan-400 transition" href="https://github.com/Tonio0108?tab=repositories" target="_blank">
                <Github size={28} />
              </a>
              <a className="text-slate-400 hover:text-cyan-400 transition" href="https://www.linkedin.com/in/antonio-andriatsiaforitrarivo-5ab7b0384/" target="_blank">
                <Linkedin size={28} />
              </a>
              <a className="text-slate-400 hover:text-cyan-400 transition" href="mailto:tonioandria2@gmail.com">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </section>


        {/* A propos */}
        <section id="about" className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">À propos de moi</h2>
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
                <div  className="flex items-start gap-4 bg-linear-to-br from-slate-700/50 to-slate-600/100 p-6 rounded-lg">
                  <Briefcase className="text-cyan-400 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Expérience</h3>
                    <p className="text-slate-300">2+ années de développement web</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-linear-to-br from-slate-700/50 to-slate-600/100 p-6 rounded-lg">
                  <GraduationCap className="text-cyan-400 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Formation</h3>
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
            <h2 className="text-4xl font-bold mb-12 text-center">Compétences</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-lg hover:bg-slate-800 transition-all transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Frontend</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>• React / Vue.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Shadcn UI</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-lg hover:bg-slate-800 transition-all transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Backend</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>• NestJS / Express.js</li>
                  <li>• PostgreSQL</li>
                  <li>• REST APIs</li>
                  <li>• Supabase</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-lg hover:bg-slate-800 transition-all transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Outils</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>• Git / GitHub</li>
                  <li>• Vite</li>
                  <li>• Figma</li>
                  <li>• VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* projets */}
        <section id="projects" className="px-6 py-20 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Projets récents</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-slate-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.url} target="_blank" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                      Voir le projet <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Contactez-moi</h2>
            <p className="text-xl text-slate-300 mb-12">
              Je suis toujours ouvert à de nouvelles opportunités et collaborations.
              N'hésitez pas à me contacter!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:contact@example.com"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Envoyer un email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
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
