<template>
  <div class="login">

    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>

      <md-card-content id="login" v-if="login == true">
        <md-input-container>
          <label>Username</label>
          <md-input v-model="username"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Password</label>
          <md-input type="password" v-model="password"></md-input>
        </md-input-container>
      </md-card-content>


      <md-card-content id="register" v-if="login == false">
        <md-input-container>
          <label>Username</label>
          <md-input v-model="username"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Password</label>
          <md-input type="password" v-model="password"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Email</label>
          <md-input type="email" v-model="email"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Full Name</label>
          <md-input type="text" v-model="text"></md-input>
        </md-input-container>


      </md-card-content>


      <md-card-actions v-if="login == true">
        <md-button @click="loginnow">Log In</md-button>
        <md-button @click="regis">Register</md-button>
      </md-card-actions>


      <md-card-actions v-if="login == false">
        <md-button @click="signup">Sign Up</md-button>
        <md-button @click="cancel">Cancel</md-button>
      </md-card-actions>

    </md-card>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        login: true,
        username: '',
        password: '',
        email: '',
        fullname: ''
      }
    },
    methods: {
      regis() {
        this.login = false
      },
      cancel() {
        this.username = '',
          this.password = '',
          this.email = '',
          this.fullname = ''
        this.login = true
      },
      signup() {
        this.$http.post('/signup', {
            username: this.username,
            password: this.password,
            email: this,
            email,
            fullname: this.fullname
          })
          .then(data => {
            this.username = '',
              this.password = '',
              this.email = '',
              this.fullname = ''
            this.login = true
          })
      },
      loginnow() {
        this.$http.post('/signin', {
            username: this.username,
            password: this.password
          })
          .then(data => {
            this.username = '',
              this.password = ''
            if (data.data.length < 15) {
              this.error = 'ada yang salah'
            } else {
              window.localStorage.setItem('token', data.data)
              this.$router.push('/todos')
            }
          })
      }
    }
  }

</script>

<style>


</style>
