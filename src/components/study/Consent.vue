<template>
  <div ref="dockedLayout" class="docked-layout">
    <MainNav title="Consent" :show-back="!review"/>
    <section>
      <div class="consent-viewer-holder">
        <ConsentViewer :highlight-id="highlightId"/>
      </div>
      <div class="summary">
        <div v-if="step === 1">
          <h3 class="activities">Activities & Surveys</h3>
          <ul>
            <li>We will ask you to do activities on your phone like tapping your fingers or holding your phone steady.</li>
            <li>We will as you to do the activities a certain number of times. But you can do them as often as you like.</li>
            <li>We will ask you questions about your health and your medical history.</li>
          </ul>
        </div>
        <div v-if="step === 2">
          <h3 class="sensors">Sensor data</h3>
          <ul>
            <li>In some activities on the app, we will use data from the sensors in your phone. </li>
            <li>We will also ask for data from your phone about your overall physical activity.</li>
            <li>You can decide what data you want to share with us.</li>
          </ul>
        </div>
        <div v-if="step === 3">
          <h3 class="trends">View your data trends</h3>
          <ul>
            <li>You can view your data at any time.</li>
            <li>When you look at your data you may notice patterns.</li>
            <li>Seeing health patterns can generate a wide range of emotions.</li>
          </ul>
        </div>
        <div v-if="step === 4">
          <h3 class="privacy">Your privacy</h3>
          <ul>
            <li>We will protect your privacy to the best of our ability. </li>
            <li>Your study data will be encrypted on your phone. </li>
            <li>We will replace your name with a random code.</li> 
            <li>We will store your study data on a secure cloud server. But we cannot promise total privacy.</li>
          </ul>
        </div>
        <div v-if="step === 5">
          <h3 class="usage">Data use</h3>
          <ul>
            <li>Your coded study data will be used for research. </li>
            <li>It will be combined with data from other volunteers. </li>
            <li>It will be transferred to an analysis platform in the United States. </li>
          </ul>
        </div>
        <div v-if="step === 6">
          <h3 class="time">Time commitment</h3>
          <ul>
            <li>This study will take about 10 minutes per day. Some days we will ask for you more time than others.</li>
            <li>The time you spend on the app may count against your mobile data plan.</li>
            <li>You can set up the app to use Wi-Fi connections to avoid using your mobile data.</li>
          </ul>
        </div>
        <div v-if="step === 7">
          <h3 class="surveys">Study surveys</h3>
          <ul>
            <li>We will ask you to update your answers about your health and medical history.</li>
            <li>We may ask you other questions about how you use the app.</li>
          </ul>
        </div>
        <div v-if="step === 8">
          <h3 class="benefits">Potential benefits</h3>
          <ul>
            <li>Your participation could help researchers understand chronic anemia better. </li>
            <li>You may or may not benefit from this research study. </li>
          </ul>
        </div>
        <div v-if="step === 9">
          <h3 class="risks">Potential risks</h3>
          <ul>
            <li>If you participate in this study, your privacy may be at risk.</li>
            <li>There may be other risks to participating that we do not know about yet.</li>
          </ul>
        </div>
        <div v-if="step === 10">
          <h3 class="research">NOT medical care</h3>
          <ul>
            <li>mPower is not used for medical care, it is a research study. </li>
            <li>The mPower app is not a diagnosis tool. </li>
            <li>We do not give medical advice or treatment recommendations. </li>
          </ul>
        </div>
        <div v-if="step === 11">
          <h3 class="contact">Follow up</h3>
          <ul>
            <li>We might want to reach out to you.</li>
            <li>You can opt out of these follow up notifications at any time.</li>
          </ul>
        </div>
        <div v-if="step === 12">
          <h3 class="quitable">Pause or quit</h3>
          <ul>
            <li>Your participation is voluntary. </li>
            <li>You can pause your participation or you can leave the study at any time.</li>
          </ul>
        </div>
        <div v-if="step === 13">
          <h3 class="consider">Think it over</h3>
          <ul>
            <li>Your participation is voluntary. </li>
            <li>Take time to think it over and ask questions. </li>
          </ul>
        </div>
      </div>
    </section>
    <NavFooter v-if="review" label="Back" @click="backToReview"/>
    <Footer v-else :step="step" :total-steps="totalSteps" :next-enabled="nextEnabled"
      v-on:back="doBack" v-on:next="doNext" v-on:submit="doSubmit" submit-label="Done"/>
  </div>
