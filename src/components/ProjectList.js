import ProjectItem from './ProjectItem'

const ProjectList = ({ projects }) => {
  const projectItems = projects.map(p => { 
    return <ProjectItem
      key={p.id}
      name={p.name}
      about={p.about}
      technologies={p.technologies}
    />
  })

	return (
		<div id='projects'>
			<h2>My Projects</h2>
			<div id='project-list'>
				{projectItems}
			</div>
		</div>
)}

export default ProjectList
