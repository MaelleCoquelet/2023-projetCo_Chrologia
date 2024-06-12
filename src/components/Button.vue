<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'dark' | 'disabled'
    size?: 'small' | 'medium'
    text?: string
  }>(),
  {
    variant: 'default',
    size: 'small'
  }
)

const variantClass = {
  default: 'bg-orpink-200 text-slate-900',
  dark: 'bg-slate-900 text-white',
  disabled: 'bg-transparent border-2 border-red-500 text-red-500'
}

const sizeClass = {
  small: 'text-sm',
  medium: 'w-full text-base'
}
</script>

<template>
  <button
    class="inline-flex text-center px-4 py-2 font-bold uppercase items-center justify-center rounded-md transition duration-300 ease-in-out"
    :class="[variantClass[props.variant], sizeClass[props.size]]"
  >
    {{ text }}
  </button>
</template>
