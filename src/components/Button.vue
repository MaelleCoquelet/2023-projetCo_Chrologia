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
    size: 'small',
}
)

const variantClass ={
    default: 'bg-orpink-200 text-slate-900 text-center font-bold uppercase',
    dark: 'bg-slate-900 text-white text-center font-bold uppercase'    
}

const sizeClass ={
    small: 'px-4 py-2 text-sm',
    medium: 'w-full px-4 py-2 text-base'
}

</script>

<template>
    <RouterLink class="inline-flex items-center justify-center rounded-md transition duration-300 ease-in-out" 
    :class="[variantClass[props.variant], sizeClass[props.size]]" 
    :to="`${url}`">
    
    <component :class="props.variant === 'dark' ? 'text-white' : 'text-slate-900'"/>
    {{text}}
        
    </RouterLink>

</template>