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
    default: 'bg-orpink-200 text-slate-900'
    dark: ,    
}


</script>