</template>

<script>
import ConsentViewer from './ConsentViewer.vue'
import Footer from './Footer.vue'
import MainNav from './MainNav.vue'
import NavFooter from './NavFooter.vue'
import Store from '../store'

const REFERENCE_IDS = ['activities', 'activities', 'risks', 'privacy', 'data-use', 'time', 
  'surveys', 'benefits', 'risks', 'not-medical-care', 'notifications', 'voluntary'];

export default {
  name: 'StudyConsent',
  components: { ConsentViewer, Footer, MainNav, NavFooter },
  data() {
    return {
      step: 1,
      totalSteps: 13,
      review: false,
      highlightId: ''
    }
  },
  computed: {
    nextEnabled() {
      return true
    }
  },
  created() { 
    if (this.$route.query.review) {
      this.review = true
      this.step = parseInt(this.$route.query.review)
    }
  },
  mounted() {
    this.highlightId = REFERENCE_IDS[this.step];
  },
  methods: {
    scrollTo(delta) {
      this.step += delta
      this.highlightId = REFERENCE_IDS[this.step]
    },
    doBack() {
      if (this.step > 1) {
        this.scrollTo(-1)
      }
    },
    doNext() {
      if (this.step < this.totalSteps) {
        this.scrollTo(1)
      }
    },
    doSubmit() {
      this.$store.setCurrentStep(Store.CONSENT_DONE)
      this.$router.push('/study/overview')
    },
    backToReview() {
      this.$router.push('/study/retake-quiz')
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
  padding: 0;
}
.summary {
  margin: 2rem 0;
  width: 40%;
  font-size: .9rem;
}
.summary h3 {
  padding: 1rem 1rem 1rem 3.5rem;
  background-repeat: no-repeat;
  background-size: contain;
}
  /* These images are inlined because in tests, they were slow to load when the screens appeared. */
  .activities {
      background-image: url(data:image/png;base64,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);
  }
  .sensors {
      background-position: 5px 0px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAACwCAMAAADpPbq3AAAAvVBMVEX///+HyNdaR49MPHd8t8VJW3pYRYtrd6rSzt2Bv852qLvr6PFfV5iDdavp6+/S1t5gb4v19fhuXp12hJu7wc2vt8SkrbyNmKxUZoLd4eaBjqNUZYKZo7RrepPp5+7GzNbButWXi7ddaZNfb4tSTIG8ts15bZlqW5aso8eyq8WakbONgK6Nmax3aKJkUpZXSH/W0ePLxty3rs6nnr1sepNeUJJuYZBiVIi7ws2glr3g3eqkrb2Ac6dnc6OEeaFS4+UkAAADA0lEQVR42u3b2XLaMBSA4VNSCC3BtvBusA2l7DsBknR7/8dqcULPeEFUxnKTyfnvMpOZL7LEkS8CvMKYas79frtarfZ9z1IZSI+Z+h8ulm6A1FS9mpUO8jK06plckJSKZCoVpKToSDieGboKAHNV0zv+KTuQktn+K35PLEu1TCkHmNknUkdRcopWOgnui+kYUFruy3Z6DEoKTRNKCvfTKW030dQUKDHvP5gWmpk3nKf7ut4xlEIf7vlxrsZuOM0oDtXOnFtmtaWNfKN6zOYMYmxe6EI1hXPfYJ1CF5rcrUe8b/SOEaqqaWsFnm8t603EwjcjhqfKLXZHlYQp+b7xoymfMCXfN0rGJ8F8NncyBhQuSsuaFTYDWfnpD4L2bIK0GA7A+IbuQF5h6ukq8i8cK3V2bZwVEsKL1Eot1AaZRQM25MwKGfWTn1Jf/kIB15WYFenYettrCvZjOJxO6pdQA09zvMbTsiJe7ebYwyTgovaZpzupCXKIRuwAAHMQTR8srCfuIRp1nzpIqZ8TPVWuRm8GicNqZD5ubFArAF3h/THHeX8eHVWuQdMP2EycVicDrdcKQXGpCt4yuKfhv5+iZSteGs3aVSc+fL2M1+4FB21AvC4HncKpTvz5djJeDTlPdwHJOOgBXyuPio8/pk9SwNvSbZxkYw76EJ9BRuIkhdefI0QxwAxLTd7qilwUw111HqE8FHvf6N1tjn5+icqN3n7I0aePxz4TSiihhBJKKKGEEkoooYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKGEEkoooYQSSiihhBJKKKGEEvoK0f1djvZfo97W/+ETGrVoNstGZw0AaIxLRcf4/afS0BZ+Law4NLiAduHUmo+uBFB2Af2Gv8pHDyDQiI828DeXXPSXCDrjoxv8Yix/pQMRdMJHe/j1PT4aiKBsz1fXp4W2uOgQhLrno8sumhy0LoayUYVfc7vpzi6MwSkIFoyuHvgHBiWpiM4Y5GjcugId1iFnm96ilgNdDadI5oo1BAsYvNd+AwIah4ujEd5CAAAAAElFTkSuQmCC);
  }
  .trends {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAMAAAAr6AmrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEOUExURUdwTDu8nfSCb/SAcE8/fFVHhzm0mUpbe4GFhUpcev/////Rev7Qd15QlEHFqFpIjz7ApIC9y4O/z0pce0lce0pbe01dfpfT105efElce0pbe1tHj/+MeP/Vh4jJ2P/YiFhtiP/WiP+Jdf+Idj/ApYjJ2kpcelBVf09Zf0pbekpce0tde0pde//VgvWBcElbev+Jdf2Gc1JRhmnCwT3CpYjJ2FtHkIjL2f/Xi4jJ2D6/pFA/fFdGioTAzzy5noC/zP/Uf0XEpz3ApFA/ff7QeUlbe0w8dziwlvKAb/zMb0lbeny3xVpHjz2/o/7Vh4fI1/+IdYLAz/iDcVA+fDy8ofzNcvzNcVRChUpaejmylx7wpI8AAABGdFJOUwBB/P3vJOfHBJgBhMUSI8CxyH6d080mEC+1wuczholPCaPr6FhL3hxMlKtVeXT7/qnuujZH74xJOdyE7M1q0r6fGu3rvvMnjgAJAAAB0UlEQVRo3u3ZeVOCQByA4bID224FBEulC0E8x+77Nimz+/j+X6SFXWjSVWFdm2z2/QuG8RnmJ+CqIyM8Hq/vgGkMzI7aU0Nqx7n9b+whvAateDxu5yhfvL2E6nBfizZMpKNn73Dz5ONZwzBo38tedj/z5jaFrWlaGDu6ue52FsBWnWtQCm7vN1DnWm/b1HXdTga3F7DdmGM/b27/XTufTCZtldJ+f0YddnnGSnR29hp30OG2lGWZdiYTnj3Oft7cDm9riqKQ7GUUaLNfUEFsnXwNlh9Q5dYDxzXUZwA7r6oq4d5ZxfZa64FJbNdGqefN7SG0ZcuyCOvByhOq4uwUVtxSiZC2Tl7HFm9QRbi9e48rhLQt0zQJ6+8xbEfgdsazU2zmze3B29GEG2Bm+2sIUN1quu0lftog81p3ezsNaUv+8zvdxO20nPd0HTcT0oZrCPy549sbrOzveXP7N+yssx50n7HpRxwz+8q5Bt3vUie3uCNm5w3XPh/ueS96doz9vLk97HZOFEX0WczelkqlElrH8nlzu4sNALQBzH8OxuBOxFtrwu2CZ1/CHd+uAuB/n78AgEQrdlslmyLSz8VZQRB0SaBPkkQJvj7P/yfj8frsC4ocIkkUD39jAAAAAElFTkSuQmCC);
  }
  .privacy {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAMAAAAr6AmrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAD2UExURUdwTEpcejxKY0pbev/Vh/zMcP/Wh/3NcP/ViP3NcDtKZGx9nUlcekhWc+vAbjtKY+7JhjxLZEpadkVWckpbekpdez1LY0pdeztKZDtLY0pceklce0lde0lcekhgcP/UgT5LZj1MZElbe0RWcztKY0JTcP3NcP3Nb0lcejxLZP/WiDtKYztLZP/WiP3Nb/vEdP/Uff/WiPTOhv3Mb//WiP/Ncf/Wh/zNcP3NbztLZDtLY0pbevzMb/LFb/zMb/7VhztKY0lbeuuCMfWHM+yDMvOgTfKGM+yINfCWQvrCZu6OO/atWvSNOvm8ZvawV/7ThfzJbf3PgcTxqlwAAAA+dFJOUwCXjr/burn0+tvKA/ohzNrMhhYr2klxZPWfd82O4wphPVfxfdCKq+ytuLHirtGJ/T2PxtfFUXFb/mO+pbXDyGerWgAAAexJREFUaN7t2etywUAYBuCiVIUqAUIpjKID9HwiuxGgtL3/myk5NaNZTb/N/tv378YzO1/ehMjREQ8PD9OI0ksgVc3Fn/MZ0VM4VkyhXaKylngi5pWc9EURstuynPMnPaGlKkL79lbP0MulJkJOtiznS7STLiCSLUfo5pK8QGRbjtPsXAjY4JRPyj7V8tc2vCXAbd/PjotWq0V/zsL9YDpt0U1boQUh1rLwS+hEUiZd219JWOcTaGdNOvt7LWPiFdi2zY4UnVbzZleopl1wLIMQp5m4WZK083LFsBMQ2xhJgbRehw9FNLYtkQ4wuxKDj5v4URE+cKOBVXKP4C2sGXcR8hHGnSUDrkmAfEQdXJS/7Qj4fsVtbnP733Z/EAqFhudahiF7gvac6XkLBl+7fZf0YExKeETKY9cVXR4D7NHozo19C7ODbuwwzL5yY49h9gm3Pbd7C0b2hzqd4tmKif2uKFOM8ZyBrSqKMtnaeOO9vd22sqNJG6exFX0kGM+Y2NpI8JLJTDQaq97ba3MkCwYdXGn2bM3kupwfaAntdamdygkTu6efSiYzWen2hoWtHqwgnb3Ehy4dKvtrYuSTf6dxm9vcdmmz/G3fYfhMcg+zy67+K21D7IbLB8xy+9g5nVPn3DQe+BswHh7P8g3wBZifKL2dzQAAAABJRU5ErkJggg==);
  }
  .usage {
      background-image: url(data:image/png;base64,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);
  }
  .time {
      background-image: url(data:image/png;base64,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);
  }
  .surveys {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAMAAAAr6AmrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACfUExURUdwTPaCcfaDcVlmgPuIe++FdfaJdkpde01mgP+Id/+Pe0ZXdUlce0pbe/2Hdv+LeUlbev////+Idevt70haeDtKY8/U3FRlgvOAb0tdfMbL1bzDzvj4+tjc4+bo7f+TgT5Oaaqyvbm/x/mEcqWvu6Cpt1dnhNLV3vDx9Pv8/E5gfrq4wYhpdf/X0P/m4s2wsImVqXF/mHFleeXo7GlbbNtnyBkAAAAQdFJOUwDs2gorSF6+FHgZ+82RlzkcnnJGAAABIElEQVRo3u3Za4uCQBTG8a67W+zFtl3zVqVloXSv7//ZIh1NYQ6NjQcKnv87meEH6AFhptFACHHXbVpWq8NCv1lJLHgztVsMdN8ScbxtDrvTS/qei9LHXr+Wb/gr7ecxrf1RjLC7pU1tVds2iq3l9rG06V3VNpjtWR5hn7P1yvbfvx+IdnJ7J5bdsLo9HIg2cnubrZs69lRaLfa9YMOGDVvRjjyiSNv2yz+4QrGra+8NsoWuHZkOkYkZhJ3bQWwTjRzG+Q51bc9xiZwIc/Jitjeh0rbHMTmDB117ZfPZg+GYCvMNG/bz2adVUsBhL/xr4ZLNTmkWW9AcdkYz2Dldv32jK56FKdjLR8/ZRneL9c/wlIIN+2Xsz+r2F66/EKqtC7kR9pLg/O6lAAAAAElFTkSuQmCC);
  }
  .benefits {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAMAAAAr6AmrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURUdwTE08eFRDhVZFgVZEiFJBgFlGjk09eFRDhFdFi009d0w8eE09eFRChVNCglBBflJFhYBAgFVPjFdFiVdDiU8/eGe/X1pHj0w8d16uV////2S6XV1kg09JdF90fWOebVhFis/rzWi/YNHrz53VmIl7r5eLuPPz9V9PkoPLfHNjoIBxqK6lyFqFZl6nW/r7+qfaopHRi01DdWdek8noxtTQ4p6TvWnAYeHy4ODx3yG/HyUAAAAWdFJOUwB4xSLVrfzQ5/OO+8LfmYAyBBXr1FHRuRg4AAABN0lEQVRo3u3ZyW6DMBSFYYCgtiQ0U1sbp1PSMs9ROr3/izWFla1CIseWIuX8G1h9QldIoGvDQAipbzF1rLvR/1mueb+Qpx0y0CuldGxqoVub0qkcbZMj7LEtZd/yVhp0pZxN5aZi8XbEuiLedqRsj7ezsCvj7YmUfX3MvOnVOdqPLwOVZbk9xX7ob+X7/hNs2LBhw750u65qbfYbW8OG3W83723f7Ke7ab6U2QkTq1XZqyQS6KpROe/NX/t5t9cN3hPYA/aa7bTZyS7B9xI2bNiwYeuz4+eBiqLYnukOTyhOY112ELHqU43tiU8dMcaqjKjYx44EO2t/j3OiYo8s7L9J2tohUbH/nonzzvf0hzhvub29uFwnJMhD8T1xJc8y5tbBcxJ3Ln0IM3O85U1Py4lj2gZCSH2/6277nn05+QAAAAAASUVORK5CYII=);
  }
  .risks {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAMAAAAr6AmrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURUdwTFlGjlA/fU8+e1ZEiFJBgFZHg009eFRDhFdFi1RDhU09d008eEw8eFRChVJFhVNCgoBAgP///1dFiVdDiU8/eP7Vh1pHj0w8d/zMb/7TgWFMd4Fpjf///5d8jNCtiVhFiv7uzv7255eLuIl8r3Vlof39/P7en4Jzqq6lyLeVeWVRk+7CdP7y2v7ovv7Xjv7irfHw9fX0+NTQ4qCDh9iyglNCdp6TvXVfjVpId2BhGGIAAAAWdFJOUwD8wH3VrR3Q5/PLjnb73zKZBAHr1FGHdZOKAAABLklEQVRo3u3Z606DQBCG4QbcqkDPyi7qqpVypi2t5/u/MaX82k2pzQgJJN97AU+aCZRkZjBACDXf0GTWzcXxLNu8HZLlOeMnehZCjJw50T5JH2whTOJA+Bn2iDaWqWoFq6pAsYVDsi3V3suqvWozkj1W7divilXbINlX58xbXHbR/nqq7z3P8+9/2A9ufXee593Dhg0bNuxe2FF79kauW7OX8gU2bNgdey/dYtvL/8FoWbRlb0Mpox7abrHe4HsJGzZs2LD7aWeP9b2lafrR0R2eXpC1Zcc7GX42Y2v7WJ7tylVvwJvYx1r6zz6skRPexB55qg+7pENfs2mL+4k+7+TXftXnTTxnGDq+Snz9ObGJt4yZ8eedxJ6RjzATNl5c17QwmEO/75Q67mcIHe8HftT5kcSR6pcAAAAASUVORK5CYII=);
  }
  .research {
      background-image: url(data:image/png;base64,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);
  }
  .contact {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAMAAAAr6AmrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADPUExURUdwTP7Pdf/Tfv/Sevb29v3Ocv3Ncf3NcvX19fn5+f3isfb29vGOOe6FM+yDMuuDMfOmXfb29vf39/b29v///+yEMu2ENe+xfvCWRuuCMvzMb/X19f7Vh0lbeuzt76Krun2Jn+Dj5ri/ymh2kPzNcuuCMf3Pdv3Re/7UhP3SgPfu3Pzcnvjqzvrmv+6ZVPritPvfqfby6P3XjfzZlfX07u6lbfP088vP11Jkgfm8afSpV9XY3ubo67W8x3OAmPvIeu6nbrC3xImVqJCbrdve42KliyAAAAAadFJOUwDkS2xO+f770S1XtBJA8dOu8j3jFXodxL1mY8ZynQAAAahJREFUaN7t2UdvwkAQhuEAAYIIJT0ZJqa52zQDpgiU+v9/Uw4hEpC1vbNrS0jse/dzGH0+WL64UKlU59xt9Uq0aiWevr9piXcXb1+2ZKoo+7xs7aNNqRcS7O0rrQXB3nx2KH1paiena4capZBiL5akCS67FJs27+U3wQ61LiVNbfCE7W2fVJvDfnza2R3aCPu/TzWvo+mH+nxnb3qkdu/OsP4SIdcahjGXuvfQMBo1Fv1sGCnYhtFk2LgapmCvocSyEd/W73L2CiDKRnQGE2HZDwDibEQcu0LywAFItBE9nwrPxiYAl404HcwIsjvVAbhtxGDEe3gf4aBkm/fwIwtAwEac+mEsPPF0AEEbMYjZpBswZIKNiCM3fnMyNmuT+5uTs483ebg5WXt/k8ebk7f/Nvl/c6nYiJ6nA2Ri2xaHLGTbJvBFth0dIBOb8xgCNvcxyLZDlPltRwfIxKadmWLbJoiVaDuicqItdgwO27ZAqmhb4hgJtqMDZGLbVgoy2zYhncoMOyUaispWtqBdTMnOMexCKRW6lGd9GBdyxbJ0ubz6H6RSnXI/7wj67j6Xi5oAAAAASUVORK5CYII=);
  }
  .quitable {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAMAAAAr6AmrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACQUExURUdwTGe/X/WHM3y3xU1eeklbeofI101ggEpcfP/CYVBnhYbH1nWovDtKY2i/X3KjuF6vV0JTcEZXdGWSo01nd2a/X4TE0oC8zXmywv3Vh12daG2dsWOzYViSZ3WrvEthelp7lFSAcD5PaV+Em1pmeWCmZnK7lZ/Lx2q2fMPOr+fFhZ2Re/bIcH/DvnnArIPFytx7f1gAAAAKdFJOUwD///9J//8oSAMlU0HDAAABPElEQVRo3u3Ua2+CMBSAYTtWNgVw3AQtrgDufvv//25dm4UNNZB6TiLmvAkJX3g4OTTMZhRFQXbDR3d7ZvaiEv5wljbnreMO5FnbnFcFnq10H89WN0sPzZZ8ITwkW88uVmi2mj7JYe0oiOJOb3NQuxWy6fT9A3+KnThOUQVRp/cO/Im2SsR/hvdhbaXL5nf4JbS9couqMd8VwXbdPNGrQbFVIsCzc7LJJpvsc7TbwnRvAv0PBv3gbB73A7QPNEl79/a6fsGxd+9r1dPkbMydTPackE32Zdsy+cKbe3tXPj9+fng4tkm9Qb3Czk4HbBOeXWaw9oaxjOkrDEN4u4vsSdsPWHa6LRmKLet/MwPa9SZjDMPu7wLMTvd3AWT/7CLEsI/tws6e67Sd1mU4FOfX5okx9pVl8wu2KYoa0zfPt1pDSfD+DgAAAABJRU5ErkJggg==);
  }
  .consider {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAMAAAAr6AmrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEjUExURUdwTFxuiDxMYz9LZTxKZDxNZTtLZEJSbkRUbUldejxLZD1NZkxte1xtiUldfEVTbURQbkNSaztKYztKZDtLZDtKYztNZTxLYztLZDxLZEdXcztKYztKYztLZT5MZjxLZENTbjxKY0RVcTtLYzxMZFFjfTxNZTtKY19tiUpbezxLZEdad1trh0lbejtKYziwlvKAb/zMb0tce0dmfvnKb1R4iu1/cDqrlWdxhYdxgFFeeoiEfEObkpKLelhxiIVodsSqdtF5csF4dTydkEN6hDulk3Zvg02GjWNthnR4f359e7J3edW0c5hsdWlveGlieKSVdERxgnZld0GBh82vc7SgevHFcdq2cd19cue/cj+Kidq4dKZwdEmNjlpmed18cOS8cA0tIyUAAAAsdFJOUwB0WjCeTPbAw5K84wR6cxoOJuvJkqk6c/x/pNLxU0GJv9u0amOMRbRbeJaflf/JbwAAAq5JREFUaN7t2Hdv2kAYBnAKBhogZe8Qspp0BGwHY1YIgQxm0wyle33/T1GIMfecLare2URq4+dv6yfr/I6TXS4nTpysIK8O6RyVMK8t2c/+aK89KTvp07JF0wPa3po/FQ+x2FFf+SHPAW70VEntdsD2aw+VU2wvnjbag7Gkpdc02gLjoYTyBrsn6eke0XYswnriqQxlNySSd7TtZv+cbyj7E9hqE+0AR6lEYmBfSphbsH1RnjosgN2g7A7YWb7GOVj23mDnQ3z2tMh1e6Ci/Z7YKd6OT5Nv2QO6S+pE4J4mofzCrqvm1y752UsbitxPOl41lXfJ77YyB1+ScXLZfZB/3pJ5krNvxjbG42+d5pPdDf+qnRW05BBu3d9fj/Bb7syfSjA1vrds2mnDr/Isv4bmnZZmXMZGu63I87SNdpxxXoU3aLv+Qadl5Yq2Mx7WE9+l7VOZ5CNtJ9g/ZxztugK2fIV2kGNeeTJgj5CWW2gXeOqwCHaLsttgH3DVeCRI7CFlj4i9EeZrSi98y89AK3CHSPN2fJLYbbCvSZ3wruJZkZPeIUU4IXc29tKGIoe7po6f/iB9mbAyB3FWtSaKrExaOKsiNs7YurN3HtM+qVZssPe9WuDuc9i/EEXx4g7st/OnvEwdlDXttJNjUctZxbTTkmy3zG2jrdPTVzfaMcZ5tWmw+yLJF4O9x3riAm3XwK5VKDvOPqdiaFdFzA3aPPNqb7l9jnaRpw4Df2Vvc03waGbJeYt43vt8TZkF+xjoM6iTJGfDT4uc1HfNXCZTm3cVz4qc2NWa8bRn9i7/qBLgHjtvemj5kj9uYQyGd3AMVvvf726of0oeKzN23dk7j2qH1/WsBfXkXuiJuuyJu6wn4bI7q7QLC7tou+1Z2G7Hduz/zo4G9Gy6nDhxstL8BkUci6XYGwgkAAAAAElFTkSuQmCC);
  }
.consent-viewer-holder {
  border: solid 10px rgba(108, 122, 137, 0.3);
  width: 40%;
  margin: 2rem 0 3rem 0;
}
@media screen and (max-width: 50em) {
  section {
    display: block;
    overflow: hidden;
  }
  .consent-viewer-holder {
    width: 100%;
    height: 50%;
    margin: 0;
    border: none;
  }
  .summary {
    margin: 0;
    width: 100%;
    border: none;
    height: 50%;
    border-top: solid 3px rgba(108, 122, 137, 0.3);
    padding: 1rem;
    box-sizing: border-box;
    overflow-y: auto;
  }
  .summary h3 {
    padding: .5rem .5rem .5rem 2.5rem;
  }
  
}
</style>
