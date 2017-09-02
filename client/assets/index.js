new Vue ({
  el: '#app',
  data: {
    todolists: []
  },
  methods: {
    getlist() {
      axios.get('http://localhost:3000/todo/tag', { 
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRhbWEiLCJmdWxsbmFtZSI6IlJpemtpIFByYXRhbWEiLCJlbWFpbCI6InJwcmF0YW1hNDVAZ21haWwuY29tIiwiaWQiOiI1OWExNDBmN2MwNWNmMTMyYTg3Mjc2MGYiLCJpYXQiOjE1MDQzNjIyMTF9.fXE0r2fC_BufRiFJHhyuG51rjb4GxvaZ-3m3z6_pinA'
        }
      })
      .then(response => {
        this.todolists = response.data
      })
    },
    randomcolor() {
      var words = ["red", "yellow", "teal", "orange", "blue", "green", "lime", 'grey', 'pink', 'purple', 'cyan', 'brown'];
      var word = words[Math.floor(Math.random() * words.length)];
      return word
    }
  },
  created: function() {
    this.getlist()
  }
})