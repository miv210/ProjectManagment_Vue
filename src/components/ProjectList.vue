<template>
    <div>
        <table class="table table-hover">
            <thead>
                <tr class="table-dark">
                    <td>Название проекта</td>
                    <td>Руководитель проекта</td>
                    <td>Приоритет проекта</td>
                    <td>Дата начала проекта</td>
                    <td>Дата окончаиния проекта</td>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects"  > 
                    <td> {{project.nameProject}}</td>
                    <td> 
                      {{project.idManagerNavigation.surname}} 
                      {{project.idManagerNavigation.name}} 
                      {{project.idManagerNavigation.patronymic}}
                    </td>
                    <td> {{project.projectPriority}} </td>
                    <td> {{project.projectStartDate}} </td>
                    <td> {{project.projectEndDate}} </td>
                    
                </tr>
            </tbody>
        </table>   
  </div>
</template>

<script>
    
    export default {
    data() {
      return {
        projects: []
      }
    },
    
    created(){
      this.$load(async()=> {
        this.projects = (await this.$api.projects.getAll()).data
      })
    }
    
  }
</script>