/**********************************************
 * STARTER CODE
 **********************************************/

/**
 * shuffle()
 * Shuffle the contents of an array
 *   depending the datatype of the source
 * Makes a copy. Does NOT shuffle the original.
 * Based on Steve Griffith's array shuffle prototype
 * @Parameters: Array or string
 * @Return: Scrambled Array or string, based on the provided parameter
 */
function shuffle(src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

/**********************************************
 * YOUR CODE BELOW
 **********************************************/

// Words Array
const words = ['Horse', 'Camel', 'Pigeon', 'Lizard', 'Snake', 'Shark', 'Monkey', 'Spider', 'Wolf', 'Bear']


const app = Vue.createApp({
  data: function () {
    return {
      maxGuesses: 3,
      maxPass: 3,
      pass: 3,
      words:shuffle(words),
      game: {
        active: false,
        strikes: 0,
        points: 0,
        guess: '',
        guesses: 3,
        passes: 3,   
        restartButton: false,
        resultMessage: ''

      }
    }
  },
  created: function () {
    // const game = localStorage.getItem('game')
    // if (game){
    //   this.game = JSON.parse(game)
    // }
  },
  computed: {
    word: function () {
      return this.words[0].toLowerCase() 
    },
    scrambled: function () {
      return shuffle(this.word.toUpperCase())
    }
  },
  methods: {
    verifyGuess: function () {
      this.game.guesses--
      if (this.word === this.game.guess) {
        this.game.points++
        this.game.resultMessage = 'Correct'
        this.words.shift()
        this.game.guess = ''



      } else {

        if (this.game.strikes === 2) {
          this.game.strikes++
          this.game.resultMessage = 'Game Over'
          this.restartButton = true
    
        } else {
          this.game.strikes++
          this.game.resultMessage = 'Wrong! Guess again'
          this.game.guess = ''
  
        }

      }
    },
    pass: function () {
      if (this.games.passes) {
        this.games.passes--
        this.words[0].shift()

      }

    },
    restart: function(){
  //  this.words.unshift(words.shift())
  //     this.word
  //     shuffle(this.word.toUpperCase())
      this.game.active = false
      this.game.guess = ''
      this.game.guesses = 0
      this.game.strikes = 0
      this.game.points = 0
      this.pass = 3
      this.game.resultMessage = ''
      this.restartButton = false
    
    }

  },
  watch: {
    game: {
      deep: true,
      handler: function (game) {
        localStorage.setItem('game', JSON.stringify(game))
      }
    }
  }
})

const vm = app.mount('#app')