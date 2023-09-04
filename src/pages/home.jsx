import Project from '../components/project'
import styles from '../styles/home.module.css'

export default function Home() {
  const projects = [
    {
      id:1, 
      title: "Brewery Finder", 
      project_url: "https://brewery-finder-group2-fall.herokuapp.com/"
    },
    {
      id:2,
      title: "Unsplash Photography",
      project_url: "https://jpearsallufl.github.io/m12-hw12-pearsall-jacob/" 
    },
    {
      id:3,
      title: "Capstone",
      project_url: "https://www.disney.com/"
    }
  ]
  return (
    <main>
      <div>
        <h1>Jacob Vires</h1>
        <h2>Software Engineer</h2>
        <br />
      </div>
      <div>
        <h3>Latest Work</h3>
        <section>
          {projects.map(project => (
            <Project key = {project.id} name = {project.title} project_url = {project.project_url}/>))}
        </section>
      </div>
    </main>
  )
}