import instance from './instance'

import projectsModule from './projects'

export default {
    projects: projectsModule(instance)
}