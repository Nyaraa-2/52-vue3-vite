<script lang="ts" setup>
defineProps({
  gladiator: {
    type: Object,
    required: true,
  },
})
</script>
<template>
    <div>
      <div
        class="max-w-60 min-w-60 h-64 flex flex-col justify-between bg-white dark:bg-red-800 rounded-lg border border-gray-400 mb-6 py-5 px-4"
      >
        <div>
          <h4
            tabindex="0"
            class="focus:outline-none text-red-800 dark:text-gray-100 font-bold mb-3"
          >
            {{ gladiator.nom }}
          </h4>
          <p
            tabindex="0"
            class="focus:outline-none text-gray-800 dark:text-gray-100 text-sm"
          >
     <p class="text-gray-900">Adress :{{ gladiator.adresse }}</p>
      <p class="text-gray-900">Force :{{ gladiator.force }}</p>
      <p class="text-gray-900">Equilibre :{{ gladiator.equilibre }}</p>
      <p class="text-gray-900">Vitesse :{{ gladiator.vitesse }}</p>
      <p class="text-gray-900">Strategie :{{ gladiator.strategie }}</p>
          </p>
        </div>
        <div>
          <div class="flex items-center justify-between text-gray-800">
                    <label  for="select">Select</label
      ><input id="select" name="select" type="checkbox" />


            </div>
          </div>
        </div>
      </div>

</template>
