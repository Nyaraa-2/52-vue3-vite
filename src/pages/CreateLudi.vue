<script lang="ts" setup>
import Layout from '@/components/Layout.vue'
import { useLanisteStore } from '../stores/laniste'
import { useLudi } from '@/composables/useLudi'
const router = useRouter()
const lanisteStore = useLanisteStore()
const { doCreateLudi } = useLudi()
const ludiChosenByUser = ref()

const createLudi = async (type: string, name: string) => {
  ludiChosenByUser.value = type
  await doCreateLudi(name, ludiChosenByUser.value[0], lanisteStore.laniste.id)
  router.push(`/laniste/${lanisteStore.laniste.id}`)
}
</script>

<template>
  <Layout>
    <Ludi @ludi="createLudi" />
  </Layout>
</template>
