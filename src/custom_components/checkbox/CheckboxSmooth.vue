 <template>
    <div class="flexDisplay handCursor">  
      <span class="customCenterAlign">
          <input :value="val" @change="updateValue" v-model="checked" :id="uniqueID" type="checkbox" class="showSelectedCheckbox"> </input>
          <label class="pl-2 handCursor mb-1 customCenterAlign" tabindex="1" :for="uniqueID">
              <span> </span> 
          </label>
      </span>
      <button v-on:click="update()" class="text-left ml-2 pt-3 pb-3 pb-sm-3 francisco inputColor fullWidth"> {{label}} </button>
    </div>
 </template>

<script>
    export default {
      name: 'checkbox-smooth',
      props: ['value', 'val', 'label'],
      data: function () {
        return {
          checkedProxy: false
        }
      },
      computed: {
        checked: {
          get () {
            return this.value
          },
          set (val) {
            this.checkedProxy = val
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
        updateValue: function (event) {
          this.$emit('input', this.checkedProxy)
        },
        update () {
          this.checkedProxy = !this.checkedProxy
          this.$emit('input', this.checkedProxy)
        }
      }
    }
</script>
