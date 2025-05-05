<template>
  <div>
    <v-card>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="deep-purple-accent-4"
        :prev-icon="
          () => h(AppIcon, {  icon: ['fas', 'chevron-left'] })
        "
        :next-icon="
          () => h(AppIcon, { icon: ['fas', 'chevron-right'] })
        "
        height="30"
        size="x-small"
        slim
        density="compact"
      >
        <v-tab :value="1">Landscape</v-tab>
        <v-tab :value="2">City</v-tab>
        <v-tab :value="3">Abstract</v-tab>
        <v-tab :value="4">Abstract</v-tab>
        <v-tab :value="5">Abstract</v-tab>
        <v-tab :value="6">Abstract</v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
          <v-container fluid>
            <v-row>
              <v-col v-for="i in 6" :key="i" cols="12" md="4">
                <v-img
                  :lazy-src="`https://picsum.photos/10/6?image=${
                    i * n * 5 + 10
                  }`"
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  height="205"
                  cover
                />
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
};


console.log('AppTabs.vue man')
</script>
