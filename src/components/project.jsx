export default function Project({title, project_url}) {
    return (
        <div>
            <h3>{title}</h3>
            <a href={project_url}>Check it out</a>
            <br />
        </div>
    )
}