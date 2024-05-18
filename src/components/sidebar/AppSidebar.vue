<template>
    <div
        class="fixed top-0 left-0 bottom-0 bg-sidebar text-sidebar-text transition-[width] z-50"
        :class="{
            'w-sidebar': expanded,
            'w-sidebar-small': !expanded,
        }"
    >
        <app-button @click="handleExpand">Expand Sidebar</app-button>
    </div>
</template>

<script setup>
import {inject} from 'vue';
import AppButton from '@components/buttons/AppButton.vue';

const expanded = inject('sidebar-expanded');
const handleExpand = () => {
    expanded.value = !expanded.value;
};
</script>
