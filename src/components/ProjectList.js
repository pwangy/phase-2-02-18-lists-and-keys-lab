import ProjectItem from './ProjectItem'

const ProjectList = ({ projects }) => {
	console.log(projects)
	return (
		<div id='projects'>
			<h2>My Projects</h2>
			<div id='project-list'>
				{/* render ProjectItem components here */}
			</div>
		</div>
)}

export default ProjectList