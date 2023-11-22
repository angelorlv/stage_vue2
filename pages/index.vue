<template>
    <div class="h-screen w-screen flex items-center justify-center">
        
        <div class="border rounded max-w-[500px] min-w-[500px]">
            <TabView>
                
                <TabPanel class="flex flex-col" header="CONNEXION">
                    
                    <!-- <span class="text-xl block underline mb-5"> LOGIN  </span> -->

                    <div class="flex flex-col mb-2">
                        <span class="font-bold"> Identifiant </span>
                        <InputText placeholder="john" v-model="u.ut_login" />
                    </div>

                    <div class="flex flex-col mb-2">
                        <span class="font-bold"> Mot de passe </span>
                        <InputText type="password" placeholder="***********" v-model="u.ut_pass"  />
                    </div>

                    <div class="flex justify-end mb-2">
                        <Button label="Se connecter" @click="authUser" :loading="loading_ent"/>
                    </div>
                    

                </TabPanel>
                <TabPanel class="flex flex-col" header="INSCRIPTION">

                    <div class="flex flex-col mb-2">
                        <span class="font-bold"> Compte </span>
                        <Dropdown v-model="u.ut_type" :options="opt_type_compte" optionLabel="label"  optionValue="value" placeholder="Choisissez le type de compte"/>
                    </div>

                    <div class="flex flex-col mb-2">
                        <span class="font-bold"> Identifiant </span>
                        <InputText placeholder="john" v-model="u.ut_login" />
                    </div>

                    <div class="flex flex-col mb-2">
                        <span class="font-bold"> Mot de passe </span>
                        <InputText type="password" placeholder="***********" v-model="u.ut_pass"  />
                    </div>

                    <Divider />
                    
                    <div class="flex flex-col" v-if="u.ut_type == 'ent'">

                        <div class="flex flex-col mb-2">
                            <span class="font-bold"> Nom de votre Entreprise </span>
                            <InputText placeholder="Telma" v-model="u.ent_label" />
                        </div>

                    </div>

                    <div class="flex flex-col" v-else-if="u.ut_type == 'etu'">

                        <div class="flex flex-col mb-2">
                            <span class="font-bold"> Prénom </span>
                            <InputText placeholder="John" v-model="u.etu_lastname" />
                        </div>
                        <div class="flex flex-col mb-2">
                            <span class="font-bold"> Nom </span>
                            <InputText placeholder="Doe" v-model="u.etu_firstname" />
                        </div>

                    </div>

                    <Divider />

                    <div class="flex justify-end mb-2">
                        <Button label="S'inscrire" @click="authUser" :loading="loading_ent"/>
                    </div>

                </TabPanel>
            </TabView>
        </div>

    </div>
</template>

<script setup>


import { useGlobalStore } from "@/stores/global";
import { storeToRefs } from 'pinia';

const global = useGlobalStore()
const { user,connected } = storeToRefs(global)


const router = useRouter()


const opt_type_compte = ref([
    {label:"Entreprise",value:"ent"},
    {label:"Etudiant",value:"etu"},
])

//Connexion entreprise
const loading_ent = ref(false)
const u = ref({
    ut_login:'',
    ut_pass:'',
    ut_type:'ent', // etu | ent | etab
    ent_label:'',
    etu_firstname:'',
    etu_lastname:''
})

async function authUser(){

    loading_ent.value = true
    try {
        
        const r = $fetch('/api/p/login',{
            method:"post",
            body:ent_u
        })

        if(r.status){
            connected.value = true
            user.value = r.u

        }else{
            console.error(r.message)
        }

    } catch (e) {
        console.error(e);
    }

    loading_ent.value = true
}



</script>