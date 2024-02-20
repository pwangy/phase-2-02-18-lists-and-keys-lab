const ProjectItem = ({ name, about, technologies }) => {
	return (
		<div className='project-item'>
			<h3>{name}</h3>
			<p>{about}</p>
			<div className='technologies'>
				{technologies.map(
          t => <span key={t}>{t}</span>
				)}
			</div>
		</div>
	)
}

export default ProjectItem