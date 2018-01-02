 <template>
    <div class="flexDisplay handCursor">  
      <span class="customCenterAlign">
          <input type="radio" :value="label" v-model="radioButtonValue" :id="uniqueID" class="showSelectedRadio">
          <label class="handCursor  customCenterAlign" tabindex="1" :for="uniqueID">
              <span> </span> 
          </label>
      </span>
      <button v-on:click="update()" class="text-left ml-2 pt-3 pb-3 pb-sm-3 francisco inputColor fullWidth"> {{label}} </button>
    </div>
    
 </template>

<script>
    export default {
      name: 'radio-smooth',
      props: ['label', 'value'],
      computed: {
        radioButtonValue: {
          get: function () {
            return this.value
          },
          set: function () {
            // Communicate the change to parent component so that selectedValue can be updated
            this.$emit('change', this.label)
          }
        },
        uniqueID: function () {
          var text = ''
          var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
          for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length))
          }
          return text
        }
      },
      methods: {
        update: function () {
          this.radioButtonValue = this.value
          this.$emit('change', this.label)
        }
      }
    }
</script>
