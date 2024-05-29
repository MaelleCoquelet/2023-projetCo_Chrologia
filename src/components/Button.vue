<script setup lang="ts">

const props = withDefaults
 (defineProps<{
    variant?: 'default' | 'dark' 
    size?:'small' | 'medium' 
    text?: string
    url?: string
}>(),
{
    variant: 'default',
    size: 'medium',
}
)

const variantClass ={
    default: 'bg-orpink-200 text-slate-900 text-center',
    dark: 'bg-slate-900 text-white text-center'    
}

const sizeClass ={
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
}

</script>

<template>
    <RouterLink
    class="inline-flex items-center gap-2 text-slate-900 border-2 font-bold rounded-lg transition duration-300 ease-in-out"
    :class="[variantClass[props.variant], sizeClass[props.size]]"
    :to="`${url}`"
  >
    <component
      v-if="props.icon"
      :is="props.icon"
      :class="props.variant === 'dark' ? 'stroke-white' : 'stroke-slate-900'"
      class="size-5"
    />
    {{ text }}
  </RouterLink>


</template>