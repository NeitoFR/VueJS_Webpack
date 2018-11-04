<template>
    <div class="flex-container">
        <div class="scenario">
            <div class="img-scenario">
                <img src="../../static/images/night.png" alt="Scénario nuit">
            </div>
            <div class="scenario-text">
                <h3>
                    <div class="scenario-title">Scénario du soir</div>
                    <div class="scenario-time">19h00</div>
                </h3>
                <br><br>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
            </div>
        </div>
        
        {{HTMLcontent}}

        <div class="scenario" id="show-modal" @click="showScenarioModal = true">
            <div class="img-scenario">
                <img src="../../static/images/more.png" alt="Nouveau scénario">
            </div>
            <div class="scenario-text">
                <h3>
                    <div class="scenario-title">Nouveau scénario</div>
                    <div class="scenario-time">XXXX</div>
                </h3>
                <br><br>
                <span>...</span>
            </div>
        </div>

        <div v-if="showScenarioModal">
            <!-- <ScenarioModal></ScenarioModal> -->
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <div class="modal-header">
                                <slot name="header">
                                    Nouveau scénario
                                </slot>
                            </div>

                            <div class="modal-body">
                                <slot name="body">
                                    <label for="newTitle">Titre</label>
                                    <input type="text" v-model="newTitle"><br>
                                    
                                    <label for="newTime">Heure</label>
                                    <input type="text" v-model="newTime"><br>
                                    
                                    <label for="newText">Texte</label>
                                    <input type="text" v-model="newText"><br>

                                    <img class="profile-image" :src="newPicture" />
                                    <input type="file" round class="change-profile-image" @change="onFileChange" />
                                </slot>
                            </div>

                            <div class="modal-footer">
                                <slot name="footer">
                                    <button class="modal-default-button" @click="addScenario">
                                        OK
                                    </button>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    <!-- <button @click="addCard">Add Card</button>
        <div v-for="(template, index) in newScenarioTemplate" :key="index">
            <component  :is="template['template-type']" :title="template.template.title">
            </component>
        </div> -->
    </div>
</template>


<script>

// import Vue from 'vue'

// Vue.component('scenarioTemplate', {
//     data (){
//         return [

//         ]
//     },
//     template: `<div class="scenario">
//             <div class="img-scenario">
//                 <img src="{{newPicture}}" alt="Scénario nuit">
//             </div>
//             <div class="scenario-text">
//                 <h3>
//                     <div class="scenario-title">{{newTexte}}</div>
//                     <div class="scenario-time">19h00</div>
//                 </h3>
//                 <br><br>
//                 <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
//             </div>
//         </div>`
// })

// import ScenarioModal from "./ScenarioModal";

export default {
    name: "Scenario",
    // components: {
    //     ScenarioModal
    // },
    data () {
        return {
            showScenarioModal: false,
            newTitle: "",
            newTime: "",
            newText: "",
            newPicture: "",
            HTMLcontent: null,
            newScenario: [],
            nbScenario: 0
        }
     },
    methods: {
    // addCard: function () {
    //   let supportedCards = ['scenarioTemplate']
    //   let seed = Math.floor(Math.random()*supportedCards.length)
    //   this.newScenarioTemplate.push({'template': {'title': 'I am new template for ' + supportedCards[seed]}, 'card-type': supportedCards[seed]})
    // },
        addScenario(e) {
            this.showScenarioModal = false
            this.newScenario.push({
                newTitle: this.newTitle,
                newTime: this.newTime,
                newText: this.newText,
                newPicture: this.newPicture
            })
            this.newTitle, this.newTime, this.newText, this.newPicture = ""

            let scenario = this.newScenario[this.nbScenario]
            let tempate = `<div class="scenario">
                        <div class="img-scenario">
                            <img src="` + scenario.newPicture + `" alt="` + scenario.newTitle + `">
                        </div>
                        <div class="scenario-text">
                            <h3>
                                <div class="scenario-title">` + scenario.newTitle + `</div>
                                <div class="scenario-time">` + scenario.newTime + `</div>
                            </h3>
                            <br><br>
                            <span>` + scenario.newText + `</span>
                        </div>
                    </div>`
            // if(){
                if(this.HTMLcontent == null){
                    this.HTMLcontent = tempate
                }else{                
                    this.HTMLcontent += tempate
                }
            // }

            this.nbScenario++
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files
            if (!files.length) {
                return
            }
            this.createImage(files[0])
        },
        createImage(file) {
            var reader = new FileReader()

            reader.onload = (e) => {
                this.newPicture = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }
}
</script>

