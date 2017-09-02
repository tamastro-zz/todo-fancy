new Vue ({
  el: '#app',
  data: {
    todolists: []
  },
  methods: {
    getlist() {
      axios.get('http://localhost:3000/todo', { 
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhbWEiLCJmdWxsbmFtZSI6IlJpemtpIFByYXRhbWEiLCJlbWFpbCI6InJwcmF0YW1hNDVAZ21haWwuY29tIiwiaWQiOiI1OWExNDBmN2MwNWNmMTMyYTg3Mjc2MGYiLCJpYXQiOjE1MDQzNjIyMTF9.fXE0r2fC_BufRiFJHhyuG51rjb4GxvaZ-3m3z6_pinA'
        }
      })
      .then(response => {
        this.todolists = response.data
      })
    }
  },
  created: function() {
    this.getlist()
  }
})