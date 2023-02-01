<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">PM</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink to="/">
                  <a class="nav-link active" aria-current="page" href="#">Проекты</a>
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/workers">
                  <a class="nav-link" href="#">Сотрудники</a>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  </header>
  <div class="container">
    <RouterView/>
  </div>
</template>

<script setup>
  
  import { RouterLink, RouterView } from 'vue-router'
</script>


<style>

</style>
