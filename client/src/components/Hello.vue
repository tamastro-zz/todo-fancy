<template>
  <div class="hello wrapper">
    <div class="phone-viewport">
      <md-whiteframe md-elevation="5dp ">
        <md-list>
          <md-subheader>TodosHit</md-subheader>

          <md-list-item>

            <md-avatar class="md-avatar-icon md-primary">
              <md-icon>person</md-icon>
            </md-avatar>
            <span>{{user.fullname}}</span>
          </md-list-item>

          <md-divider class="md-inset"></md-divider>

          <md-subheader>Navigation</md-subheader>

          <md-list-item>
            <md-input-container>
              <md-icon>add</md-icon>
              <label>Add Tag...</label>
              <md-input></md-input>
            </md-input-container>
            <md-button class="md-dense md-primary">
              add Tag
            </md-button>
          </md-list-item>


          <md-divider class="md-inset"></md-divider>


          <md-list-item>
            <md-icon>exit_to_app</md-icon>
            <md-button class="md-warn md-raised">
              Log Out
            </md-button>
          </md-list-item>
        </md-list>
      </md-whiteframe>
    </div>

    <div class="phone-viewport">
      <md-whiteframe md-elevation="5dp" md-align="center" md-gutter="40">
        <md-list class="custom-list md-triple-line" v-for="tag in tags" :key="tag._id" v-if="tag.users.findIndex(tagUser => tagUser._id == user.id) !== -1">

          <md-list-item>


            <md-button class="md-icon-button md-primary">
              <md-icon>add</md-icon>
            </md-button>

            <md-header class="md-headline">{{tag.title}}</md-header>
            <md-button class="md-icon-button md-warn">
              <md-icon>delete</md-icon>
            </md-button>
          </md-list-item>

          <md-divider></md-divider>

          <md-list-item v-for="todo in tag.todos" :key="todo._id">

            <md-checkbox class="md-accent"></md-checkbox>


            <div class="md-list-text-container">
              <span>{{todo.title}}</span>
              <span>{{todo.user.fullname}}</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-warn">delete</md-icon>
            </md-button>

            <md-divider></md-divider>

          </md-list-item>

          <md-list-item class="md-inset">
            <md-input-container>
              <md-icon>add</md-icon>
              <label>Add Todo...</label>
              <md-input></md-input>
            </md-input-container>
            <md-button class="md-dense md-primary md-raised">
              add
            </md-button>
          </md-list-item>
          
          <md-subheader>
            <md-button class="md-icon-button md-primary">
              <md-icon>add</md-icon>
            </md-button>
            <md-chip v-for="contributor in tag.users" :key="contributor._id">{{contributor.fullname}}</md-chip>
          </md-subheader>
          <md-divider></md-divider>
        </md-list>
      </md-whiteframe>
    </div>
  </div>
</template>

<script>
  import jwtdecode from 'jwt-decode'
  export default {
    name: 'hello',
    data() {
      return {
        tags: [],
        user: []
      }
    },
    methods: {
      gettodo() {
        this.$http.get('/todo/tag', {
            headers: {
              token: window.localStorage.getItem('token')
            }
          })
          .then(response => {
            this.tags = response.data
          })
      },
      getuser() {
        var tokenid = window.localStorage.getItem('token')
        var decode = jwtdecode(tokenid)
        this.user = decode
      },
    },
    created() {
      this.gettodo()
      this.getuser()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
